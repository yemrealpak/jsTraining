import React from "react";
import { useState } from "react";

function List({ contacts }) {
  const [search, setSearch] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(search.toLowerCase())
    );
  });

  console.log(filtered);

  return (
    <div>
      <input
        className="input input-bordered input-info w-full max-w-xs"
        placeholder="Ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />
      <br />
      <hr className="w-1/3 mx-auto border-blue-500" />
      <br />
      <br />

      <div>
        {filtered.map((contact, i) => (
          <div
            key={i}
            className="collapse collapse-arrow bg-base-200 w-1/3 mx-auto gap-5 mt-5 mb-5"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-2xl font-medium align-middle">
              <h1 className="">Kullanıcı ismi :{contact.name}</h1>
            </div>
            <div className="collapse-content">
              <h1 className="text-xl text-blue-500">
                Kullanıcı Numarası : {contact.number}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}

export default List;
