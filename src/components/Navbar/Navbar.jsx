import React from "react";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa6";
const navLinks = [
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
      {
        navLinks.map((link) => (
          <Link to={link.path} className="menu menu-sm bg-base-100  dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            key={link.name}>{link.name}</Link>))
      }
      
    </div>
    <img src="/assets/logo.png" alt="Logo" className="w-10 m-2" />
    <a className="btn btn-ghost text-xl">Personal App Store</a>
  </div>
  <div className="navbar-center hidden lg:flex">
       {
      navLinks.map((link) => (
        <Link to={link.path} className="btn btn-ghost menu menu-horizontal px-1"
          key={link.name}>{link.name}</Link>))
    }
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
