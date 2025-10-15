"use client";

import React, { useEffect, useRef, useState } from "react";

const DotAnimation = ({ text }: { text: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [textPosition, setTextPosition] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const targetPositionRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const dotsRef = useRef<
    Array<{
      x: number;
      y: number;
      size: number;
      baseSize: number;
      targetSize: number;
      alpha: number;
      targetAlpha: number;
    }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size dynamically
    const setCanvasSize = () => {
      const canvasHeight = 338;
      canvas.width = window.innerWidth;
      canvas.height = canvasHeight;

      // Reinitialize dots when canvas size changes
      initializeDots();
    };

    const initializeDots = () => {
      const gridSize = 20;
      const columns = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);
      dotsRef.current = [];

      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          dotsRef.current.push({
            x: i * gridSize + gridSize / 2,
            y: j * gridSize + gridSize / 2,
            size: 2,
            baseSize: 2,
            targetSize: 2,
            alpha: 0.2,
            targetAlpha: 0.2,
          });
        }
      }
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsRef.current.forEach((dot) => {
        dot.size += (dot.targetSize - dot.size) * 0.1;
        dot.alpha += (dot.targetAlpha - dot.alpha) * 0.1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${dot.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(drawDots);
    };

    drawDots();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate the width of the text
      const textWidth = textRef.current?.offsetWidth || 0;

      // Update target position for text so the end of the text stops at the cursor
      // Ensure the text doesn't move outside the screen boundaries
      const minPosition = 0; // Left boundary
      const maxPosition = canvas.width - textWidth; // Right boundary
      targetPositionRef.current = Math.min(
        Math.max(mouseX - textWidth, minPosition),
        maxPosition
      );

      // Update dot glowing effect
      dotsRef.current.forEach((dot) => {
        const distance = Math.sqrt(
          (dot.x - mouseX) ** 2 + (dot.y - mouseY) ** 2
        );
        const maxRadius = 100;

        if (distance < maxRadius) {
          const scale = 1 - distance / maxRadius;
          dot.targetSize = dot.baseSize + scale * 8;
          dot.targetAlpha = 0.8 + scale * 0.2;
        } else {
          dot.targetSize = dot.baseSize;
          dot.targetAlpha = 0.2;
        }
      });
    };

    const handleMouseEnter = () => {
      setIsMouseOver(true);

      // Enhance dot growth effect when mouse enters
      dotsRef.current.forEach((dot) => {
        dot.targetSize = dot.baseSize + 4; // Increase size slightly
      });
    };

    const handleMouseLeave = () => {
      setIsMouseOver(false);
      targetPositionRef.current = 0; // Reset target position to left corner

      // Reset dot glowing effect
      dotsRef.current.forEach((dot) => {
        dot.targetSize = dot.baseSize;
        dot.targetAlpha = 0.2;
      });
    };

    const handleScroll = () => {
      // Reset dot states when scrolling
      dotsRef.current.forEach((dot) => {
        dot.targetSize = dot.baseSize;
        dot.targetAlpha = 0.2;
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("scroll", handleScroll);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const animateText = () => {
      setTextPosition((prevPosition) => {
        const targetPosition = isMouseOver ? targetPositionRef.current : 0;
        // Reduce the easing factor to make the movement slower (e.g., 0.03 instead of 0.1)
        const newPosition =
          prevPosition + (targetPosition - prevPosition) * 0.03;
        return newPosition;
      });

      animationFrameRef.current = requestAnimationFrame(animateText);
    };

    animationFrameRef.current = requestAnimationFrame(animateText);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMouseOver]);

  return (
    <div className="relative w-full h-[338px] flex items-center justify-center overflow-hidden bg-white">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-[338px] z-0"
      ></canvas>
      <div className="relative z-10 w-full overflow-hidden pointer-events-none">
        <div
          className="flex animate-marquee whitespace-nowrap"
          style={{ transform: `translateX(${textPosition}px)` }}
        >
          <div
            ref={textRef}
            className="text-6xl md:text-9xl font-medium text-black mx-4"
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DotAnimation;
