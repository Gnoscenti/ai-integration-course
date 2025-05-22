import React from 'react';

const PaymentCancelPage = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold text-red-500 mb-4">Payment Cancelled</h1>
      <p>Your payment was not processed. You can try again or contact support if the issue persists.</p>
    </div>
  );
};

export default PaymentCancelPage;
