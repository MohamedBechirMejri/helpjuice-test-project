import React from "react";
import { RiText } from "react-icons/ri";
import uniqid from "uniqid";

const Overlay = ({
  addElement,
  command,
  caretCoordinates,
}: {
  addElement: any;
  command: string;
  caretCoordinates: {
    x: number;
    y: number;
  };
}) => {
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
    // {
    //   type: "checkbox",
    //   title: "Checkbox",
    //   hint: "Todo list item",
    // },
    // {
    //   type: "hr",
    //   title: "Divider",
    //   hint: "Visually divide blocks",
    // },
  ];
  return (
    <div
      className={`fixed ml-4 overflow-y-scroll overflow-hidden transition-all bg-white rounded  scroll ${
        command ? "w-72 h-[21rem] p-4 shadow-lg border" : "scale-x-0 scale-y-0"
      } origin-top-left`}
      style={{
        top: caretCoordinates.y + 25,
        left: caretCoordinates.x,
      }}
    >
      <h1 className="text-base font-bold">Add blocks</h1>
      <p className="text-sm text-[#b2b7c0]">
        Filtering keyword{" "}
        <span className="ml-2 text-white bg-[#3565a9] px-1 rounded">
          {command.substring(1)}
        </span>
      </p>
      <div className="mt-4 transition-all">
        {blockTypes
          .filter(b =>
            b.title.toLowerCase().includes(command.toLowerCase().substring(1))
          )
          .map(b => (
            <div
              key={uniqid()}
              className="flex items-center gap-4 p-2 transition-all cursor-pointer hover:bg-gray-200"
              onClick={e => {
                addElement(e, b.type, b.title);
              }}
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
  );
};

export default Overlay;
