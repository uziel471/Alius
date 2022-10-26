import homeImage from "../assets/homeImage.jpeg";
import ContactForm from "./ContactForm";

function ContactUs(){
  return(
    <div className="w-full">
      <div className="flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-300">
          <div className="max-w-6xl mt-[20px]">
            <ContactForm />
          </div>
        </div>
        <div className="text-white bg-gradient-to-tr from-[#000000] to-[#0b233f] z-1">
          <div className="w-full mx auto text-center flex flex-col justify-center bg-cover bg-center">
            <img src={homeImage} className="w-full h-full object mix-blend-overlay" alt="Home Page" />
            <h1 className="text-3xl">Oficinas</h1>
            <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[115px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;