"use client";

import { useEffect } from "react";

export default function StarsBackground() {
  useEffect(() => {
    function createStars() {
      const container = document.querySelector(".space-station-bg");
      if (!container) return;

      // 创建星星 - 增强版，多种类型
      for (let i = 0; i < 300; i++) {
        const star = document.createElement("div");
        
        // 随机星星类型
        const starType = Math.random();
        
        if (starType < 0.1) {
          // 10% 强烈闪烁星星
          star.className = "star intense";
        } else if (starType < 0.2) {
          // 10% 光斑星星
          star.className = "star flare";
        } else if (starType < 0.25) {
          // 5% 颜色循环星星
          star.className = "star color-cycle";
        } else {
          // 75% 普通星星
          star.className = "star";
        }

        // 随机大小 (1-5px)
        const size = Math.random() * 4 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";

        // 随机位置
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";

        // 随机动画速度（对非特殊星星）
        if (!star.classList.contains("intense") && !star.classList.contains("flare") && !star.classList.contains("color-cycle")) {
          const speeds = ["slow", "", "fast", "slow", ""];
          star.classList.add(speeds[Math.floor(Math.random() * speeds.length)]);
        }

        // 随机颜色 (白色、蓝色、青色、紫色、粉色)
        const colors = ["white", "#93c5fd", "#67e8f9", "#c4b5fd", "#f0abfc", "#f472b6", "#22d3ee"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = color;
          
        // 添加发光效果
        star.style.boxShadow = `0 0 ${size * 3}px ${color}`;
        star.style.filter = `brightness(${Math.random() * 0.6 + 0.9})`;

        container.appendChild(star);
      }

      // 创建粒子 - 多种类型
      for (let i = 0; i < 60; i++) {
        const particle = document.createElement("div");
        
        // 随机粒子类型
        const particleType = Math.random();
        
        if (particleType < 0.15) {
          // 15% 大型粒子
          particle.className = "particle large";
        } else if (particleType < 0.25) {
          // 10% 火花粒子
          particle.className = "particle spark";
        } else if (particleType < 0.3) {
          // 5% 轨迹粒子
          particle.className = "particle trail";
        } else {
          // 70% 普通粒子
          particle.className = "particle";
        }

        // 随机大小 (2-10px)
        const size = Math.random() * 8 + 2;
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        // 随机位置
        particle.style.top = Math.random() * 100 + "%";
        particle.style.left = Math.random() * 100 + "%";

        // 随机动画延迟
        particle.style.animationDelay = Math.random() * 10 + "s";
        
        // 随机渐变颜色
        const gradients = [
          "linear-gradient(45deg, #3b82f6, #8b5cf6)",
          "linear-gradient(45deg, #06b6d4, #3b82f6)",
          "linear-gradient(45deg, #8b5cf6, #ec4899)",
          "linear-gradient(45deg, #10b981, #06b6d4)",
          "linear-gradient(45deg, #f472b6, #8b5cf6)",
          "linear-gradient(45deg, #22d3ee, #3b82f6)",
        ];
        particle.style.background = gradients[Math.floor(Math.random() * gradients.length)];
        
        // 增强模糊效果
        particle.style.filter = `blur(${Math.random() * 4 + 1}px) brightness(${Math.random() * 0.4 + 0.9})`;
        
        // 随机动画时长
        particle.style.animationDuration = `${Math.random() * 7 + 5}s`;
        
        // 对于轨迹粒子，调整样式
        if (particle.classList.contains("trail")) {
          particle.style.width = "4px";
          particle.style.height = "4px";
          particle.style.borderRadius = "0";
          particle.style.background = "linear-gradient(90deg, transparent, #3b82f6, transparent)";
        }

        container.appendChild(particle);
      }
      
      // 创建量子点 - 新增
      for (let i = 0; i < 20; i++) {
        const quantum = document.createElement("div");
        quantum.className = "quantum-dot";
        
        // 随机大小 (6-12px)
        const size = Math.random() * 6 + 6;
        quantum.style.width = size + "px";
        quantum.style.height = size + "px";
        
        // 随机位置
        quantum.style.top = Math.random() * 100 + "%";
        quantum.style.left = Math.random() * 100 + "%";
        
        // 随机动画延迟
        quantum.style.animationDelay = Math.random() * 5 + "s";
        
        container.appendChild(quantum);
      }
    }

    createStars();

    // 清理函数
    return () => {
      const container = document.querySelector(".space-station-bg");
      if (!container) return;
      
      const stars = container.querySelectorAll(".star, .particle, .quantum-dot");
      stars.forEach((star) => star.remove());
    };
  }, []);

  return null;
}