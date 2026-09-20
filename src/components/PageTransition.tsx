import React from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.985,
    filter: "blur(4px)",
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  out: {
    opacity: 0,
    y: -18,
    scale: 0.985,
    filter: "blur(4px)",
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
  mass: 0.8,
};

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full h-full"
      style={{ perspective: 1200 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
