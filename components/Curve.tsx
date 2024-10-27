// components/Curve.tsx

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  text as textVariants,
  curve as curveVariants,
  translate as translateVariants,
} from "./anim";

const anim = (variants: any) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

export default function Curve({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  if (!isAnimating) {
    return <>{children}</>;
  }

  return (
    <div className="page curve">
      <div
        className="background bg-background dark:bg-gray-900"
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
      />
      <motion.p
        className="route text-black dark:text-white"
        {...anim(textVariants)}
        onAnimationComplete={handleAnimationComplete}
      >
        {"Welcome"}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
    </div>
  );
}

const SVG = ({
  height,
  width,
}: {
  height: number | null;
  width: number | null;
}) => {
  if (height === null || width === null) return null;

  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg {...anim(translateVariants)}>
      <motion.path
        {...anim(curveVariants(initialPath, targetPath))}
        fill="currentColor"
      />
    </motion.svg>
  );
};
