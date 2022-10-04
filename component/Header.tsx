import React from "react";
import {
  FiBookOpen,
  FiChevronDown,
  FiChevronsRight,
  FiUnlock,
} from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-2 text-[#a9aeb8]">
      <div className="flex items-center gap-4">
        <FiChevronsRight className="text-[#6c727f]" />
        <p className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-2 font-medium underline transition-all cursor-pointer hover:underline">
            <FiBookOpen /> Main
          </span>
          <span>/</span>
          <span className="transition-all cursor-pointer hover:underline">
            Getting Started
          </span>
          <span>/</span>
          <span>Front-end developer test proje...</span>
        </p>
      </div>
      <div className="flex items-center gap-4 p-2">
        <div className="flex items-center gap-1 text-sm font-normal">
          <span>
            <FiUnlock />
          </span>
          <span>Editing</span>
        </div>
        <button className="text-[#3665a9] font-bold text-sm tracking-wider flex items-center gap-2">
          Publish Space <FiChevronDown />
        </button>
      </div>
    </header>
  );
};

export default Header;
