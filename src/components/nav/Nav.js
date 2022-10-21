import "./Nav.css";

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";

function Nav() {
  return (
    <div className="Nav">
      <div>
        <h5>SHOP</h5>
        <h5>DISCOVER</h5>
        <h5>SECONDHAND</h5>
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/2560px-Levi%27s_logo.svg.png"
        alt="Levi"
      ></img>

      <div>
        <div className="SearchBar">
          <AiOutlineSearch />
          <input type="text" placeholder="What are you looking for?" />
        </div>
        <div>
          <BiHeart />
          <AiOutlineShopping />
        </div>
      </div>
    </div>
  );
}

export default Nav;
