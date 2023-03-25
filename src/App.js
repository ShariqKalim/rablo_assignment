import React from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Display from "./components/Display";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Form1}></Route>
        <Route exact path="/Form2" Component={Form2}></Route>
        <Route exact path="/Form3" Component={Form3}></Route>
        <Route exact path="/Display" Component={Display}></Route>
      </Routes>
    </>
  );
};

export default App;
