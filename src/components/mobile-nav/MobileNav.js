import React from "react";
import "./MobileNav.css";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

function MobileNav() {
  return (
    <div className="nav">
      <AiOutlineMenu />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/2560px-Levi%27s_logo.svg.png"
        alt="Levi"
      ></img>

      <AiOutlineSearch />
      <AiOutlineShopping />
    </div>
  );
}

export default MobileNav;
