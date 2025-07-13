'use client'
import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";

const CountUp = ({ target, duration = 2, className = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: target, // dummy to trigger animation
      transition: { duration, ease: "easeOut" },
    });

    const start = performance.now();
    const animate = (time) => {
      const progress = Math.min((time - start) / (duration * 1000), 1);
      count.set(progress * target);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, duration, controls, count]);

  return (
    <motion.span className={className}>
      {rounded}
    </motion.span>
  );
};

export default CountUp;
