import React from "react";

function Home(){
  return(
    <div className="text-white bg-gray-700">
      <div className="w-full h-screen mx auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl font-bold"> TUS ALIADOS EN COMERCIO EXTERIOR</h1>
        <h3 className="md:text-4xl sm:text-3xl text-cl font-bold pb-10"> Definimos las mejores estrategias y brindamos resultados reales</h3>
        <button className="bg-transparent hover:bg-transparent text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded-md w-25 h-25 w-[200px] my-6 mx-auto py-3">
          Contactanos
        </button>
      </div>
    </div>
  )
}
export default Home;