import React from "react";
import Main from "./components/Main";
import { useState } from "react";
import "./App.css";
import Next from "./components/Next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
    const [text, setText] = useState("");

    const getInput = (t) => {
      console.log(t);
      setText(t);
    };
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Main getInput={getInput} value={text}/>}/>
        <Route path="/next" element={<Next name={text}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
