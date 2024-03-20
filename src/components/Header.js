import React from "react";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <div>
      <header className="header">
        <img className="header__logo" alt="logo Around The US" src={logo} />
      </header>
    </div>
  );
}
