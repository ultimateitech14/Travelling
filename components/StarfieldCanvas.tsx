'use client';

import { useEffect, useRef } from 'react';

interface StarfieldProps {
  className?: string;
  starCount?: number;
}

export default function StarfieldCanvas({ className = '', starCount = 180 }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate stars
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));

    // Shooting stars
    interface ShootingStar {
      x: number;
      y: number;
      len: number;
      speed: number;
      size: number;
      waitTime: number;
      active: boolean;
    }

    const shootingStars: ShootingStar[] = Array.from({ length: 3 }, () => ({
      x: Math.random() * width,
      y: (Math.random() * height) / 2,
      len: Math.random() * 80 + 30,
      speed: Math.random() * 10 + 6,
      size: Math.random() + 0.5,
      waitTime: Math.random() * 200 + 50,
      active: false,
    }));

    let rafId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw normal stars
      for (const s of stars) {
        s.alpha += s.speed * s.direction;
        if (s.alpha > 0.95 || s.alpha < 0.15) {
          s.direction *= -1;
        }

        ctx.fillStyle = `rgba(245, 241, 230, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw shooting stars
      for (const ss of shootingStars) {
        if (!ss.active) {
          ss.waitTime--;
          if (ss.waitTime <= 0) {
            ss.active = true;
            ss.x = Math.random() * (width * 0.8);
            ss.y = Math.random() * (height * 0.4);
            ss.len = Math.random() * 70 + 40;
            ss.speed = Math.random() * 8 + 6;
          }
        } else {
          ss.x += ss.speed;
          ss.y += ss.speed * 0.6;

          const grad = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.len, ss.y - ss.len * 0.6);
          grad.addColorStop(0, 'rgba(114, 169, 139, 0.9)');
          grad.addColorStop(1, 'rgba(114, 169, 139, 0)');

          ctx.strokeStyle = grad;
          ctx.lineWidth = ss.size;
          ctx.beginPath();
          ctx.moveTo(ss.x, ss.y);
          ctx.lineTo(ss.x - ss.len, ss.y - ss.len * 0.6);
          ctx.stroke();

          if (ss.x > width + 100 || ss.y > height + 100) {
            ss.active = false;
            ss.waitTime = Math.random() * 300 + 100;
          }
        }
      }

      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  );
}
