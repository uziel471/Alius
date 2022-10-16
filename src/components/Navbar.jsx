import React, { useState } from "react";
import { BsInstagram, BsLinkedin, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


function Navbar(){
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => setNavOpen(!navOpen);

  return(
    <div className="flex justify-between items-center h-24 text-white bg-gray-900">
      <img src="logo192.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
      <h1 className="w-full text-3xl font-bold text-white">ALIUS</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Inicio</li>
        <li className="p-4">Servicios</li>
        <li className="p-4">Contacto</li>
        <li className="p-4">Blog</li>

        <li className="p-4"><BsLinkedin size="20" className="text-white" /></li>
        <li className="p-4"><BsInstagram size="20" className="text-white" /></li>
        <li className="p-4"><BsFacebook size="20" className="text-white" /></li>
        <li className="p-4"><BsWhatsapp size="20" className="text-white" /></li>
      </ul>
      <div onClick={handleNavOpen} className="block md:hidden">
        {navOpen ? <AiOutlineClose size={30} className="text-white"/> : <AiOutlineMenu size={30} className="text-white" />}
      </div>
      <div className={navOpen ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500": "fixed left-[-100%]"}>
        <img src="logo192.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <h1 className="w-full text-3xl font-bold text-white m-4">ALIUS</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Inicio</li>
          <li className="p-4 border-b border-gray-600">Servicios</li>
          <li className="p-4 border-b border-gray-600">Contacto</li>
          <li className="p-4 border-b border-gray-600">Blog</li>
            
          <li className="p-4 border-b border-gray-600"><div className="flex"><BsLinkedin size="20" className="text-white"/>&nbsp; Linked</div></li>
          <li className="p-4 border-b border-gray-600"><div className="flex"><BsInstagram size="20" className="text-white"/>&nbsp; Instagram</div></li>
          <li className="p-4 border-b border-gray-600"><div className="flex"><BsFacebook size="20" className="text-white"/>&nbsp; Facebook</div></li>
          <li className="p-4"><div className="flex"><BsWhatsapp size="20" className="text-white" />&nbsp; Whatsapp</div></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;