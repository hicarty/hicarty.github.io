"use client";

import { useEffect, useRef } from "react";

export function Testimonial() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();

    const particles: { x: number; y: number; vx: number; vy: number; radius: number; color: string; alpha: number }[] = [];
    const colors = ["#2dd4bf", "#ef4444", "#d4a853"];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => { window.removeEventListener("resize", resizeCanvas); cancelAnimationFrame(animationId); };
  }, []);

  return (
    <div className="relative glass-card rounded-xl overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-6xl text-[var(--teal-primary)] opacity-50 font-serif">&ldquo;</span>
          <blockquote className="text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed mb-6 -mt-8">
            Haven&apos;s strengths was his ability to integrate himself well into teams across different departments. He was approachable and worked amicably with colleagues, building positive relationships that contributed to our collaborative culture.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--teal-primary)]/20 flex items-center justify-center">
              <span className="text-[var(--teal-primary)] font-mono text-lg">t()</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-[var(--gold-primary)]">Transpose Software</p>
              <p className="text-sm text-[var(--text-muted)]">Award Winning Software Agency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
