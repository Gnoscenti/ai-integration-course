import React from 'react';

// Placeholder data - this would eventually come from an API and user data
const recapData = {
  userName: 'Alex FutureLearner',
  lastSessionDate: 'May 10, 2025',
  progress: [
    { course: 'AI Fundamentals', completedModules: 3, totalModules: 5, lastModule: 'Key Branches of AI' },
    { course: 'Machine Learning Mastery', completedModules: 1, totalModules: 8, lastModule: 'Introduction to Supervised Learning' },
  ],
  strengths: ['Understanding Core AI Concepts', 'Python Basics for ML'],
  areasForImprovement: ['Advanced Statistical Models', 'NLP Techniques'],
  suggestedNextSteps: [
    { title: 'Review: Key Branches of AI', link: '/lesson/ai-fundamentals#key-branches' },
    { title: 'Start: Module 2 of ML Mastery - Data Preprocessing', link: '/lesson/ml-mastery#module-2' },
    { title: 'Explore: Introduction to NLP (Optional)', link: '/lesson/nlp-deep-dive' },
  ],
  achievements: [
    { name: 'AI Explorer Badge', date: 'May 1, 2025' },
    { name: 'Python Novice Certificate', date: 'April 20, 2025' },
  ]
};

const PersonalizedRecapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-body py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-headings font-bold text-gray-900 mb-4">Your Personalized Recap, {recapData.userName}!</h1>
        <p className="text-gray-600 mb-8 font-body">Last session: {recapData.lastSessionDate}. Let's see how you're progressing!</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Progress Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-headings font-semibold text-blue-700 mb-4">Course Progress</h2>
            {recapData.progress.map((item, index) => (
              <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
                <h3 className="font-headings font-medium text-gray-700">{item.course}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1 mt-1">
                  <div 
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${(item.completedModules / item.totalModules) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 font-body">Completed {item.completedModules} of {item.totalModules} modules. Last viewed: {item.lastModule}</p>
              </div>
            ))}
          </div>

          {/* Strengths & Areas for Improvement */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-headings font-semibold text-blue-700 mb-4">Learning Insights</h2>
            <div className="mb-6">
              <h3 className="font-headings font-medium text-gray-700 mb-2">Strengths:</h3>
              <ul className="list-disc list-inside text-green-600 font-body">
                {recapData.strengths.map((strength, index) => <li key={index}>{strength}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-headings font-medium text-gray-700 mb-2">Areas for Improvement:</h3>
              <ul className="list-disc list-inside text-orange-600 font-body">
                {recapData.areasForImprovement.map((area, index) => <li key={index}>{area}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Suggested Next Steps */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-headings font-semibold text-blue-700 mb-4">Suggested Next Steps</h2>
          <ul className="space-y-3">
            {recapData.suggestedNextSteps.map((step, index) => (
              <li key={index} className="p-3 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                <a href={step.link} className="font-headings font-medium text-blue-600 hover:text-blue-800">
                  {step.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Achievements Section */}
         <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-headings font-semibold text-blue-700 mb-4">Achievements & Badges</h2>
          {recapData.achievements.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {recapData.achievements.map((achievement, index) => (
                      <div key={index} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                          {/* Placeholder for badge icon */}
                          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl font-headings font-bold mb-2">
                              {achievement.name.substring(0,1)} 
                          </div>
                          <p className="text-sm font-medium text-gray-700 text-center font-body">{achievement.name}</p>
                          <p className="text-xs text-gray-500 font-body">Earned: {achievement.date}</p>
                      </div>
                  ))}
              </div>
          ) : (
              <p className="text-gray-500 font-body">No achievements unlocked yet. Keep learning!</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default PersonalizedRecapPage;

