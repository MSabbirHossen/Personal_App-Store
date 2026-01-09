import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const footerSocialLinks = [
  {name: 'Facebook', icon: <FaFacebook />, link: 'https://www.facebook.com/profile.php?id=61577697837535'},
  {name: 'Instagram', icon: <FaInstagramSquare />, link: 'https://www.instagram.com/parttimecoder/'},
  {name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/ms-hossen/'},
  {name: 'YouTube', icon: <FaYoutube />, link: 'https://www.youtube.com/@Part-TimeCoder'},
];

const Footer = () => {
    return (
        <div>
          <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <img src="/assets/logo.png" alt="App Store Logo" className="w-10 h-10"/>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  {
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      {
        footerSocialLinks.map((social) => (
          <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="text-2xl">{social.icon}</a>
        ))
      }
    </nav>
  }
</footer>
        </div>
    );
};

export default Footer;