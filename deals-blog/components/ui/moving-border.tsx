"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export function MovingBorder({
  children,
  duration = 2000,
  rx = "30%",
  ry = "30%",
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: `calc(${rx} * 0.96)`,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${rx} * 0.96)` }}
      >
        <MovingBorderAnimation duration={duration} rx={rx} ry={ry}>
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#0ea5e9_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorderAnimation>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${rx} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export function MovingBorderAnimation({
  children,
  duration = 2000,
  rx = "30%",
  ry = "30%",
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) {
  const pathRef = React.useRef<SVGRectElement>(null);
  const progress = React.useRef<number>(0);
  const [pathLength, setPathLength] = React.useState<number>(0);

  React.useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  React.useEffect(() => {
    if (!pathLength) return;
    
    let animationFrame: number;
    const animate = () => {
      progress.current = (progress.current + (1 / (duration / 16))) % 1;
      if (pathRef.current) {
        const point = pathRef.current.getPointAtLength(progress.current * pathLength);
        const parent = pathRef.current.parentElement?.parentElement;
        const motionDiv = parent?.querySelector('[data-motion]');
        if (motionDiv) {
          (motionDiv as HTMLElement).style.transform = `translateX(${point.x}px) translateY(${point.y}px) translateX(-50%) translateY(-50%)`;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [pathLength, duration]);

  return (
    <div className="absolute h-full w-full">
      <svg
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        data-motion
        className="absolute top-0 left-0"
        initial={{ x: 0, y: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
