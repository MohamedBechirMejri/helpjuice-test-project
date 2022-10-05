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
  return (
    <div
      contentEditable="true"
      className="outline-none"
      onKeyDown={removeBlock}
      id={id}
    >
      {block.content}
    </div>
  );
};

export default Block;
