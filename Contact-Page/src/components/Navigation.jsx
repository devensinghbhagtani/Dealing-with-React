import React from "react";

function Navigation() {
  return (
    <nav className="flex justify-between px-[5vw] py-7">
      <div className="logo">
        <img src="./Images/brand_logo.svg" alt="" />
      </div>
      <div>
        <ul className="flex font-[600] gap-5">
          <li href="#">HOME</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
