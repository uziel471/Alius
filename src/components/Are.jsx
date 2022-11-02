import homeImage from "../assets/homeImage.jpeg";
import Divider from "./Divider";

function Are(){
  return (
    <div className="w-full text-white bg-gradient-to-tr from-[#000000] to-[#0b233f] h-[600px] z-1">
      <div className="w-full max-w-6xl mb-[20px]">
        <img src={homeImage} className="w-full h-[600px] object-cover absolute mix-blend-overlay" alt="Home Page" />
      </div>
      <div className="max-w-6xl flex flex-col justify-center items-center h-[500px] w-full">
        <div className="flex flex-col justify-start md:w-[45%] sm:w-[10%]">
          <h1 className="text-3xl">Somos</h1>
          <Divider styles="w-[91px] mb-[24px]" />
        </div>
        <p className="max-w-[500px] md:text-xl sm:text-xs">
          Empresa de consultoria de comercio exterior, especializados en empresas, con el objectivo de elevar la competitividad aduanera de nuestros clientes por medio de nuestra metodologia y amplia experiencia.
        </p>
      </div>
    </div>
  )
}
export default Are;