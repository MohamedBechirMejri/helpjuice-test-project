import React, { useState } from "react";

const Block = ({
  block,
  id,
  removeBlock,
  addBlock,
  setCommand,
}: {
  block: any;
  id: string;
  removeBlock: any;
  addBlock: any;
  setCommand: any;
}) => {
  const [innerText, setInnerText] = useState(block.content);
  const [isChecked, setIsChecked] = useState(false);

  // styles based on element type
  const h1 = "text-4xl font-bold";
  const h2 = "text-2xl font-bold";
  const h3 = "text-xl font-semibold";
  // styling Pseudo-elements using Tailwind is messy
  const checkbox = `relative flex items-center gap-2 text-lg font-medium cursor-pointer before:block before:w-6 before:h-6 before:rounded before:ring-2 before:ring-green-200 before:transition-all before:absolute before:-left-10 active:before:ring-4 ${
    isChecked && "before:bg-green-200 line-through"
  }`;

  const regex = /\/\S{0,}/gm;

  let type = "";

  switch (block.type) {
    case "h1":
      type = h1;
      break;
    case "h2":
      type = h2;
      break;
    case "h3":
      type = h3;
      break;
    case "checkbox":
      type = checkbox;
      break;
  }

  return (
    <div
      id={id}
      contentEditable="true"
      data-placeholder={
        innerText
          ? ""
          : !type
          ? "Type / for Commands"
          : type === checkbox
          ? "List Item"
          : "Heading"
      }
      className={`outline-none after:[content:attr(data-placeholder)] ${type} after:text-[#c1c1c1] transition-all`}
      onClick={() => setIsChecked(!isChecked)}
      onInput={(e: any) => {
        setInnerText(e.target.innerText);

        const command = e.target.innerText.match(regex);
        setCommand(command ? command[0] : "");
      }}
      onKeyDown={(e: any) => {
        switch (e.key) {
          case "Backspace":
            removeBlock(e);
            break;
          case "Escape":
            e.preventDefault();
            setCommand("");
            break;
          case "Enter":
            e.preventDefault();
            setCommand("");
            addBlock(e);
            break;
          case "/":
            e.preventDefault();
            setCommand("/");
            break;
        }
      }}
    >
      {block.content}
    </div>
  );
};

export default Block;
