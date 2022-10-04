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
  const handleBlockDeletion = (e: any) => {};

  if (block.type === "p")
    return (
      <p
        contentEditable="true"
        className="outline-none"
        onKeyDown={handleBlockDeletion}
      >
        {block.content}
      </p>
    );
  return <div></div>;
};

export default Block;
