import React from "react";
import { motion } from "framer-motion";
import ball from "../assets/ball.png"

const FloatingIcon: React.FC = () => {
  return (

    <motion.div
      className="mb-[20px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <img src={ball} className="" alt="Gradient Ball" />
    </motion.div>

  );
};

export default FloatingIcon;
