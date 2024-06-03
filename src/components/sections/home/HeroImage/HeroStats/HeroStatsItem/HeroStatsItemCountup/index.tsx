"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface IHeroStatsItemCountupProps {
  value: number;
}

export function HeroStatsItemCountup({ value }: IHeroStatsItemCountupProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, { duration: 2 });

    return animation.stop;
  }, [count, value]);

  return (
    <p className="font-extrabold flex w-1/3 text-center text-xl lg:text-2xl">
      <motion.span className="w-6 block">{rounded}</motion.span>
      <strong className="text-dark-green ml-1">+</strong>
    </p>
  );
}
