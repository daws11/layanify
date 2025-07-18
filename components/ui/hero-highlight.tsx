"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <span
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          display: "inline",
        }}
        className={cn(
          `relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-1 py-1 dark:from-indigo-500 dark:to-purple-500 text-gray-900 dark:text-white font-extrabold`,
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "110% 110%",
      }}
      transition={{
        duration: 0.9,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-1 py-1 dark:from-indigo-500 dark:to-purple-500 text-gray-900 dark:text-white font-extrabold`,
        className,
      )}
    >
      {children}
    </motion.span>
  );
}; 