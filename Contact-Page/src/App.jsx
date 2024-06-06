import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="flex left-[65%] w-[100%] h-[100vh] fixed z-[-1]">
        <img className="h-[100%]" src="./Images/backg.jpg" alt="" />
      </div>
      <Navigation />
      <Hero />
    </>
  );
}

export default App;
