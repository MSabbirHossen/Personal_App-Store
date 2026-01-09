import React from "react";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa6";
const navlinks = [
  { name: "Home", path: "/" },
  { name: "Apps", path: "/apps" },
  { name: "Installation", path: "/installation" },
];

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navlinks.map((link) => (
       <NavLink className="active:underline active:text-[#7d45e9]"><li key={link.name}>
         <a href={link.path}>{link.name}</a>
       </li></NavLink>
     ))}
      </ul>
    </div>
    <img src="/assets/logo.png" alt="Logo" className="w-10 m-2" />
    <a className="btn btn-ghost text-xl">Personal App Store</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks.map((link) => (
       <NavLink className="active:underline active:text-[#7d45e9]"><li key={link.name}>
         <a href={link.path}>{link.name}</a>
       </li></NavLink>
     ))}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn bg-[#7d45e9] rounded-lg text-white hover:bg-[#5c2ad1]"><FaGithub />
     <Link to="https://github.com/MSabbirHossen/Personal_App-Store.git" > Contribute</Link>
    </button>    
  </div>
</div>
  );
};

export default Navbar;
