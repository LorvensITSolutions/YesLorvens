import { motion } from "framer-motion";

/**
 * Wrapper component for smooth scroll-triggered animations
 * Usage: Replace motion.div with MotionWrapper
 */
export const MotionWrapper = ({ children, className = "", ...props }) => {
  // Render as motion.div with animations on all devices
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};

export default MotionWrapper;

