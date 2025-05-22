import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCourses, getUserCourseProgress } from '../firebaseService'; // Import Firestore service
import { Course, Module, Lesson, UserCourseProgress } from '../types/course'; // Import types
import { useAuth } from '../context/AuthContext'; // For gating logic

const CourseOverviewPage: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState<UserCourseProgress | null>(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        const courses = await getCourses();
        if (courses.length > 0) {
          const currentCourse = courses[0]; // Assuming we always load the first course for this page
          setCourse(currentCourse);
          if (currentUser && currentCourse) {
            const progress = await getUserCourseProgress(currentUser.uid, currentCourse.id);
            setUserProgress(progress);
          }
        } else {
          setError('No courses found.');
        }
      } catch (err) {
        console.error("Error fetching course data:", err);
        setError('Failed to load course data.');
      }
      setLoading(false);
    };

    fetchCourseData();
  }, [currentUser]);

  if (loading) {
    return <p className="text-center text-gray-500 py-10 font-sans">Loading course content...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-10 font-sans">{error}</p>;
  }

  if (!course) {
    return <p className="text-center text-red-500 py-10 font-sans">Course data not found.</p>;
  }

  const handleLessonClick = (lesson: Lesson, moduleId: string) => {
    const userIsSubscribed = currentUser ? true : false; // Simplified: logged-in users are treated as subscribed for now

    if (!lesson.isFree && !userIsSubscribed) {
      alert("This is a premium lesson. Please sign up or subscribe to access.");
      navigate('/signup');
      return;
    }
    navigate(`/courses/${course.id}/modules/${moduleId}/lessons/${lesson.id}`);
  };

  const isLessonCompleted = (lessonId: string) => {
    return userProgress?.completedLessons?.includes(lessonId) || false;
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen font-sans">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-8">
        <h1 className="text-4xl font-headings font-bold mb-4 text-gray-800">{course.title}</h1>
        <p className="text-lg text-gray-600 mb-8 font-sans">{course.description}</p>

        {course.modules.map((module: Module) => (
          <div key={module.id} className="mb-10 p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-headings font-semibold mb-3 text-blue-600">{module.title}</h2>
            <p className="text-gray-600 mb-5 text-sm font-sans">{module.description}</p>
            <ul className="space-y-3">
              {module.lessons.map((lesson: Lesson) => (
                <li 
                  key={lesson.id} 
                  onClick={() => handleLessonClick(lesson, module.id)}
                  className={`flex justify-between items-center p-4 rounded-md transition-all duration-200 ease-in-out cursor-pointer 
                              ${(!lesson.isFree && (!currentUser /* Simplified gating */)) 
                                ? 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                                : 'bg-blue-50 hover:bg-blue-100 text-gray-700'}
                              ${lesson.isFree ? 'border-l-4 border-green-500' : 'border-l-4 border-gray-300'}
                              ${isLessonCompleted(lesson.id) ? 'opacity-70' : ''}
                            `}
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-blue-500">
                      {isLessonCompleted(lesson.id) ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                    <span className={`font-sans font-medium ${isLessonCompleted(lesson.id) ? 'line-through text-gray-500' : ''}`}>{lesson.title}</span>
                  </div>
                  <div className="flex items-center">
                    {lesson.isFree && (
                      <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded-full mr-2 font-sans">Free</span>
                    )}
                    {(!lesson.isFree && (!currentUser /* Simplified gating */)) && (
                      <span className="text-xs bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full mr-2 font-sans">Premium</span>
                    )}
                    <span className="text-gray-400 text-sm font-sans">
                      {(!lesson.isFree && (!currentUser /* Simplified gating */)) ? 'Login to access' : 'View Lesson'}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOverviewPage;

