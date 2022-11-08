import React, { useState } from "react";
import logo from "../asset/logo.svg";
import hamburgerMenuIcon from "../asset/icon-menu.svg";
import closeMenuIcon from "../asset/icon-menu-close.svg";

function Header() {
  const [isOpen, toggle] = useState(false);

  const menuEntries = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <header className="container mx-auto mt-7 md:mt-0 px-4 md:px-0 ">
      <nav className="flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="" className="h-7" />
        </div>

        <ul className="hidden md:flex items-center gap-10">
          {menuEntries.map((entry, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-[15px] tracking-wide hover:text-softRed"
              >
                {entry}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => toggle(true)}>
          <img src={hamburgerMenuIcon} alt="" className="w-10" />
        </button>
        <div
          className={`fixed inset-0 w-screen h-screen ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button
            onClick={() => toggle(false)}
            className="absolute w-screen h-screen bg-black opacity-25"
          ></button>

          <div className="absolute w-4/6 h-screen p-6 pt-7 flex flex-col bg-white right-0">
            <button className="ml-auto" onClick={() => toggle(false)}>
              <img src={closeMenuIcon} alt="" className="w-7 h-7" />
            </button>
            <ul className="list-none mt-20 flex flex-col gap-4">
              {menuEntries.map((entry, index) => (
                <li key={index}>
                  <a href="#" className="">
                    {entry}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
