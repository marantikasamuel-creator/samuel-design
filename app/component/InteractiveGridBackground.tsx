'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';

interface InteractiveGridBackgroundProps {
  /** Grid cell size in pixels */
  cellSize?: number;
  /** Base line color (CSS color string, should be very subtle) */
  baseColor?: string;
  /** Hover/active line color (CSS color string, bright) */
  hoverColor?: string;
  /** Base line width */
  baseLineWidth?: number;
  /** Maximum line width on hover */
  hoverLineWidth?: number;
  /** Radius of the hover influence area in pixels */
  hoverRadius?: number;
  /** Additional CSS classes for the container */
  className?: string;
}

export default function InteractiveGridBackground({
  cellSize = 60,
  baseColor,
  hoverColor,
  baseLineWidth = 0.5,
  hoverLineWidth = 2,
  hoverRadius = 200,
  className = '',
}: InteractiveGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });
  const rafRef = useRef<number>(0);
  const [isDark, setIsDark] = useState(true);

  // Observe dark mode changes
  useEffect(() => {
    const html = document.documentElement;
    const checkDark = () => setIsDark(html.classList.contains('dark'));
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const resolvedBaseColor = baseColor ?? (isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)');
  const resolvedHoverColor = hoverColor ?? (isDark ? 'rgba(168,85,247,0.55)' : 'rgba(168,85,247,0.45)');

  // Parse color to RGBA components for interpolation
  const parseColor = useCallback((color: string): [number, number, number, number] => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    const d = ctx.getImageData(0, 0, 1, 1).data;
    return [d[0], d[1], d[2], d[3] / 255];
  }, []);

  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    // Resize canvas if needed
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, w, h);

    const mouse = mouseRef.current;
    const [bR, bG, bB, bA] = parseColor(resolvedBaseColor);
    const [hR, hG, hB, hA] = parseColor(resolvedHoverColor);

    // Helper: compute interpolated style based on distance from cursor
    const getSegmentStyle = (segMidX: number, segMidY: number) => {
      if (!mouse.active) {
        return {
          lineWidth: baseLineWidth,
          color: `rgba(${bR},${bG},${bB},${bA})`,
        };
      }
      const dx = segMidX - mouse.x;
      const dy = segMidY - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.max(0, 1 - dist / hoverRadius);
      // Smoothstep easing for a natural falloff
      const t = influence * influence * (3 - 2 * influence);

      const lineWidth = baseLineWidth + (hoverLineWidth - baseLineWidth) * t;
      const r = Math.round(bR + (hR - bR) * t);
      const g = Math.round(bG + (hG - bG) * t);
      const b = Math.round(bB + (hB - bB) * t);
      const a = bA + (hA - bA) * t;
      return {
        lineWidth,
        color: `rgba(${r},${g},${b},${a})`,
      };
    };

    // Draw vertical lines as segments (each segment = one cell height)
    for (let x = 0; x <= w; x += cellSize) {
      for (let y = 0; y < h; y += cellSize) {
        const segEnd = Math.min(y + cellSize, h);
        const midY = (y + segEnd) / 2;
        const style = getSegmentStyle(x, midY);

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, segEnd);
        ctx.strokeStyle = style.color;
        ctx.lineWidth = style.lineWidth;
        ctx.stroke();
      }
    }

    // Draw horizontal lines as segments (each segment = one cell width)
    for (let y = 0; y <= h; y += cellSize) {
      for (let x = 0; x < w; x += cellSize) {
        const segEnd = Math.min(x + cellSize, w);
        const midX = (x + segEnd) / 2;
        const style = getSegmentStyle(midX, y);

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(segEnd, y);
        ctx.strokeStyle = style.color;
        ctx.lineWidth = style.lineWidth;
        ctx.stroke();
      }
    }

    // Draw a subtle circular radial glow at mouse position
    if (mouse.active) {
      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, hoverRadius * 0.7
      );
      gradient.addColorStop(0, isDark ? 'rgba(168,85,247,0.06)' : 'rgba(168,85,247,0.04)');
      gradient.addColorStop(1, 'rgba(168,85,247,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    }
  }, [cellSize, baseLineWidth, hoverLineWidth, hoverRadius, resolvedBaseColor, resolvedHoverColor, parseColor, isDark]);

  // Animation loop
  useEffect(() => {
    let running = true;
    const loop = () => {
      if (!running) return;
      drawGrid();
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [drawGrid]);

  // Mouse event handlers — track on window so grid stays pointer-events-none
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { ...mouseRef.current, active: false };
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => drawGrid();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawGrid]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ display: 'block' }}
      />
    </div>
  );
}
