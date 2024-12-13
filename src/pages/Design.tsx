import React from "react";
import FloatingIcon from "../components/FloatingIcon";
import InputBox from "../components/InputBox";
import QuickStart from "../components/QuickStart";
import { motion } from "framer-motion";
import LetterBg from "../assets/letter-bg.png"
import LetterSeconds from "../assets/letter-seconds.svg"

const Design: React.FC = () => {
  return (
    <main className="flex-grow bg-white w-full rounded-[24px] flex flex-col items-center justify-center">
      {/* Floating Icon */}
      <FloatingIcon />

      {/* Content */}
      <motion.div
        className="text-center mb-[36px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[32px] font-semibold text-[#171717] mb-[10px]">
          Create your survey within{" "}
          {/* <span
            className="bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text"
            style={{
              backgroundImage: `url(${LetterBg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            seconds
          </span> */}
          <img src={LetterSeconds} className="inline align-middle shadow-[0px_4px_4px_0px_#00000040]" alt="LetterSeconds" />

        </h1>
        <p className="text-[16px] text-[#787881]">What would you like to know?</p>
      </motion.div>

      {/* Input Box */}
      <InputBox />

      {/* Quick Start Section */}
      <QuickStart />
    </main>
  );
};

export default Design;
