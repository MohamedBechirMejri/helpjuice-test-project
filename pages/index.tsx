import type { NextPage } from "next";
import Image from "next/image";
import {
  FiArrowDownLeft,
  FiBookOpen,
  FiCheckCircle,
  FiChevronDown,
  FiChevronsRight,
  FiClock,
  FiCloud,
  FiMoreVertical,
  FiUnlock,
} from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
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
      <main className="mx-auto max-w-[600px] mt-4">
        <div className="flex items-center justify-between w-full p-1 px-2 border rounded text-[#aaafb8]">
          <div className="flex items-center gap-2 text-sm">
            <p className="bg-[#d9f9e6] text-[#38795c] p-1 rounded px-2 font-bold">
              P
            </p>
            <div className="bg-[#dbdde1] w-[1px] h-3" />
            <p className="flex items-center gap-1">
              <FiClock /> 0min
            </p>
            <div className="bg-[#dbdde1] w-[1px] h-3" />
            <Image
              src="https://picsum.photos/100/100"
              width={20}
              height={20}
              alt="user"
              style={{
                borderRadius: "999999px",
              }}
            />
            <div className="bg-[#dbdde1] w-[1px] h-3" />
            <p className="flex items-center gap-1">
              <FiArrowDownLeft /> 0
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle />
            <FiCloud className="text-[#529d77]" />
            <FiMoreVertical className="text-[#212936]" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
