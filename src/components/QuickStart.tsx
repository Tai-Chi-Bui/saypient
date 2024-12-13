import { motion } from "framer-motion";
import React from "react";
import ProductFeedBackIcon from "../assets/product-feedback-icon.png"
import CustomerSatisfactionIcon from "../assets/customer-satisfaction-icon.png"
import EmployeeSatisfactionIcon from "../assets/employee-satisfaction-icon.png"

const QuickStart: React.FC = () => {
  const buttons = [
    { label: "Product Feedback", icon:  <img src={ProductFeedBackIcon} className="w-[40px] h-[36px]" alt="ProductFeedBackIcon" /> },
    { label: "Customer Satisfaction", icon:  <img src={CustomerSatisfactionIcon} className="w-[40px] h-[36px]" alt="CustomerSatisfactionIcon" /> },
    { label: "Employee Satisfaction", icon:  <img src={EmployeeSatisfactionIcon} className="w-[40px] h-[36px]" alt="EmployeeSatisfactionIcon" /> },
  ];

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <p className="text-[#787881] font-medium mb-[16px]">Or get started with</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px]">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center p-8 md:p-4 bg-white shadow-lg rounded-[16px] min-h-[132px] min-w-[230px]"
          >
            {button.icon}
            <span className="mt-2 text-[14px] font-medium text-[#171717] leading-none">
              {button.label}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickStart;
