import React from "react";
import { useState, useEffect } from "react";
import { Input, Tooltip } from "antd";
function ExampleInput() {
  const [input, setInput] = useState({ name: "", surname: "" });
  const [buttonInput, setButtonInput] = useState({ name: "", surname: "" });
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: buttonInput[e.target.name] });
    setButtonInput({ name: "", surname: "" });
  };

  useEffect(() => {
    console.log("///////////////// input useEffect");
  }, [input]);

  useEffect(() => {
    console.log("///////////////// useEffect");
  });
  return (
    <div className="mx-auto text-center mb-10">
      <h1 className="text-4xl">Example Input Gelişmiş</h1>
      <h2 className="underline">
        Artık butonlar Objelerle değişiklik yapıyor farkı anlamak için Home.js
        içindeki yapıya bakabilirsin
      </h2>
      <br />
      <h2 className="text-2xl text-primary">
        Hoşgeldin {input.name} {input.surname}
      </h2>
      <br />
      <br />
      <h1>Name : {input.name}</h1>
      <input
        className="input input-bordered input-secondary w-full max-w-xs mt-3"
        placeholder={`Merhaba ${input.name}`}
        name="name"
        value={buttonInput.name}
        onChange={(e) =>
          setButtonInput({ ...input, [e.target.name]: e.target.value })
        }
      />
      <button
        name="name"
        className="btn btn-outline btn-accent"
        style={{ marginLeft: "10px", borderRadius: "10px" }}
        type="primary"
        onClick={(e) => {
          handleInput(e);
        }}
      >
        Kaydet
      </button>
      <br />
      <br />
      <hr className="centered-hr w-2/3 mx-auto" />
      <br />
      <h1>Surname : {input.surname}</h1>
      <input
        className="input input-bordered input-secondary w-full max-w-xs mt-3"
        placeholder={`Merhaba ${input.surname}`}
        name="surname"
        value={buttonInput.surname}
        onChange={(e) =>
          setButtonInput({ ...input, [e.target.name]: e.target.value })
        }
      />
      <button
        name="surname"
        className="btn btn-outline btn-accent"
        style={{ marginLeft: "10px", borderRadius: "10px" }}
        type="primary"
        onClick={(e) => {
          handleInput(e);
        }}
      >
        Kaydet
      </button>
    </div>
  );
}

export default ExampleInput;
