import React from "react";

const Block = ({
  block,
  id,
  removeBlock,
}: {
  block: any;
  id: string;
  removeBlock: any;
}) => {
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
      className={`outline-none ${type}`}
      onKeyDown={removeBlock}
      id={id}
    >
      {block.content} tet
    </div>
  );
};

export default Block;
