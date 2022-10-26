import React from "react";
import { BsInstagram, BsLinkedin, BsFacebook, BsWhatsapp } from "react-icons/bs";

function Nav() {
  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div href="#" className="flex items-center">
          <img src="logo192.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <div>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              ALIUS
            </span> <br/>
            <span className="self-center text-sm whitespace-nowrap dark:text-white">
              Grupo Consultor en Comercio Exterior
            </span>
          </div>
        </div>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5A1 1 0 011-1H12A1 1 0 110 2H4A1 1 0 01-1-1ZM3 10A1 1 0 011-1H12A1 1 0 110 2H4A1 1 0 01-1-1ZM3 15A1 1 0 011-1H12A1 1 0 01-1-1Z" clipRule="evenodd"></path> </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <div href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-gray-800" aria-current="page">Inicio</div>
            </li>
            <li>
              <div href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-gray-800" aria-current="page">Servicios</div>
            </li>
            <li>
              <div href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-gray-800" aria-current="page">Contacto</div>
            </li>
            <li>
              <div href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-gray-800" aria-current="page">Blog</div>
            </li>
            <li>
              <BsLinkedin size="20" className="text-white" />
            </li>
            <li>
              <BsInstagram size="20" className="text-white" />
            </li>
            <li>
              <BsFacebook size="20" className="text-white" />
            </li>
            <li>
              <BsWhatsapp size="20" className="text-white" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
