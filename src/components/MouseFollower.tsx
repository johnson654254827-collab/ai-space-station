"use client";

import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* 主光晕 */}
      <div
        className="mouse-follower"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 70%)",
        }}
      />
      
      {/* 次级光晕 */}
      <div
        className="mouse-follower"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "100px",
          height: "100px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)",
          filter: "blur(30px)",
          opacity: 0.6,
          transition: "transform 0.2s ease-out",
        }}
      />
      
      {/* 粒子轨迹 */}
      <div
        className="particle"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "4px",
          height: "4px",
          background: "linear-gradient(45deg, #3b82f6, #06b6d4)",
          animation: "float 3s infinite",
          animationDelay: "0s",
        }}
      />
    </>
  );
}