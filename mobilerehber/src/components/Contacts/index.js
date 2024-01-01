import React, { useEffect } from "react";
import List from "./List";
import Form from "./Form";
import { useState } from "react";

function Contacts() {
  const [form, setForm] = useState({ name: "", number: "" });

  const [formArray, setFormArray] = useState([]);

  useEffect(() => {
    setFormArray([form, ...formArray]);
  }, [form]);

  return (
    <div className="flex flex-col gap-5 mt-5">
      <List form={formArray} />
      <Form form={form} setForm={setForm} />
    </div>
  );
}

export default Contacts;
