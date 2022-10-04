import Image from "next/image";
import React from "react";
import {
  FiArrowDownLeft,
  FiCheckCircle,
  FiClock,
  FiCloud,
  FiMoreVertical,
} from "react-icons/fi";

const Statusbar = () => {
  return (
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
  );
};

export default Statusbar;
