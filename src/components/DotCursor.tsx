"use client";
import { useEffect, useState } from "react";

export default function DotCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    // Detect hover on elements with `data-cursor` attribute
    const hoverables = document.querySelectorAll("[data-cursor]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        setText(el.getAttribute("data-cursor") || "");
      });
      el.addEventListener("mouseleave", () => {
        setText("");
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      className={`fixed  bg-green-400 rounded-full pointer-events-none z-[9999]  duration-150 flex justify-center items-center ${
        text ? "w-20 h-20 " : "w-4 h-4"
      }`}
      style={{
        transform: !text ? `translate(${position.x - 75}px, ${position.y - 75}px)` : `translate(${position.x - 100}px, ${position.y - 100}px)`,
      }}
    >
      <p className="text-white text-one font-medium">{text}</p>
    </div>
  );
}
