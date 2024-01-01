import React from "react";
import { useState, useEffect } from "react";

const defaultFormButton = {
  name: "",
  number: "",
};

function Form({ setContacts, contacts }) {
  const [formButton, setFormButton] = useState({ name: "", number: "" });
  const handleSubmit = (e) => {
    setFormButton({ ...formButton, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (formButton.name === "" || formButton.number === "") {
      alert("Lütfen isim ve numara alanlarını doldurun");
      return false;
    }
    console.log(formButton);
    setContacts([...contacts, formButton]);
  };

  useEffect(() => {
    setFormButton(defaultFormButton);
  }, [contacts]);

  return (
    <form className="flex flex-col items-center" onSubmit={submit}>
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
      <button className="btn btn-info mt-5" type="submit">
        Kaydet
      </button>
    </form>
  );
}

export default Form;
