import React from "react";
import homeImage from "../assets/homeImage.jpeg";

function Home(){
  return(
    <div className="w-full h-screen text-white bg-gradient-to-tr from-[#000000] to-[#0b233f] z-1">
      <a href="#" name="Inicio" className="block"></a>
      <div className="w-full h-screen mx auto text-center flex flex-col justify-center bg-cover bg-center mt-[90px]">
        <img src={homeImage} className="w-full h-full object-cover absolute mix-blend-overlay" alt="Home" />
        <h1 className="md:text-7xl sm:text-6xl font-bold"> TUS ALIADOS EN COMERCIO EXTERIOR</h1>
        <h3 className="md:text-4xl sm:text-3xl text-cl font-bold pb-10"> Definimos las mejores estrategias y brindamos resultados reales</h3>
        <button
          className="text-white font-semibold py-2 px-4 border border-white rounded-md w-25 h-25 w-[200px] my-6 mx-auto py-3 z-0">
          <a href="#Contacto">Contactanos</a>
        </button>
      </div>
    </div>
  )
}
export default Home;