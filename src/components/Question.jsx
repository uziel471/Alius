import { BsChevronDown } from "react-icons/bs";

function Question({ question, response, color, bg, options }) {
  return (
    <div className={`relative w-full overflow-hidden text-${color} bg-${bg}`}>
      <input type="checkbox" className={`peer absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer bg-[#0b233f] z-1`} />
      <div className="h-12 w-full pl-5 flex items-center">
        <h1 className="font-semibold" >{question}</h1>
      </div> 
      {/* Arrow Icon */}
      <BsChevronDown className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180" size={20}/>
      {/* Content */}
      <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80">
        <div className="p-4">
            <p>
              {response}
            </p>
            {
              (options.length && (
                <ul class="fa-ul">
                  {
                    options.map((option) => <li>• {option}</li>)
                  }
                </ul>
              )) || null
            }
        </div>
      </div>
    </div>
  )
}

export default Question;