"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import React, { useMemo } from "react";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const paths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
      "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
      "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
      "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
      "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
      "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    ];

    // Pre-generate random values for each path to avoid impure function calls during render
    // Generate random animation values once on mount
    // Using empty deps intentionally - we want stable random values per component instance
    const animationConfigs = useMemo(
      () =>
        paths.map(() => ({
          y2End: `${93 + Math.random() * 8}%`,
          duration: Math.random() * 10 + 10,
          delay: Math.random() * 10,
        })),
      // paths is defined in component scope and never changes
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );

    return (
      <div
        className={cn(
          "absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
          className
        )}
      >
        <svg
          className="z-0 h-full w-full pointer-events-none absolute"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {paths.map((path, index) => (
            <motion.path
              key={`path-` + index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="0.5"
            />
          ))}
          <defs>
            {paths.map((_, index) => (
              <motion.linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                initial={{
                  x1: "0%",
                  x2: "0%",
                  y1: "0%",
                  y2: "0%",
                }}
                animate={{
                  x1: ["0%", "100%"],
                  x2: ["0%", "95%"],
                  y1: ["0%", "100%"],
                  y2: ["0%", animationConfigs[index].y2End],
                }}
                transition={{
                  duration: animationConfigs[index].duration,
                  ease: "linear",
                  repeat: Infinity,
                  delay: animationConfigs[index].delay,
                }}
              >
                <stop stopColor="#18CCFC" stopOpacity="0" />
                <stop stopColor="#18CCFC" />
                <stop offset="0.325" stopColor="#6344F5" />
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
              </motion.linearGradient>
            ))}
          </defs>
        </svg>
      </div>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";
