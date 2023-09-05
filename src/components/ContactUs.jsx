import homeImage from "../assets/homeImage.jpeg";
import ContactForm from "./ContactForm";
import Offices from "./Offices";
function ContactUs(){
  return(
    <div className="w-full">
      <a href="#" name="Contacto" className="block"></a>
      <div className="flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-300">
          <div className="max-w-6xl mt-[20px]">
            <ContactForm />
          </div>
        </div>
        <div className="text-white bg-gradient-to-tr from-[#000000] to-[#0b233f] z-1">
        <div className="w-full max-w-6xl">
        <img src={homeImage} className="bg-left-top md:w-[50%] md:h-[600px] w-full h-[500px] object-cover absolute mix-blend-overlay" alt="Home Page" />
        </div>
        <Offices />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;