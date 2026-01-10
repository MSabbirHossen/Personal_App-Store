import React from "react";
import { Link } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Error404 = () => {
  return (
    <div>
      <Navbar />
      <div className="w-3/4 mx-auto text-center py-20">
        <img className="mx-auto" src="/error-404.png" alt="404 Error" />
        <p className="text-error text-4xl font-bold">Oops, page not found!</p>
        <p className="m-2 font-semibold text-black">
          The page you are looking for does not exist.
        </p>
        <button className="btn bg-[#7d45e9] text-white rounded-lg">
          <Link to="/">Go to Home</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
