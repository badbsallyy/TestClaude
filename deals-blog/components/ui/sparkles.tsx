"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import React from "react";

export const SparklesCore = ({
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}) => {
  const [particles, setParticles] = React.useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      duration: number;
      delay: number;
    }>
  >([]);

  React.useEffect(() => {
    const particleCount = particleDensity || 50;
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * ((maxSize || 3) - (minSize || 1)) + (minSize || 1),
        duration: Math.random() * ((speed || 2) - 1) + 1,
        delay: Math.random() * 2,
      });
    }
    setParticles(newParticles);
  }, [minSize, maxSize, speed, particleDensity]);

  return (
    <div
      className={cn("h-full w-full absolute inset-0", className)}
      style={{ background: background || "transparent" }}
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particleColor || "#fff",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const Sparkles = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <SparklesCore
        className="absolute inset-0 -z-10"
        particleColor="#fbbf24"
        particleDensity={20}
        minSize={1}
        maxSize={3}
        speed={2}
      />
      {children}
    </div>
  );
};
