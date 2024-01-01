//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Counter from "./components/Counter";
import ExampleInput from "./components/ExampleInput";

function App() {
  const [isVisible, setIsVisible] = useState({
    home: false,
    counter: false,
    input: false,
  });
  const [pageTimer, setPageTimer] = useState({ home: 0, counter: 0, input: 0 });

  const [name, setName] = useState("Yunus");
  const [age, setAge] = useState(23);
  const [input, setInput] = useState("");
  const [family, setFamily] = useState(["Sezen", "Güneş", "Deniz", "Yunus"]);

  const setterVisible = (e) => {
    setIsVisible({ ...isVisible, [e.target.name]: !isVisible[e.target.name] });
  };

  return (
    <div className="flex flex-col justify-center gap-5">
      {isVisible.home && (
        <div>
          <Home
            name={name}
            age={age}
            input={input}
            setAge={setAge}
            setName={setName}
            setInput={setInput}
            family={family}
            setFamily={setFamily}
            pageTimer={pageTimer}
            setPageTimer={setPageTimer}
          />
          <h1 className="text-3xl text-center text-primary">
            Çalışma Zamanı :{pageTimer.home}
          </h1>
        </div>
      )}

      <button
        className="btn btn-outline btn-accent mx-auto"
        name="home"
        onClick={(e) => setterVisible(e)}
      >
        Home
      </button>
      {isVisible.counter && (
        <div>
          <Counter pageTimer={pageTimer} setPageTimer={setPageTimer} />
          <h1 className="text-3xl text-center text-primary">
            Çalışma Zamanı :{pageTimer.counter}
          </h1>
        </div>
      )}

      <button
        className="btn btn-outline btn-accent mx-auto"
        name="counter"
        onClick={(e) => setterVisible(e)}
      >
        Counter
      </button>
      {isVisible.input && (
        <div>
          <ExampleInput pageTimer={pageTimer} setPageTimer={setPageTimer} />
          <h1 className="text-3xl text-center text-primary">
            Çalışma Zamanı :{pageTimer.input}
          </h1>
        </div>
      )}
      <button
        className="btn btn-outline btn-accent mx-auto"
        name="input"
        onClick={(e) => setterVisible(e)}
      >
        Input
      </button>
    </div>
  );
}

export default App;
