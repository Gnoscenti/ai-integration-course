import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";
import { getCourseById, getLessonMarkdownUrl, markLessonAsComplete, getUserProfile, getUserCourseProgress } from "../firebaseService"; // Import Firestore service
import { Lesson as LessonType, UserProfile, UserCourseProgress } from "../types/course"; // Import types
import { useAuth } from "../context/AuthContext"; // For gating logic
import AnimatedAvatar from "../components/layout/AnimatedAvatar"; // Import AnimatedAvatar
import CodeSandbox from "../components/common/CodeSandbox"; // Assuming CodeSandbox is still relevant

const LessonPage: React.FC = () => {
  const { courseId, moduleId, lessonId } = useParams<{ courseId: string; moduleId: string; lessonId: string }>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState<LessonType | null>(null);
  const [moduleTitle, setModuleTitle] = useState<string>("");
  const [courseTitle, setCourseTitle] = useState<string>("");
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAllowed, setIsAllowed] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [userProgress, setUserProgress] = useState<UserCourseProgress | null>(null);
  const [videoUrlToPlay, setVideoUrlToPlay] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchLessonData = async () => {
      if (!courseId || !moduleId || !lessonId) {
        setError("Course, module, or lesson ID missing.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const courseData = await getCourseById(courseId);
        if (!courseData) {
          setError(`Course with ID ${courseId} not found.`);
          setLoading(false); return;
        }
        setCourseTitle(courseData.title);

        const currentModule = courseData.modules.find(m => m.id === moduleId);
        if (!currentModule) {
          setError(`Module with ID ${moduleId} in course ${courseId} not found.`);
          setLoading(false); return;
        }
        setModuleTitle(currentModule.title);

        const currentLesson = currentModule.lessons.find(l => l.id === lessonId);
        if (!currentLesson) {
          setError(`Lesson with ID ${lessonId} in module ${moduleId} not found.`);
          setLoading(false); return;
        }
        setLesson(currentLesson);

        let profile: UserProfile | null = null;
        if (currentUser) {
          profile = await getUserProfile(currentUser.uid);
          setUserProfile(profile);
          const progress = await getUserCourseProgress(currentUser.uid, courseId);
          setUserProgress(progress);
        }
        
        const canAccess = !!(currentLesson.isFree || (currentUser && (profile?.isSubscribed || profile?.activeTrial)));
        setIsAllowed(canAccess);

        if (canAccess) {
          if (currentLesson.storagePath) {
            const mdUrl = await getLessonMarkdownUrl(currentLesson.storagePath);
            const response = await fetch(mdUrl);
            if (!response.ok) throw new Error(`Failed to fetch lesson content: ${response.statusText}`);
            const text = await response.text();
            setMarkdownContent(text);
          }
          setVideoUrlToPlay(currentLesson.videoUrl);

        } else {
          setError("You do not have access to this premium lesson.");
        }

      } catch (err: any) {
        console.error("Error fetching lesson data:", err);
        setError(err.message || `Failed to load lesson: ${lessonId}.`);
      } finally {
        setLoading(false);
      }
    };

    fetchLessonData();
  }, [courseId, moduleId, lessonId, currentUser]);

  const handleMarkComplete = async () => {
    if (currentUser && courseId && lessonId) {
      try {
        await markLessonAsComplete(currentUser.uid, courseId, lessonId);
        alert("Lesson marked as complete!");
        const progress = await getUserCourseProgress(currentUser.uid, courseId);
        setUserProgress(progress);
      } catch (err) {
        console.error("Error marking lesson complete:", err);
        alert("Failed to mark lesson as complete.");
      }
    }
  };
  
  const isLessonCompleted = () => {
    return userProgress?.completedLessons?.includes(lessonId || "") || false;
  };

  if (loading) return <div className="container mx-auto px-4 py-8 text-center"><p className="font-sans">Loading lesson...</p></div>;
  if (error && !isAllowed) {
     return (
      <div className="container mx-auto px-4 py-8 text-center bg-gray-100 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-headings font-semibold mb-4 text-yellow-600">Access Denied</h2>
        <p className="text-gray-700 font-sans mb-6">{error} Please <Link to="/signup" className="text-blue-600 hover:underline">sign up</Link> or <Link to="/login" className="text-blue-600 hover:underline">log in</Link> to access, or check your subscription.</p>
        <button 
          onClick={() => navigate(-1)} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-sans font-semibold py-2 px-4 rounded transition"
        >
          Go Back
        </button>
      </div>
    );
  }
  if (error) return <div className="container mx-auto px-4 py-8 text-center"><p className="text-red-500 font-sans">{error}</p></div>;
  if (!lesson) return <div className="container mx-auto px-4 py-8 text-center"><p className="font-sans">Lesson details not found.</p></div>;

  return (
    <div className="container mx-auto px-4 py-8 bg-homeroom_bg shadow-lg rounded-lg text-gray-800">
      <nav aria-label="breadcrumb" className="mb-6 text-sm text-gray-600 font-sans">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/courses" className="hover:underline">Courses</Link>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </li>
          <li className="flex items-center">
            <Link to={`/courses`} className="hover:underline">{courseTitle}</Link>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </li>
          <li className="flex items-center">
            <span className="text-gray-500">{moduleTitle}</span>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </li>
          <li className="text-gray-500">
            {lesson.title}
          </li>
        </ol>
      </nav>

      <div className="lg:flex lg:space-x-8">
        {/* Main Lesson Content Area */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-headings font-bold mb-6 text-gray-800">{lesson.title}</h1>
          
          {videoUrlToPlay && (
            <div className="mb-8 aspect-video rounded-lg overflow-hidden shadow-md">
              <ReactPlayer url={videoUrlToPlay} width="100%" height="100%" controls />
            </div>
          )}

          <article className="prose lg:prose-xl max-w-none bg-white p-6 rounded-md mb-8 font-sans">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </article>

          {lesson.id === "lesson_with_sandbox_example" && <CodeSandbox />} 

          <div className="mt-8 flex justify-between items-center">
            <button 
              onClick={() => navigate(-1)} 
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-sans font-semibold py-2 px-6 rounded transition"
            >
              Back to Module
            </button>
            {!isLessonCompleted() && currentUser && (
              <button 
                onClick={handleMarkComplete} 
                className="bg-green-500 hover:bg-green-600 text-white font-sans font-semibold py-2 px-6 rounded transition"
              >
                Mark as Complete
              </button>
            )}
            {isLessonCompleted() && (
                <p className="text-green-600 font-sans font-semibold">Lesson Completed!</p>
            )}
          </div>
        </div>

        {/* AI Tutor Section (Right Sidebar) */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="sticky top-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-headings font-semibold mb-4 text-gray-700">AI Tutor</h3>
            <AnimatedAvatar size={120} />
            <p className="text-sm text-gray-600 mt-4 font-sans">
              Hello! I'm your AI Tutor. How can I help you with this lesson on "{lesson.title}"?
            </p>
            <textarea 
              className="w-full mt-4 p-2 border rounded-md text-sm text-gray-700 font-sans" 
              rows={3} 
              placeholder="Ask a question about this lesson... (feature coming soon)"
              disabled
            ></textarea>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LessonPage;

