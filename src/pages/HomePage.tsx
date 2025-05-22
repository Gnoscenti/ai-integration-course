import React from 'react';
import AnimatedAvatar from '../components/layout/AnimatedAvatar'; // Ensure this path is correct

const HomePage: React.FC = () => {
  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for email submission logic
    alert("Thank you for subscribing! We'll be in touch with your free lesson.");
    // Consider navigation or clearing the form
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col font-body">
      {/* Hero Section with upgraded Suzi-style overlay and animation */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-12 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-purple-800/40 z-0"></div>
        <div className="z-10 flex flex-col items-center">
          {/* AnimatedAvatar is used here as per the new landing page code */}
          <AnimatedAvatar size={150} /> 
          <h1 className="text-4xl md:text-5xl font-headings font-extrabold mt-8 leading-tight max-w-3xl">
            The AI Revolution Will Reward Those Who Think Differently. Learn How.
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-2xl text-gray-300 font-body">
            Golden Age Mindset gives you the tools, insights, and strategies to outthink the hype and invest with confidence in the age of AI.
            Join today and unlock your 7-day free trial.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <a
              href="/signup"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full text-lg font-headings font-bold shadow-xl transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Activate Your 7-Day Free Access
            </a>
            <a
              href="#free-lesson" // This should ideally link to a specific part of the page or a route
              className="text-blue-300 hover:text-blue-400 underline text-lg font-headings font-medium mt-2 md:mt-0 transition transform hover:scale-105"
            >
              See Inside the Course
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-2 font-body">
            Cancel anytime before your trial ends. No risk.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-12">
        <h2 className="text-3xl font-headings font-bold text-center mb-8">What Learners Say</h2>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <blockquote className="italic text-gray-300 font-body">
            "Golden Age Mindset shifted the way I approach AI investing. The lessons were actionable, clear, and opened my eyes to what others miss."
          </blockquote>
          <blockquote className="italic text-gray-300 font-body">
            "In a world of noise, this is the course that helps you cut through the AI hype."
          </blockquote>
        </div>
      </section>

      {/* Email Capture Section */}
      <section id="free-lesson" className="py-16 px-4 bg-white text-gray-900 text-center">
        <h2 className="text-3xl font-headings font-bold mb-4">Get a Free Lesson</h2>
        <p className="text-sm text-gray-600 mb-8 font-body">
          Enter your email to receive our exclusive AI Investing Mistakes PDF and a sample lesson.
        </p>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full max-w-md mx-auto px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-gray-700 font-body"
            required
          />
          <button
            type="submit"
            className="w-full max-w-md mx-auto bg-blue-600 hover:bg-blue-700 text-white font-headings font-semibold py-3 rounded-md transition"
          >
            Get Free Lesson
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400 font-body">
        © {new Date().getFullYear()} Golden Age Mindset. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;

