import React, { useEffect, useRef } from 'react';

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  decay: number;
  id: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  let sparkleId = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Create new sparkles on mouse move
      if (Math.random() > 0.7) {
        sparklesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          size: Math.random() * 6 + 2,
          opacity: 1,
          decay: Math.random() * 0.02 + 0.01,
          id: sparkleId++
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw sparkles
      sparklesRef.current = sparklesRef.current.filter(sparkle => {
        sparkle.opacity -= sparkle.decay;
        
        if (sparkle.opacity <= 0) return false;
        
        // Draw sparkle with gradient
        const gradient = ctx.createRadialGradient(
          sparkle.x, sparkle.y, 0,
          sparkle.x, sparkle.y, sparkle.size
        );
        
        gradient.addColorStop(0, `hsla(45, 100%, 50%, ${sparkle.opacity})`); // Gold
        gradient.addColorStop(0.5, `hsla(30, 100%, 50%, ${sparkle.opacity * 0.8})`); // Saffron
        gradient.addColorStop(1, `hsla(60, 100%, 70%, 0)`); // Transparent yellow
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add star shape for some sparkles
        if (sparkle.size > 4) {
          ctx.strokeStyle = `hsla(45, 100%, 50%, ${sparkle.opacity * 0.6})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          
          // Draw star
          const spikes = 4;
          const outerRadius = sparkle.size * 0.8;
          const innerRadius = sparkle.size * 0.4;
          
          for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (i * Math.PI) / spikes;
            const x = sparkle.x + Math.cos(angle) * radius;
            const y = sparkle.y + Math.sin(angle) * radius;
            
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          
          ctx.closePath();
          ctx.stroke();
        }
        
        return true;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;