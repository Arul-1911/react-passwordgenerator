import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200 bg-black"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div
            className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-5
          py-3 rounded-3xl"
          >
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            >
              purple
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            >
              orange
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            >
              grey
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
