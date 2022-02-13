import React, {useState} from "react";
import {TiSocialFacebookCircular, TiSocialGithubCircular, TiSocialInstagramCircular, TiSocialGooglePlusCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular  } from 'react-icons/ti'

import logo from "../../images/logo.png";

const Footer = () => (

  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-1 justify-center items-center flex-wrap sm:mt-0 mt-5 w-full">
      <TiSocialFacebookCircular fontSize={40} className="text-white cursor-pointer" />
      <TiSocialTwitterCircular fontSize={40} className="text-white cursor-pointer" />
      <TiSocialInstagramCircular fontSize={40} className="text-white cursor-pointer" />
      <TiSocialGithubCircular fontSize={40} className="text-white cursor-pointer" />
      <TiSocialGooglePlusCircular fontSize={40} className="text-white cursor-pointer" />
      <TiSocialLinkedinCircular fontSize={40} className="text-white cursor-pointer" />
      </div>
    </div>


    

    <div className="flex justify-center items-center flex-col sm:flex-row">
      <p className="text-white text-sm text-center font-medium mt-2 mx-2 my-2">Sign up for our newsletter</p>
      <input type="text" className="rounded-lg p-2 outline-none text-white border-none text-sm white-glassmorphism w-[300px] my-2"/>
      <button type="button" className="rounded-lg outline text-white border px-3 justify-center item-center pb-2 mx-2 my-2"><p className="text-white text-sm text-center font-medium mt-2">SUBSCRIBE</p></button>
    </div>

    <div className="flex justify-center items-center text-white">A project by: <p className="font-bold ml-1"> Carvey Lamosao</p></div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">© 2022 Copyright: ETHcede</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
