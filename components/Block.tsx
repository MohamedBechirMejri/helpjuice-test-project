import React, { useState } from "react";

const Block = ({
  block,
  id,
  removeBlock,
}: {
  block: any;
  id: string;
  removeBlock: any;
}) => {
  const [innerText, setInnerText] = useState(block.content);

  const h1 = "text-4xl font-bold";
  const h2 = "text-2xl font-bold";
  const h3 = "text-xl font-semibold";

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
      contentEditable="true"
      className={`outline-none after:[content:attr(data-placeholder);] ${type}`}
      onInput={(e: any) => setInnerText(e.target.innerText)}
      onKeyDown={removeBlock}
      id={id}
      data-placeholder={
        innerText ? "" : !type ? "Type / for Commands" : "Heading"
      }
    >
      {block.content}
    </div>
  );
};

export default Block;
