import React from "react";

function ServiceChildren({img, title}) {
  return (
    <div className="mb-[8px]">
      <img src={img} alt={title} className='w-[140px] h-[140px] br-[50px] p-[10px] rounded-full border-2 mb-4'/>
      <h4>{title}</h4>
    </div>
  );
}
export default ServiceChildren;