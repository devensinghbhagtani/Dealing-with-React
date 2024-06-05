import React from "react";

function Navigation() {
  return (
    <nav className="flex justify-between  items-center">
      <div className="logo">
        <img src="./images/brand_logo.svg" alt="" />
      </div>
      <ul className="flex gap-6">
        <li href="">MENU</li>
        <li href="">LOCATION</li>
        <li href="">ABOUT</li>
        <li href="">CONTACT</li>
      </ul>
      <button className="bg-[#d01c28] h-8 px-4  text-white ">Login</button>
    </nav>
  );
}

export default Navigation;
