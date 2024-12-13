import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LetterS from "../assets/letter-s.svg"

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the active tab from the URL
  const getActiveTabFromUrl = () => {
    const path = location.pathname.slice(1); // Remove leading "/"
    return path || "design"; // Default to "design" if no path is present
  };

  const [activeTab, setActiveTab] = React.useState(getActiveTabFromUrl());

  const handleTabClick = (tab: string) => {
    setActiveTab(tab.toLowerCase());
    navigate(`/${tab.toLowerCase()}`);
  };

  // Sync state with URL on location change
  useEffect(() => {
    const currentTab = getActiveTabFromUrl();
    if (currentTab !== activeTab) {
      setActiveTab(currentTab);
    }
  }, [location.pathname]);

  return (
    <header className="w-full h-[64px] bg-gray-100 flex items-center justify-center md:justify-between gap-5 px-4 lg:relative">
      {/* Back Button */}
      <div className="hidden md:flex items-center bg-[#0000000D] rounded-[16px] p-[3px] gap-[11px]">
        <div className="w-[48px] flex justify-center items-center">
          <img src={LetterS} className="" alt="Gradient Ball" />
        </div>
        <button className="flex items-center justify-between gap-[16px] min-w-[141px] h-[38px] px-[16px] py-[10px] bg-white rounded-[16px] border-t border-l border-r-0 border-b-0 border-[#0000000D] shadow-[0px_24px_24px_-8px_#00000008] whitespace-nowrap transition-colors duration-300 hover:bg-[#f7f7f7] hover:shadow-[0px_28px_28px_-8px_#00000010]">
          <div className="text-sm leading-none font-medium text-[13px] color-[#171717] p-0 flex justify-between items-center gap-1">
            <div className="text-lg">←</div>
            Back to Projects
          </div>
        </button>
      </div>


      {/* Tabs */}
      <nav className="flex lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
        {["Design", "Preview", "Themes", "Logic"].map((tab) => (
          <button
            key={tab}
            className={`rounded-[16px] h-[38px] w-[87px] flex justify-center items-center font-medium text-[14px] ${activeTab === tab.toLowerCase()
              ? "bg-black text-white"
              : "bg-transparent text-gray-800"
              }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
