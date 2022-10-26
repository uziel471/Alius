import React, { useState } from "react";
import { BsInstagram, BsLinkedin, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/LogoPrincipal.png";


function Navbar(){
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => setNavOpen(!navOpen);

  return(
    <div className="flex justify-between items-center h-25 text-white bg-[#0b233f] w-full fixed z-40">
      <img src={Logo} className="mr-2" alt="Logo"  width={230} height={230} />
      <ul className="hidden md:flex">
        <li className="p-4">Inicio</li>
        <li className="p-4"><a href="#Servicios">Servicios </a></li>
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
      <div className={navOpen ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0b233f] ease-in-out duration-500": "fixed left-[-100%]"}>
        <img src={Logo} className="mr-3" alt="Logo"  width={230} height={230} />
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-white">Inicio</li>
          <li className="p-4 border-b border-white">Servicios</li>
          <li className="p-4 border-b border-white">Contacto</li>
          <li className="p-4 border-b border-white">Blog</li>
            
          <li className="p-4 border-b border-white"><div className="flex"><BsLinkedin size="20" className="text-white"/>&nbsp; Linked</div></li>
          <li className="p-4 border-b border-white"><div className="flex"><BsInstagram size="20" className="text-white"/>&nbsp; Instagram</div></li>
          <li className="p-4 border-b border-white"><div className="flex"><BsFacebook size="20" className="text-white"/>&nbsp; Facebook</div></li>
          <li className="p-4"><div className="flex"><BsWhatsapp size="20" className="text-white" />&nbsp; Whatsapp</div></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;