import React from "react";
import homeImage from "../assets/information.png";

function Home(){
  return(
    <div className="w-full h-scree z-1">
      <div className="w-full h-screen mx auto text-center flex flex-col justify-center bg-cover bg-center mt-[90px]">
        <img src={homeImage} className="w-full h-full object-cover absolute mix-blend-overlay p-2" alt="Home" />
      </div>
    </div>
  )
}
export default Home;