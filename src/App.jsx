import React, { useEffect } from "react";
import Header from "./Components/Header";
import Meme from "./Components/Meme";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="flex flex-col">
      <Header/>
      <Meme/>
    </main>
  );
}

export default App;
