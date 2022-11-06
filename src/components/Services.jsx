import React from 'react';
import Logo from '../assets/logo512.png';
import ServiceChildren from './ServiceChildren';
import Divider from './Divider';

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
  ]; // skew-y-3
  return (
    <div>
      <a href="#" name="Servicios" className="block"></a>
      <div className="w-full bg-gray-200 py-16">
        <div className="m-8">
          <div className="w-full max-w-6xl mx-auto mb-[40px]">
            <h1 className="text-3xl">Services</h1>
            <Divider styles="w-[115px]" />
          </div>
          <div className="w-full grid justify-items-center md:grid-cols-3 sm:grid-cols-2 text-xl">
            {services.map(({ img, title}) => (
              <ServiceChildren
                img={img}
                title={title}
                key={title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;