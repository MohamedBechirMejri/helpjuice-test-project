import type { NextPage } from "next";
import Header from "../components/Header";
import Statusbar from "../components/Statusbar";
import { useEffect, useRef, useState } from "react";
import Overlay from "../components/Overlay";
import uniqid from "uniqid";

const Home: NextPage = () => {
  const [innerHTML, setInnerHTML] = useState(
    `<h1>Front-end developer test project</h1>
    <p class='m-0'>Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by typing / then 1, then typing text, and hitting enter.</p>`
  );
  const [command, setCommand] = useState("");

  const Ref = useRef(null as any);

  useEffect(() => {
    if (Ref.current.innerHTML !== innerHTML) Ref.current.innerHTML = innerHTML;
  }, [innerHTML]);

  const addElement = (e: any, type: string, content = "") => {
    e.preventDefault();
    setInnerHTML(innerHTML + `<${type}>${content}</${type}>`);
  };

  return (
    <div className="p-2 pb-32 bg-white">
      <Header />
      <main className="mx-auto max-w-[700px] mt-4">
        <Statusbar />
        <div
          ref={Ref}
          contentEditable="true"
          className="mt-8 prose outline-none max-w-none min-w-screen"
          onInput={(e: any) => {
            setInnerHTML(e.target.innerHTML);
          }}
          onKeyDown={(e: any) => {
            console.log("Caret at: ", e.target);
          }}
        ></div>
        <form className="flex flex-col w-full gap-4 mt-8">
          <div className="flex flex-col gap-6 text-[#4e5663] ">
            {<Overlay addElement={addElement} command={command} />}
          </div>
        </form>
      </main>
    </div>
  );
};

export default Home;
