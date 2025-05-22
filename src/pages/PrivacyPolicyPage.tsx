import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-body py-8">
      <div className="container mx-auto px-4 prose lg:prose-xl">
        <h1 className="font-headings text-3xl md:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to Golden Age Mindset. This is a placeholder for our Privacy Policy. We are committed to protecting your privacy and handling your data in an open and transparent manner.
        </p>
        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">Information We Collect</h2>
        <p className="mb-4">
          [Placeholder: Describe the types of information you collect, e.g., personal identification information (name, email address, phone number, etc.), non-personal identification information (browser name, type of computer, etc.), and how you collect it (e.g., directly from users, through cookies, etc.).]
        </p>
        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">How We Use Your Information</h2>
        <p className="mb-4">
          [Placeholder: Explain how you use the collected information, e.g., to personalize user experience, to improve the site, to process payments, to send periodic emails, etc.]
        </p>
        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">Data Protection</h2>
        <p className="mb-4">
          [Placeholder: Describe the security measures you have in place to protect user data.]
        </p>
        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">Sharing Your Personal Information</h2>
        <p className="mb-4">
          [Placeholder: Explain if and how you share personal information with third parties. Be transparent about this.]
        </p>
        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">Your Rights</h2>
        <p className="mb-4">
          [Placeholder: Inform users about their rights regarding their personal data, e.g., right to access, right to rectification, right to erasure, etc.]
        </p>
        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          Golden Age Mindset has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
        </p>
        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">Contacting Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at [Your Contact Email/Link].
        </p>
        <p className="text-sm text-gray-500 mt-8">
          This document was last updated on {new Date().toLocaleDateString()}.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

