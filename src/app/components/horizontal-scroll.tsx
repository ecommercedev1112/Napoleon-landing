"use client";
import { useScroll, useSpring, motion } from "framer-motion";
import React from "react";

const Horizontalscroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <motion.div className="progress-bar" style={{ scaleX }} />;
};

export default Horizontalscroll;
