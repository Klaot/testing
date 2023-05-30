import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
