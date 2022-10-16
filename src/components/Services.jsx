import React from 'react';
import Logo from '../assets/logo512.png';
import ServiceChildren from './ServiceChildren';
function Services(){
  const services = [
    {
      img: Logo,
      title: 'Diseño y Estrategias de Negocio'
    },
    {
      img: Logo,
      title: 'Litigio en comercio exterior y aduanas'
    },
    {
      img: Logo,
      title: 'Capacitación en materia de Comercio Exterior'
    },
    {
      img: Logo,
      title: 'Gestiones y consultas ante las autoridades competentes'
    },
    {
      img: Logo,
      title: 'Diseño de estrategias y vinculación con autoridades en materia de comercio exterior'
    },
  ];
  return (
    <div className="w-full bg-white py-16 px-4 justify-center items-center">
      <div className="w-full max-w-6xl mx-auto mb-[20px]">
        <h1 className="text-3xl">Services</h1>
        <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[115px]"></div>
      </div>
      <div className="max-w-[1024px] mx-auto grid md:grid-cols-3 sm:grid-cols-2 flex justify-center items-center text-xl">
        {services.map(({ img, title}) => (
          <ServiceChildren
            img={img}
            title={title}
            key={title}
          />
        ))}
      </div>
    </div>
  );
}
export default Services;