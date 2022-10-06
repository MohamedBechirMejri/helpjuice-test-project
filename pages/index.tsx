import type { NextPage } from "next";
import Header from "../components/Header";
import Statusbar from "../components/Statusbar";
import { useState, useRef, useEffect } from "react";
import Overlay from "../components/Overlay";
import getCaretCoordinates from "../libs/getCaretCoordinates";
import getCaretElement from "../libs/getCaretElement";
import moveCursortoNextElement from "../libs/moveCursortoNextElement";
import clearCommand from "../libs/clearCommand";

const Home: NextPage = () => {
  const [command, setCommand] = useState("");
  const [caretCoordinates, setCaretCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [caret, setCaret] = useState(null as any);

  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore Focus the editor on load
    ref.current.focus();

    // @ts-ignore move caret to the end of div
    window.getSelection()?.modify("move", "forward", "documentBoundary");
  }, []);

  const addElement = (e: any, type: string, content = "") => {
    e.preventDefault();
    if (caret) {
      // @ts-ignore
      caret.focusNode.parentElement.insertAdjacentHTML(
        "afterend",
        `<${type} class='outline-none before:[content:attr(data-placeholder)]   before:text-[#c1c1c1] transition-all' data-placeholder='${content}'></${type}>`
      );
      clearCommand(caret, command);
      moveCursortoNextElement();
    }
    setCommand("");
  };

  return (
    <div className="p-2 pb-32 bg-white">
      <Header />
      <main className="mx-auto max-w-[700px] mt-4">
        <Statusbar />
        <div
          ref={ref}
          contentEditable="true"
          className="mt-8 prose outline-none max-w-none min-w-screen"
          onBlur={e => {
            // prevent focus loss when clicking overlay
            e.target.focus();
          }}
          onKeyDown={(e: any) => {
            setCaret(getCaretElement());

            if (command) {
              if (e.key === "Enter") {
                e.preventDefault();
                document.getElementById("o-0")?.click();
              }
              // only add letters or numbers
              if (e.key.length === 1) setCommand(command + e.key);

              if (e.key === "Backspace")
                setCommand(command.substring(0, command.length - 1));

              if (e.key === "Escape") setCommand("");
            }

            if (e.key === "/") setCommand("/");

            const coords = getCaretCoordinates();
            coords.x && coords.y && setCaretCoordinates(coords);
          }}
          onInput={e => {
            // @ts-ignore
            const caretElement = window.getSelection().baseNode.parentElement;

            caretElement.innerText.length &&
              caretElement.classList.remove(
                "before:[content:attr(data-placeholder)]"
              );
          }}
        >
          <h1>Front-end developer test project</h1>
          <p className="m-0">
            Your goal is to make a page that looks exactly like this one, and
            has the ability to create H1 text simply by typing / then 1, then
            typing text, and hitting enter.
          </p>
        </div>
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
