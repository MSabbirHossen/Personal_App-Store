import React from "react";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const storeLinks = [
  {
    name: "App Store",
    url: "https://www.apple.com/app-store/",
    icon: <FaAppStoreIos />,
  },
  {
    name: "Play Store",
    url: "https://play.google.com/store",
    icon: <IoLogoGooglePlaystore />,
  },
];

const trustData = [
  {
    id: "1",
    title: "Total Download",
    count: "29.6M",
    text: "21% More Than Last Month",
  },
  {
    id: "2",
    title: "Total Review",
    count: "906K",
    text: "46% More Than Last Month",
  },
  { id: "3", title: "Active Apps", count: "132+", text: "31 Will Launch" },
];

const Header = () => {
  return (
    <div className="text-center">
      <div className="banner my-4">
        <h1 className="text-4xl font-bold p-2">
          We Build <br />
          <span className="text-[#8250e9]">Productive</span> Apps
        </h1>
        <p className="description font-semibold p-4">
          At Personal App Store, we craft innovative apps designed to make
          everyday life simpler, smarter, and more exciting. <br /> Our goal is
          to turn your ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex justify-center my-4">
        {storeLinks.map((store) => (
          <button
            key={store.name}
            className="mx-2 px-4 py-2 btn btn-outline text-black rounded-lg hover:bg-blue-700 hover:text-white flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer text-xl"
            onClick={() => window.open(store.url, "_blank")}
          >
            <span className="store-icon mr-2">{store.icon}</span>
            <span className="store-name">{store.name}</span>
          </button>
        ))}
      </div>
      <div className="hero mt-6 mx-auto">
        <img src="/assets/hero.png" alt="Hero Image" />
      </div>
      <div className="bg-[#763fe8]">
        <h1 className="text-white text-3xl font-bold p-4">
          Trusted by Millions, Built for You
        </h1>
        <div className="w-3/4 m-auto flex justify-around items-center text-white p-6">
          {trustData.map((data) => (
            <div key={data.id} className="text-center">
              <p className="flex-1">{data.title}</p>
              <h1 className="flex-1 text-6xl font-bold py-2">{data.count}</h1>
              <p className=" flex-1font-semibold">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
