import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import {
  FiArrowDownLeft,
  FiBookOpen,
  FiCheckCircle,
  FiChevronDown,
  FiChevronsRight,
  FiClock,
  FiCloud,
  FiMoreVertical,
  FiUnlock,
} from "react-icons/fi";
import { RiText } from "react-icons/ri";

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
      <header className="flex items-center justify-between p-2 text-[#a9aeb8]">
        <div className="flex items-center gap-4">
          <FiChevronsRight className="text-[#6c727f]" />
          <p className="flex items-center gap-2 text-sm">
            <span className="flex items-center gap-2 font-medium underline transition-all cursor-pointer hover:underline">
              <FiBookOpen /> Main
            </span>
            <span>/</span>
            <span className="transition-all cursor-pointer hover:underline">
              Getting Started
            </span>
            <span>/</span>
            <span>Front-end developer test proje...</span>
          </p>
        </div>
        <div className="flex items-center gap-4 p-2">
          <div className="flex items-center gap-1 text-sm font-normal">
            <span>
              <FiUnlock />
            </span>
            <span>Editing</span>
          </div>
          <button className="text-[#3665a9] font-bold text-sm tracking-wider flex items-center gap-2">
            Publish Space <FiChevronDown />
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-[700px] mt-4">
        <div className="flex items-center justify-between w-full p-1 px-2 border rounded text-[#aaafb8]">
          <div className="flex items-center gap-2 text-sm">
            <p className="bg-[#d9f9e6] text-[#38795c] p-1 rounded px-2 font-bold">
              P
            </p>
            <div className="bg-[#dbdde1] w-[1px] h-3" />
            <p className="flex items-center gap-1">
              <FiClock /> 0min
            </p>
            <div className="bg-[#dbdde1] w-[1px] h-3" />
            <Image
              src="https://picsum.photos/100/100"
              width={20}
              height={20}
              alt="user"
              style={{
                borderRadius: "999999px",
              }}
            />
            <div className="bg-[#dbdde1] w-[1px] h-3" />
            <p className="flex items-center gap-1">
              <FiArrowDownLeft /> 0
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle />
            <FiCloud className="text-[#529d77]" />
            <FiMoreVertical className="text-[#212936]" />
          </div>
        </div>

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
