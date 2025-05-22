import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent)]"></div>
      </div>
      <div className="relative z-10 p-10 flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Learn AI. Design the Future.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-slate-300">
          A revolutionary platform delivering engaging online AI education. Interactive. Personalized. Unmatched.
        </p>
        <a href="/signup" className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-lg font-medium transition">
          Enroll Today — It’s Free
        </a>
        <p className="text-sm text-slate-400 mt-2">
          Join thousands shaping the future of AI.
        </p>
      </div>
      <div className="absolute bottom-10 right-10 w-32 h-32 md:w-48 md:h-48 animate-pulse rounded-full bg-gradient-to-tr from-cyan-400 via-pink-500 to-purple-600 opacity-60">
        <div className="w-full h-full rounded-full bg-opacity-30 backdrop-blur-md flex items-center justify-center text-white font-bold text-xl">
          AI
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
