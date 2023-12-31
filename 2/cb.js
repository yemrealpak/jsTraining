//https://jsonplaceholder.typicode.com/users

import axios from "axios";

(async () => {
  await axios("https://jsonplaceholder.typicode.com/users").then(({ data }) =>
    console.log("//////////////////////Selam Kullanıcılar  :", data)
  );

  await axios("https://jsonplaceholder.typicode.com/posts/1").then(({ data }) =>
    console.log("//////////////////////Selam Postlar  :", data)
  );

  await axios("https://jsonplaceholder.typicode.com/posts/2").then(({ data }) =>
    console.log("//////////////////////Selam Postlar  :", data)
  );

  await axios("https://jsonplaceholder.typicode.com/posts/3").then(({ data }) =>
    console.log("//////////////////////Selam Postlar  :", data)
  );

  await axios("https://jsonplaceholder.typicode.com/posts/4").then(({ data }) =>
    console.log("//////////////////////Selam Postlar  :", data)
  );
})();
