import React from "react";

function ServiceChildren({img, title}) {
  return (
    <div className="mb-[40px] grid justify-items-center">
      <img src={img} alt={title} className='w-[140px] h-[140px] br-[50px] p-[10px] rounded-full border-2 mb-4 border-cyan-300'/>
      <h4 className="w-[300px]">{title}</h4>
    </div>
  );
}
export default ServiceChildren;