import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from './styles/InputBox.module.css'
import Sparkles from '../assets/sparkles.png'
import ArrowUpCircle from '../assets/arrow-up-circle.png'

const InputBox: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <>
      <motion.div
        className="mb-[36px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="relative flex items-center bg-black text-white rounded-[24px] w-[90vw] md:w-[600px] h-[72px] px-[24px]">
          <div className="flex items-center justify-start">
            <img src={Sparkles} className="" alt="Sparkles" />
          </div>
          <div className="flex-1 relative flex justify-center items-center h-full">
            {/* Input Field */}
            <input
              type="text"
              className="bg-transparent text-[16px] font-medium text-white outline-none w-full text-center placeholder-transparent"
              placeholder="Try: I want to gather insights about..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.trim())}
            />
            {/* Shimmer Effect */}
            {
              inputValue ? null : (
                <span className={`${styles.shimmer} text-[16px] font-medium absolute text-center pointer-events-none`}>
                  Try: I want to gather insights about...
                </span>
              )
            }
          </div>
          <img src={ArrowUpCircle} className="" alt="ArrowUpCircle" />
        </div>
      </motion.div>
    </>
  );
};

export default InputBox;
