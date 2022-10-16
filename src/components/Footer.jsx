import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

function Footer(){
  return(
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 mt-auto">
      <div className="md:flex md:justify-between">
        <a href="https://google.com" className="flex items-center">
          <img src="logo192.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <div>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              ALIUS
            </span> <br/>
            <span className="self-center text-sm whitespace-nowrap dark:text-white">
              Grupo Consultor en Comercio Exterior
            </span>
          </div>
        </a>
        <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
          <div className="flex">
            <MdLocationPin className="text-white"/><a href="https://google.com" className="mb-0 text-sm font-semibold text-gray-900 dark:text-white">&nbsp;Via Corporativo Tijuana, Zona Rio.</a>
          </div>
          <div className="text-white">
            <div className="flex"><HiOutlineMail/><a href="https://google.com" className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">&nbsp;Hola@3312agency.com</a></div>
            <div className="flex"><BsTelephoneFill/><a href="https://google.com" className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">&nbsp;(664) 539 7520</a></div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright c 2020 Alius, Grupo Consultor en Comercio Exterior. Todos los derechos reservados. Politica de privacidad</span>
        </div>
    </footer>
  );
}
export default Footer;