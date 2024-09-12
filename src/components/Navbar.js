import React from "react";
import logo from "../assests/logo.svg";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#0A0A23]">
      <nav className="flex items-center justify-between  w-11/12 max-w-[1250px] px-10 py-1   mx-auto text-white">
        <NavLink to="/">
          <div>
            <img src={logo} alt="logo" width={220}></img>
          </div>
        </NavLink>
        <div className="gap-12 flex ">
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <NavLink to="/cart">
            <button className="flex items-center gap-2">
              Cart{" "}
              <span>
                <FaCartFlatbedSuitcase />
              </span>
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
