import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'; // Or your preferred HTTP client

const PaymentSuccessPage: React.FC = () => {
  const location = useLocation();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sId = queryParams.get('session_id');
    setSessionId(sId);

    if (sId) {
      // Optional: You could verify the session status with your backend here
      // to prevent users from just navigating to this URL.
      // For now, we'll assume the webhook has updated the user's status.
      // Example verification (requires a backend endpoint):
      /*
      axios.post('/api/stripe/verify-session', { sessionId: sId })
        .then(response => {
          setPaymentStatus(response.data.status);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error verifying session:", err);
          setError(err.response?.data?.error || "Failed to verify payment status.");
          setLoading(false);
        });
      */
      setPaymentStatus("success"); // Assuming success if redirected here, webhook is source of truth
      setLoading(false);
    } else {
      setError("No session ID found. Payment status cannot be confirmed.");
      setLoading(false);
    }
  }, [location]);

  if (loading) {
    return <div className="container mx-auto p-4 text-center">Loading payment details...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Payment Verification Error</h1>
        <p>{error}</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Go to Homepage</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold text-green-500 mb-4">Payment Successful!</h1>
      <p>Thank you for your subscription. Your access has been updated.</p>
      <p className="text-sm text-gray-600 mt-2">Session ID: {sessionId}</p>
      <div className="mt-6">
        <Link to="/course-overview" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Go to Course Overview
        </Link>
        <Link to="/" className="text-blue-500 hover:underline">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;

