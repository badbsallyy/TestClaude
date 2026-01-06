"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export function MovingBorder({
  children,
  duration = 2000,
  rx = "30%",
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
        <MovingBorderAnimation duration={duration}>
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
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  return (
    <div className="absolute h-full w-full overflow-hidden">
      <motion.div
        className="absolute"
        initial={{ x: "-50%", y: "-50%", top: 0, left: 0 }}
        animate={{
          top: ["0%", "0%", "100%", "100%", "0%"],
          left: ["0%", "100%", "100%", "0%", "0%"],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
