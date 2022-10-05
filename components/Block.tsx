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

  const h1 = "text-4xl font-bold";
  const h2 = "text-2xl font-bold";
  const h3 = "text-xl font-semibold";

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
  }

  return (
    <div
      id={id}
      contentEditable="true"
      data-placeholder={
        innerText ? "" : !type ? "Type / for Commands" : "Heading"
      }
      className={`outline-none after:[content:attr(data-placeholder)] ${type} after:text-[#c1c1c1]`}
      onInput={(e: any) => {
        setInnerText(e.target.innerText);

        const command = e.target.innerText.match(regex);
        setCommand(command ? command[0] : "");
      }}
      onKeyDown={(e: any) => {
        if (e.key === "Backspace") removeBlock(e);

        if (e.key === "Escape") {
          e.preventDefault();
          setCommand("");
        }

        if (e.key === "Enter" || e.key === "Escape") {
          e.preventDefault();
          setCommand("");

          addBlock(e);
        }

        if (e.key === "/") {
          e.preventDefault();
          setCommand("/");
        }
      }}
    >
      {block.content}
    </div>
  );
};

export default Block;
