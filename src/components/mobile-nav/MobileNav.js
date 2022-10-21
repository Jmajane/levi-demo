import React from "react";
import "./MobileNav.css";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

function MobileNav() {
  return (
    <div className="Nav">
      <div>
        <AiOutlineMenu />
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/2560px-Levi%27s_logo.svg.png"
        alt="Levi"
      ></img>
      <div>
        <AiOutlineSearch />
        <AiOutlineShopping />
      </div>
    </div>
  );
}

export default MobileNav;
