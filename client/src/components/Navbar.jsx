import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import logo2 from "../../images/logo2.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo2} alt="logo" className="w-64 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Marketplace", "Cryptocurrency", "Wallets", "About Us"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-transparent outline border border-pink-700 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#be185d] transition hover:duration-700">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Marketplace", "Cryptocurrency", "Wallets", "About Us"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
            <li className="bg-transparent outline border border-pink-700 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#be185d] transition hover:duration-700">
              Login
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
