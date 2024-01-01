import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function List({ contacts, setContacts }) {
  const [search, setSearch] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(search.toLowerCase())
    );
  });

  console.log(filtered);

  const deleteContact = (name, i, number) => {
    console.log("/////////// ad :" + name + " i : " + i);
    setContacts((current) =>
      current.filter((contacts) => {
        // 👇️ remove object
        if (
          contacts.name === name &&
          window.confirm(
            "👇️" +
              contacts.name +
              "Kişisini silmek istediğinizden emin misiniz ?"
          )
        ) {
          return contacts.name !== name && contacts.number !== number;
        }
        return contacts;
      })
    );
  };

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //https://jsonplaceholder.typicode.com/users
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));

    console.log("///////////users" + users);
  }, []);

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
      <h1 className="text-3xl text-center text-blue-500 border-blue-500">
        Bulunan Kişi : {filtered.length}
      </h1>
      <hr className="w-1/5 mx-auto border-blue-500 mt-5" />
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
            <div className="collapse-content flex flex-row justify-between">
              <h1 className="text-xl text-blue-500 ml-10">
                📞 Kullanıcı Numarası : {contact.number}
              </h1>

              <div className="flex flex-row gap-5 mr-10">
                <a href={"tel:" + contact.number}>
                  <button className="btn btn-primary">Ara</button>
                </a>

                <button
                  onClick={() => deleteContact(contact.name, contact.number)}
                  className="btn btn-error"
                >
                  Sil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isLoading ? <h1>Yükleniyor</h1> : <h1>Kullanıcılar :</h1>}

      <div>
        {users.map((user, i) => (
          <div
            key={i}
            className="collapse collapse-arrow bg-base-200 w-1/3 mx-auto gap-5 mt-5 mb-5"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="flex collapse-title text-2xl font-medium justify-start ml-2">
              <h1 className="">Kullanıcı ismi :{user.name}</h1>
            </div>
            <div className="collapse-content flex flex-row justify-center">
              <h1 className="text-xl text-blue-500 ">
                Kullanıcı sokağı : {user.address.street}
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
