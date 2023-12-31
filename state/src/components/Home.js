import React from "react";
import { useState } from "react";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

function Home({
  name,
  age,
  setName,
  setAge,
  input,
  setInput,
  family,
  setFamily,
}) {
  const [valiButton, setValiButton] = useState(false);

  return (
    <div className="App mt-10">
      <h1>Selam {name}</h1>
      <br />

      <input
        className="input input-bordered input-secondary w-full max-w-xs"
        type="text"
        value={valiButton ? "" : null}
        placeholder="isminizi giriniz"
        onChange={(e) => {
          setInput(e.target.value);
          setValiButton(false);
        }}
      ></input>
      <button
        className="btn btn-outline btn-accent"
        style={{ marginLeft: "10px", borderRadius: "10px" }}
        type="primary"
        onClick={() => {
          setName(input);
          setValiButton(true);
        }}
      >
        Yunusla
      </button>
      <br />
      <br />
      <hr className="centered-hr w-2/3 mx-auto" />
      <br />
      <br />
      <h1>yaşın : {age}</h1>

      <br />
      <input
        className="input input-bordered input-secondary w-full max-w-xs"
        type="text"
        value={valiButton ? "" : null}
        placeholder="yasınızı giriniz"
        onChange={(e) => {
          setInput(e.target.value);
          setValiButton(false);
        }}
      ></input>
      <button
        className="btn btn-outline btn-accent"
        style={{ marginLeft: "10px", borderRadius: "10px" }}
        type="primary"
        onClick={() => {
          setAge(input);
          setValiButton(true);
        }}
      >
        Yunusla
      </button>
      <br />
      <br />
      <br />
      <br />
      <hr className="centered-hr w-2/3 mx-auto" />
      <br />
      <br />
      <br />
      {family.map((name, i) => (
        <li
          style={
            i === 0 ? { color: "red", fontSize: "24px" } : { fontSize: "20px" }
          }
          key={i}
        >
          {name}
        </li>
      ))}
      <br />
      <br />
      <h1 className="text-3xl font-bold underline mb-5 text-pink-500">
        Aileye Ekleme Yap
      </h1>

      <br />
      <div className="mb-10">
        <input
          className="input input-bordered input-secondary w-full max-w-xs"
          value={valiButton ? "" : null}
          type="text"
          placeholder="isim gir"
          onChange={(e) => {
            setInput(e.target.value);
            setValiButton(false);
          }}
        ></input>
        <button
          className="btn btn-outline btn-accent"
          style={{ marginLeft: "10px", borderRadius: "10px" }}
          type="primary"
          onClick={() => {
            setFamily([input, ...family]);
            setValiButton(true);
          }}
        >
          Yunusla
        </button>
      </div>
      <hr className="centered-hr w-1/2 mx-auto" />
      <br />
    </div>
  );
}

export default Home;
