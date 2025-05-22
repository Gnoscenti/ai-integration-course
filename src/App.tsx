import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout'; // Import the Layout component
import HomePage from './pages/HomePage';
import CourseOverviewPage from './pages/CourseOverviewPage';
import LessonPage from './pages/LessonPage';
import PersonalizedRecapPage from './pages/PersonalizedRecapPage';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}> {/* Use Layout to wrap routes */}
          <Route index element={<HomePage />} />
          {/* Updated route for courses to be more generic, actual course selection can happen in CourseOverviewPage or a new CoursesListPage */}
          <Route path="courses" element={<CourseOverviewPage />} /> 
          {/* Updated route for specific lessons to include course and module context */}
          <Route path="courses/:courseId/modules/:moduleId/lessons/:lessonId" element={<LessonPage />} />
          <Route path="recap" element={<PersonalizedRecapPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

