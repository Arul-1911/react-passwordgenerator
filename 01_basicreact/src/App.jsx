import { useState } from "react";
import Youtube from "./Youtube";

function App() {
  const [count, Sethehe] = useState(0);

  const hwhw = () => {
    Sethehe(count + 1);
  };

  return (
    <>
      <h2 onClick={hwhw}>Hello World! {count}</h2>
      <Youtube />
    </>
  );
}

export default App;
