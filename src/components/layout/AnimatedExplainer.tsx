import React from 'react';

interface AnimatedExplainerProps {
  title?: string;
  messages: string[];
  onComplete?: () => void; // Kept for potential future use, but not used in this simplified version
}

const AnimatedExplainer: React.FC<AnimatedExplainerProps> = ({ 
  title = "Unlock Your AI Superpowers",
  messages = [
    "Accelerate your future skills now - AI built, AI powered.",
    "From overwhelm to action, we cut the noise. Your roadmap, your outcomes, no BS - everything's guided, simplified, and built to execute.",
    "Experience AI as your coach, not just a tool. This isn't just a passive course. It's an AI-enhanced accelerator that thinks with you, and pushes you toward mastery."
  ],
}) => {

  // Simplified CSS-based fade-in for elements
  // More complex animations can be added later if needed, or a different library explored.

  const containerStyles: React.CSSProperties = {
    padding: 'clamp(20px, 5vw, 60px)',
    borderRadius: '16px',
    background: 'radial-gradient(circle at top left, #1e3a8a, #111827 70%)',
    color: 'white',
    textAlign: 'center',
    overflow: 'hidden',
    position: 'relative',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    opacity: 1, // Start visible for simple version
    transition: 'opacity 1s ease-in-out', // Simple fade-in if we trigger it
  };

  const titleStyles: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#93c5fd',
    textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
  };

  const messageStyles: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
    marginBottom: '1.25rem',
    lineHeight: '1.7',
    color: '#e5e7eb',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const ctaButtonStyles: React.CSSProperties = {
    background: 'linear-gradient(to right, #3b82f6, #2563eb)',
    color: 'white',
    fontWeight: 'bold',
    padding: '12px 28px',
    borderRadius: '8px',
    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1.5rem',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
    transition: 'transform 0.2s ease-out, boxShadow 0.2s ease-out',
  };

  return (
    <div style={containerStyles} className="animated-explainer-container w-full max-w-4xl mx-auto my-8 md:my-12">
      <h2 style={titleStyles}>{title}</h2>
      {messages.map((msg, index) => (
        <p 
          key={index} 
          style={messageStyles}
        >
          {msg}
        </p>
      ))}
      <button 
        style={ctaButtonStyles}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.5)';}}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0px)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';}}
        onClick={() => { /* TODO: Implement navigation to signup or open signup modal */ alert('Navigate to Signup!'); }}
      >
        Start Your AI Journey Now
      </button>
    </div>
  );
};

export default AnimatedExplainer;

