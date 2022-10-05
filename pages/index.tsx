import type { NextPage } from "next";
import Header from "../components/Header";
import Statusbar from "../components/Statusbar";
import { useEffect, useState } from "react";
import Block from "../components/Block";
import Overlay from "../components/Overlay";
import uniqid from "uniqid";

const Home: NextPage = () => {
  const [blocks, setBlocks] = useState([] as any[]);
  const [command, setCommand] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setBlocks([
      {
        id: uniqid(),
        type: "p",
        content:
          "Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by typing / then 1, then typing text, and hitting enter.",
      },
    ]);
  }, []);

  const addBlock = (e: any, type: string, content = "") => {
    e.preventDefault();

    setBlocks([...blocks, { id: uniqid(), type, content }]);
    setInputValue("");
    setCommand("");
  };

  const removeBlock = (e: any) => {
    if (e.target.innerText === "") {
      setBlocks(blocks.filter((b: any) => b.id !== e.target.id));
    }
  };

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
            {blocks.map(block => (
              <Block
                block={block}
                id={block.id}
                key={block.id}
                removeBlock={removeBlock}
                addBlock={addBlock}
                setCommand={setCommand}
              />
            ))}
            <input
              placeholder="Type / for blocks, @ to link docs or people"
              className="w-full outline-none text-[#5d6470] font-medium"
              onKeyDown={(e: any) => {
                if (e.key === "Enter") {
                  addBlock(e, "p", e.target.value);
                  e.target.value = "";
                }
              }}
              onChange={(e: any) => {
                setInputValue(e.target.value);

                const regex = /\/\S{0,}/gm;
                const command = e.target.value.match(regex);
                command ? setCommand(command[0]) : setCommand("");
              }}
              value={inputValue}
            />
            {command && <Overlay addBlock={addBlock} />}
          </div>
        </form>
      </main>
    </div>
  );
};

export default Home;
