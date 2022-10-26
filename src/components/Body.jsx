import Logo from "../assets/LogoBody.png";

function Body(){
  return(
    <div className="h-auto justify-center items-center bg-[#ffffff]">
      <div>
        <div className="flex justify-center items-center  mb-0 mt-10">
          <div className="flex items-center">
            <img src={Logo} className="mr-3" alt="Logo"  width={500} height={500} />
          </div>
        </div>
        <div className="flex justify-center items-center mb-10">
          <span className="self-center text-2xl text-center ">Más de 10 años de experiencia aumentando la competitividad aduanera de nuestros clientes</span>
        </div>
      </div>
      {/* Section 1 */}
      
      {/* Section 2 */}
    </div>
  )
}

export default Body;