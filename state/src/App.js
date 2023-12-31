//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [name, setName] = useState("Yunus");
  const [age, setAge] = useState(23);
  const [input, setInput] = useState("");
  const [family, setFamily] = useState(["Sezen", "Güneş", "Deniz", "Yunus"]);

  return (
    <>
      <Home
        name={name}
        age={age}
        input={input}
        setAge={setAge}
        setName={setName}
        setInput={setInput}
        family={family}
        setFamily={setFamily}
      />
    </>
  );
}

export default App;
