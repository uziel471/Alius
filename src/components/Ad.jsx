import React, { useState } from "react";
import homeImage from "../assets/Ad.png";

function Home(){
  const [visible, setVisible] = useState(true);
  return(
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class={`fixed top-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${!visible && 'hidden'}`}>
        <div class="relative w-full max-h-full md:pt-[8%] md:pl-[16%] pt-10">
            <div class="rounded-lg">
                <div class="p-auto min-h-screen min-w-full">
                  <img onClick={() => setVisible(false)} src={homeImage} className="md:w-[70%] md:h-[70%] h-[50%] w-full pt-20 mt-20 md:p-10 absolute mix-blend-overlay align-center" alt="Home" />
                </div>
            </div>
        </div>
    </div>
  )
}
export default Home;