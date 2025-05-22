import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-body py-8">
      <div className="container mx-auto px-4 prose lg:prose-xl">
        <h1 className="font-headings text-3xl md:text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="mb-4">
          Welcome to Golden Age Mindset. This is a placeholder for our Terms of Service. By accessing or using our website and services, you agree to be bound by these terms.
        </p>

        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Acceptance of Terms</h2>
        <p className="mb-4">
          [Placeholder: Clearly state that using the service constitutes acceptance of the terms. Mention any age restrictions or other eligibility requirements.]
        </p>

        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Description of Service</h2>
        <p className="mb-4">
          [Placeholder: Describe what Golden Age Mindset offers, including courses, content, AI tools, etc.]
        </p>

        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">3. User Accounts</h2>
        <p className="mb-4">
          [Placeholder: Detail requirements for account creation, user responsibilities for account security, and conditions for account termination.]
        </p>

        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Subscriptions and Payments</h2>
        <p className="mb-4">
          [Placeholder: Explain subscription models, payment terms, free trials (if any), cancellation policies, and refund policies. This will be important once Stripe is integrated.]
        </p>

        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Intellectual Property</h2>
        <p className="mb-4">
          [Placeholder: State that all content provided on the platform is the property of Golden Age Mindset or its licensors and is protected by copyright and other intellectual property laws. Specify how users can and cannot use the content.]
        </p>

        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">6. User Conduct</h2>
        <p className="mb-4">
          [Placeholder: Outline acceptable and unacceptable uses of the platform. Prohibit activities like distributing malware, spamming, harassment, or infringing on others' rights.]
        </p>

        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">7. Disclaimers and Limitation of Liability</h2>
        <p className="mb-4">
          [Placeholder: Include standard disclaimers, e.g., the service is provided "as is," no warranties, and limitations on liability for any damages arising from the use of the service. This is especially important for content related to financial investments.]
        </p>

        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">8. Governing Law</h2>
        <p className="mb-4">
          [Placeholder: Specify the jurisdiction whose laws will govern the terms.]
        </p>

        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">9. Changes to Terms</h2>
        <p className="mb-4">
          Golden Age Mindset reserves the right to modify these terms at any time. We will notify users of any changes by posting the new terms on this site. Your continued use of the service after such changes constitutes your acceptance of the new terms.
        </p>

        <h2 className="font-headings text-2xl font-semibold text-gray-800 mt-6 mb-3">10. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these Terms of Service, please contact us at [Your Contact Email/Link].
        </p>

        <p className="text-sm text-gray-500 mt-8">
          This document was last updated on {new Date().toLocaleDateString()}.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;

