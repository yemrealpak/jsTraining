import React from "react";
import { useState } from "react";

function Form({ form, setForm }) {
  const [formButton, setFormButton] = useState({ name: "", number: "" });
  const handleSubmit = (e) => {
    console.log([e.target.name]);
    console.log(e.target.value);
    setFormButton({ ...formButton, [e.target.name]: e.target.value });
    console.log(formButton);
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center text-center mt-5 gap-5">
        <input
          name="name"
          placeholder="İsim :"
          value={formButton.name}
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => {
            handleSubmit(e);
          }}
        />
      </div>
      <div className="flex flex-row justify-center text-center mt-5 gap-5">
        <input
          name="number"
          value={formButton.number}
          placeholder="Telefon Numarası :"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => {
            handleSubmit(e);
          }}
        />
      </div>

      <div className="mt-5">
        {formButton.name.length > 0 && formButton.number.length > 0 ? (
          <div>
            <h2>
              Kaydedilcek isim : {formButton.name} Kaydedilcek numara :{" "}
              {formButton.number}
            </h2>
          </div>
        ) : (
          <div>
            <h2>*Numara ve isim alanları boş bırakılamaz*</h2>
          </div>
        )}
      </div>
      <button
        className="btn btn-info mt-5"
        type="submit"
        onClick={() => {
          setForm(formButton);
          setFormButton({ name: "", number: "" });
        }}
      >
        Kaydet
      </button>
    </div>
  );
}

export default Form;
