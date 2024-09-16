import React from "react";
import logo from "../assests/logo.svg";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="bg-[#0A0A23] fixed top-0 w-full z-10">
      <nav className=" flex items-center justify-between max-w-[1250px] w-11/12 px-10 py-1 h-20 mx-auto text-white">
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
            <div className="flex items-center gap-2 relative">
              Cart
              <span>
                <FaCartPlus className="text-2xl " />
              </span>
              {cart.length > 0 ? (
                <sup className="text-xs absolute -top-1 -right-4 bg-green-600 w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white  ">{cart.length}</sup>
              ) : (
                <span></span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
