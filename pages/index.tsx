import type { NextPage } from "next";
import { useState } from "react";
import { RiText } from "react-icons/ri";
import Header from "../component/Header";
import Statusbar from "../component/Statusbar";

const Home: NextPage = () => {
  const [headings, setHeadings] = useState([
    {
      type: "p",
      content:
        "Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by typing / then 1, then typing text, and hitting enter.",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const command = inputValue.substring(0, 2);
    const content =
      inputValue.substring(0, 1) === "/" || inputValue.substring(0, 1) === "@"
        ? inputValue.substring(2, inputValue.length)
        : inputValue;

    const heading = {
      type:
        command === "/1"
          ? "h1"
          : command === "/2"
          ? "h2"
          : command === "/3"
          ? "h3"
          : command === "/4"
          ? "h4"
          : command === "/5"
          ? "h5"
          : command === "/6"
          ? "h6"
          : command === "@ "
          ? "a"
          : "p",
      content,
    };

    setHeadings([...headings, heading]);
    setInputValue("");
  };

  const editHeading = (e: any) => {
    const id = e.target.id;
    const content = e.target.innerText;

    const newHeadings = headings;
    newHeadings[+id].content = content;

    setHeadings(newHeadings);
  };

  return (
    <div className="p-2 bg-white">
      <Header />
      <main className="mx-auto max-w-[700px] mt-4">
        <Statusbar />

        <form
          className="flex flex-col w-full gap-4 mt-8"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-bold">
            Front-end developer test project
          </h1>
          <hr />
          <div className="flex flex-col gap-6 text-[#4e5663] ">
            {headings.map((heading, i) => {
              return heading.type === "h1" ? (
                <h1
                  key={i}
                  className="text-3xl font-bold outline-none"
                  id={`${i}`}
                  onInput={editHeading}
                  contentEditable="true"
                >
                  {heading.content}
                </h1>
              ) : heading.type === "h2" ? (
                <h2
                  key={i}
                  className="text-2xl font-bold outline-none"
                  id={`${i}`}
                  onInput={editHeading}
                  contentEditable="true"
                >
                  {heading.content}
                </h2>
              ) : heading.type === "h3" ? (
                <h3
                  key={i}
                  className="text-xl font-semibold outline-none"
                  id={`${i}`}
                  onInput={editHeading}
                  contentEditable="true"
                >
                  {heading.content}
                </h3>
              ) : heading.type === "h4" ? (
                <h4
                  key={i}
                  className="text-lg font-semibold outline-none"
                  id={`${i}`}
                  onInput={editHeading}
                  contentEditable="true"
                >
                  {heading.content}
                </h4>
              ) : heading.type === "h5" ? (
                <h5
                  key={i}
                  className="text-base font-semibold outline-none"
                  id={`${i}`}
                  onInput={editHeading}
                  contentEditable="true"
                >
                  {heading.content}
                </h5>
              ) : heading.type === "h6" ? (
                <h6
                  key={i}
                  className="text-sm font-medium outline-none"
                  id={`${i}`}
                  onInput={editHeading}
                  contentEditable="true"
                >
                  {heading.content}
                </h6>
              ) : heading.type === "a" ? (
                <a
                  href="#"
                  key={i}
                  className="text-base font-medium outline-none cursor-pointer hover:underline"
                  id={`${i}`}
                >
                  {heading.content}
                </a>
              ) : (
                <p
                  key={i}
                  className="text-base font-medium outline-none"
                  id={`${i}`}
                  onInput={editHeading}
                  contentEditable="true"
                >
                  {heading.content}
                </p>
              );
            })}
          </div>
          <div className="relative w-full">
            <input
              placeholder="Type / for blocks, @ to link docs or people"
              className="w-full outline-none text-[#5d6470] font-medium"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <div
              className="p-4 mt-4 ml-4 transition-all bg-white border rounded shadow-lg w-72 h-max"
              style={{
                opacity: inputValue.substring(0, 1) === "/" ? "1" : "0",
              }}
            >
              <h1 className="text-base font-bold">Add blocks</h1>
              <p className="text-sm text-[#b2b7c0]">
                Filtering keyword{" "}
                <span className="ml-2 text-white bg-[#3565a9] px-1 rounded">
                  {inputValue.substring(1, 2)}
                </span>
              </p>
              <div className="transition-all ">
                {[
                  {
                    title: "Heading 1",
                    hint: "/1",
                  },
                  {
                    title: "Heading 2",
                    hint: "/2",
                  },
                  {
                    title: "Heading 3",
                    hint: "/3",
                  },
                  {
                    title: "Heading 4",
                    hint: "/4",
                  },
                  {
                    title: "Heading 5",
                    hint: "/5",
                  },
                  {
                    title: "Heading 6",
                    hint: "/6",
                  },
                  {
                    title: "Anchor",
                    hint: "@",
                  },
                ]
                  .filter(h => h.hint.includes(inputValue.substring(1, 2)))
                  .map((h, i) => (
                    <div
                      key={i * Math.random()}
                      className="flex items-center gap-4 transition-all"
                    >
                      <RiText />
                      <div className="mt-4">
                        <p className="font-bold">{h.title}</p>
                        <p className="text-sm text-[#b2b7c0]">
                          Command: {h.hint} + space + text
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Home;
