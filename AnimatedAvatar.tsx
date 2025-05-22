import React, { useEffect, useRef } from 'react';

interface AnimatedAvatarProps {
  size?: number; // Optional size prop for scaling
}

const AnimatedAvatar: React.FC<AnimatedAvatarProps> = ({ size = 200 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Failed to get 2D context from canvas");
      return;
    }

    canvas.width = size;
    canvas.height = size;

    let points: { x: number; y: number; originalRadius: number }[] = [];
    const numPoints = 12;
    const center = { x: size / 2, y: size / 2 };
    const angleStep = (Math.PI * 2) / numPoints;
    const baseRadius = size / 3;
    let distortion = 0;
    let animationFrameId: number;

    function createPoints() {
      // canvas and ctx are in scope and checked, no need to re-check here for this function's direct logic
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

    function drawAvatar() {
      // Explicitly check canvas and ctx again before use, to satisfy TypeScript's strict checks
      // even though they are checked at the beginning of useEffect.
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (points.length === 0) createPoints();

      ctx.beginPath();
      if (points.length > 0) {
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
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.8)');
      gradient.addColorStop(1, 'rgba(167, 139, 250, 0.8)');
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
      // Explicitly check canvas and ctx again before use
      if (!canvas || !ctx) return;

      distortion = Math.sin(Date.now() * 0.002) * 0.2;
      createPoints();
      drawAvatar();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <div 
      ref={containerRef} 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        margin: '50px auto',
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="logo-container-avatar"
    >
      <canvas ref={canvasRef} id="avatar-canvas"></canvas>
    </div>
  );
};

export default AnimatedAvatar;

