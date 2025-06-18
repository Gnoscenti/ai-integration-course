import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";
import { getLessonMarkdownUrl, markLessonAsComplete } from "../firebaseService";
import AnimatedAvatar from "../components/layout/AnimatedAvatar";

const LessonPage: React.FC = () => {
  const { courseId, moduleId, lessonId } = useParams<{ courseId: string; moduleId: string; lessonId: string }>();
  const navigate = useNavigate();

  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [videoUrlToPlay, setVideoUrlToPlay] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        setLoading(true);

        // HARDCODED PATH TEST
        const testPath = "course_content/ai-integration/module-1/lesson-1.md";
        const mdUrl = await getLessonMarkdownUrl(testPath);

        const response = await fetch(mdUrl);
        if (!response.ok) throw new Error(`Failed to fetch lesson content: ${response.statusText}`);
        const text = await response.text();
        setMarkdownContent(text);

        // Simulate video path if needed
        setVideoUrlToPlay("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      } catch (err: any) {
        console.error("Error fetching lesson data:", err);
        setError(err.message || "Unknown error.");
      } finally {
        setLoading(false);
      }
    };

    fetchLessonData();
  }, []);

  if (loading) return <div className="container mx-auto px-4 py-8 text-center"><p className="font-sans">Loading lesson...</p></div>;
  if (error) return <div className="container mx-auto px-4 py-8 text-center"><p className="text-red-500 font-sans">{error}</p></div>;

  return (
    <div className="container mx-auto px-4 py-8 bg-homeroom_bg shadow-lg rounded-lg text-gray-800">
      <h1 className="text-4xl font-headings font-bold mb-6 text-gray-800">Test Lesson Load</h1>

      {videoUrlToPlay && (
        <div className="mb-8 aspect-video rounded-lg overflow-hidden shadow-md">
          <ReactPlayer url={videoUrlToPlay} width="100%" height="100%" controls />
        </div>
      )}

      <article className="prose lg:prose-xl max-w-none bg-white p-6 rounded-md mb-8 font-sans">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </article>

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-sans font-semibold py-2 px-6 rounded transition"
        >
          Back
        </button>
      </div>

      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-headings font-semibold mb-4 text-gray-700">AI Tutor</h3>
        <AnimatedAvatar size={120} />
        <p className="text-sm text-gray-600 mt-4 font-sans">
          Hello! I'm your AI Tutor. This is a hardcoded test for loading a lesson from Firebase Storage.
        </p>
        <textarea
          className="w-full mt-4 p-2 border rounded-md text-sm text-gray-700 font-sans"
          rows={3}
          placeholder="Ask a question about this lesson... (feature coming soon)"
          disabled
        ></textarea>
      </div>
    </div>
  );
};

export default LessonPage;