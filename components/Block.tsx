import React from "react";

const Block = ({
  block,
  index,
  blocks,
  setBlocks,
}: {
  block: any;
  index: number;
  blocks: any;
  setBlocks: any;
}) => {
  const deleteBlock = (e: any) => {
    if (e.target.innerText === "" && e.key === "Backspace") {
      setBlocks(blocks.filter((b: any, i: number) => i !== index));
    }
  };

  return (
    <div
      contentEditable="true"
      className="outline-none"
      onKeyDown={deleteBlock}
    >
      {block.content}
    </div>
  );
};

export default Block;
