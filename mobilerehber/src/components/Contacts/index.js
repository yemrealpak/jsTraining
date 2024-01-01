import React from "react";
import List from "./List";
import Form from "./Form";
import { useState, useEffect } from "react";

function Contacts({ isVisible }) {
  const [contacts, setContacts] = useState([
    { name: "Ahmet", number: "123" },
    { name: "Mehmet", number: "456" },
  ]);

  useEffect(() => {
    console.log("contacts", contacts);
  }, [contacts]);

  return (
    <div className="flex flex-col gap-5 mt-5">
      {isVisible.list && <List contacts={contacts} />}
      {isVisible.add && <Form contacts={contacts} setContacts={setContacts} />}
    </div>
  );
}

export default Contacts;
