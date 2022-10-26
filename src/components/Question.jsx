import { BsChevronDown } from "react-icons/bs";

function Question({ question, response, color, bg }) {
  return (
    <div className={`relative w-[400px] overflow-hidden text-${color} bg-${bg}`}>
      <input type="checkbox" className={`peer absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer bg-${bg}`} />
      <div className="h-12 w-full pl-5 flex items-center">
        <h1 className="font-semibold">{question}</h1>
      </div> 
      {/* Arrow Icon */}
      <BsChevronDown className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180" size={20}/>
      {/* Content */}
      <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
        <div className="p-4">
            <p>
              {response}
            </p>
        </div>
      </div>
    </div>
  )
}

export default Question;