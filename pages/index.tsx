import type { NextPage } from "next";
import Header from "../components/Header";
import Statusbar from "../components/Statusbar";
import { useState } from "react";
import Block from "../components/Block";

const Home: NextPage = () => {
  const [blocks, setBlocks] = useState([
    {
      type: "p",
      content:
        "Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by typing / then 1, then typing text, and hitting enter.",
    },
  ]);

  return (
    <div className="p-2 bg-white">
      <Header />
      <main className="mx-auto max-w-[700px] mt-4">
        <Statusbar />
        <form className="flex flex-col w-full gap-4 mt-8">
          <h1 className="text-4xl font-bold">
            Front-end developer test project
          </h1>
          <hr />
          <div className="flex flex-col gap-6 text-[#4e5663] ">
            {blocks.map((block, i) => (
              <Block
                block={block}
                index={i}
                key={i}
                blocks={blocks}
                setBlocks={setBlocks}
              />
            ))}
          </div>
        </form>
      </main>
    </div>
  );
};

export default Home;
