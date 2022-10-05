import React from "react";
import { RiText } from "react-icons/ri";

const Overlay = ({ addBlock }: { addBlock: any }) => {
  const blockTypes = [
    {
      type: "p",
      title: "Text",
      hint: "Just start writing with plain text.",
    },
    {
      type: "h1",
      title: "Heading 1",
      hint: "Big section heading",
    },
    {
      type: "h2",
      title: "Heading 2",
      hint: "Medium section heading",
    },
    {
      type: "h3",
      title: "Heading 3",
      hint: "Small section heading",
    },
  ];
  return (
    <div className="relative w-full">
      <div className="p-4 mt-4 ml-4 transition-all bg-white border rounded shadow-lg w-72 h-max">
        <h1 className="text-base font-bold">Add blocks</h1>
        <p className="text-sm text-[#b2b7c0]">
          Filtering keyword{" "}
          <span className="ml-2 text-white bg-[#3565a9] px-1 rounded">
            {"/ inputValue".substring(1, 2)}
          </span>
        </p>
        <div className="mt-4 transition-all">
          {blockTypes
            .filter(b => b.hint.includes("/".substring(1, 2)))
            .map(b => (
              <div
                key={Math.random()}
                className="flex items-center gap-4 p-2 transition-all cursor-pointer hover:bg-gray-200"
                onClick={e => addBlock(e, b.type)}
              >
                <RiText className="shrink-0" />
                <div className="">
                  <p className="font-bold">{b.title}</p>
                  <p className="text-sm text-[#b2b7c0]">{b.hint}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Overlay;