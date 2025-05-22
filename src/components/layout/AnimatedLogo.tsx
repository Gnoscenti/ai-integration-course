import React, { useEffect, useRef } from 'react';

const AnimatedLogo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // It's better to get container dimensions dynamically if possible,
    // but for this direct translation, we'll use a fixed size or make it responsive later.
    const size = 200; // Match the .logo-container size from the HTML
    canvas.width = size;
    canvas.height = size;

    let points: { x: number; y: number; originalRadius: number }[] = [];
    const numPoints = 12;
    const center = { x: size / 2, y: size / 2 };
    const angleStep = (Math.PI * 2) / numPoints;
    const baseRadius = size / 3;
    // let noiseScale = 0.1; // Not directly used in the provided JS drawLogo, but was in comments
    // let animationSpeed = 0.02; // Not directly used in the provided JS drawLogo, but was in comments
    let distortion = 0;
    let animationFrameId: number;

    function createPoints() {
      points = [];
      for (let i = 0; i < numPoints; i++) {
        let angle = i * angleStep;
        let originalRadius = baseRadius;
        let radius = originalRadius * (1 + distortion * Math.sin(angle * 3 + Date.now() * 0.001));
        let x = center.x + radius * Math.cos(angle);
        let y = center.y + radius * Math.sin(angle);
        points.push({ x: x, y: y, originalRadius: originalRadius });
      }
    }

    function drawLogo() {
      if (!canvas || !ctx) return; // Added !canvas check to satisfy TypeScript
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (points.length === 0) createPoints();

      ctx.beginPath();
      if (points.length > 0) { // Ensure points exist before drawing
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 0; i < numPoints; i++) {
          const nextIndex = (i + 1) % numPoints;
          const midX = (points[i].x + points[nextIndex].x) / 2;
          const midY = (points[i].y + points[nextIndex].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, midX, midY);
        }
      }
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, 0, size, size);
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.8)'); // Light blue
      gradient.addColorStop(1, 'rgba(167, 139, 250, 0.8)'); // Violet
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.font = `bold ${size / 5}px Inter, sans-serif`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 10;
      ctx.fillText("AI", center.x, center.y);
      ctx.shadowBlur = 0;
    }

    function animate() {
      distortion = Math.sin(Date.now() * 0.002) * 0.2;
      createPoints();
      drawLogo();
      animationFrameId = requestAnimationFrame(animate);
    }

    // Start the animation
    animate();

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  // Apply styles similar to .logo-container
  const logoContainerStyle: React.CSSProperties = {
    width: '200px',
    height: '200px',
    margin: '50px auto',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // background: 'linear-gradient(to bottom, #6b7280, #374151)', // Optional background
  };

  return (
    <div style={logoContainerStyle}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default AnimatedLogo;

