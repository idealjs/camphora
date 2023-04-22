import "./App.css";

import { moduleA } from "@idealjs/mono-template";
import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(ref.current!);
    // new Chessboard(ref.current!);
  }, []);
  return <div className="App">hello {moduleA}</div>;
}

export default App;
