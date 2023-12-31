import React from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const arttır = (cb) => {
    setTimeout(() => {
      cb(count + 1);
    }, 500);
  };

  const azalt = (cb) => {
    setTimeout(() => {
      cb(count - 1);
    }, 500);
  };

  return (
    <div className="mx-auto text-center mb-10">
      <h1 className="text-3xl">{count}</h1>
      <div className="mt-5 flex justify-center gap-5">
        <button
          className="btn btn-outline btn-success rounded-box"
          onClick={() => {
            arttır(setCount);
          }}
        >
          +
        </button>
        <button
          className="btn btn-outline btn-warning rounded-box"
          onClick={() => {
            azalt(setCount);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
