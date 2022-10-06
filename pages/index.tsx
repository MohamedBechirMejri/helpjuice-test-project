import type { NextPage } from "next";
import Header from "../components/Header";
import Statusbar from "../components/Statusbar";
import { useEffect, useRef, useState } from "react";
import Overlay from "../components/Overlay";
import uniqid from "uniqid";
import getCaretIndex from "../libs/getCaretIndex";
import getCaretCoordinates from "../libs/getCaretCoordinates";

const Home: NextPage = () => {
  const [innerHTML, setInnerHTML] = useState(
    `<h1>Front-end developer test project</h1>
    <p class='m-0'>Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by typing / then 1, then typing text, and hitting enter.</p>`
  );
  const [command, setCommand] = useState("");
  const [caretCoordinates, setCaretCoordinates] = useState({
    x: 0,
    y: 0,
  });

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
            // getCaretIndex(e.target);
            setCaretCoordinates(getCaretCoordinates());
          }}
        ></div>
        {
          <Overlay
            addElement={addElement}
            command={command}
            caretCoordinates={caretCoordinates}
          />
        }
      </main>
    </div>
  );
};

export default Home;
