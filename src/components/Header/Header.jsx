import React from "react";

import Banner from "../../pages/Banner/Banner";


const Header = () => {
  return (
    <div>      
      <Banner/>
      <div className="hero mt-6 px-6 mx-auto">
        <img src="/assets/hero.png" alt="Hero Image" />
      </div>
      
    </div>
  );
};

export default Header;
