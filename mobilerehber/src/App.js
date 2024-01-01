import React from "react";
import Contacts from "./components/Contacts";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [isVisible, setIsVisible] = useState({
    add: false,
    //ekleme alanı
    list: false,
    //listeleme ve filtreleme
    home: true,
    //Ana sayfa
  });

  return (
    <div className="App">
      <Header setIsVisible={setIsVisible} />
      {isVisible.home && <Home />}
      <Contacts isVisible={isVisible} />
    </div>
  );
}

export default App;
