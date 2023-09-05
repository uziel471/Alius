import React, { useState } from "react";
import homeImage from "../assets/Ad.png";

function Home(){
  const [visible, setVisible] = useState(true);
  return(
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class={`fixed top-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${!visible && 'hidden'}`}>
        <div class="relative w-full max-h-full">
            <div class="relative rounded-lg">
                <div class="p-auto min-h-screen min-w-full">
                  <img onClick={() => setVisible(false)} src={homeImage} className="object-fill w-full h-full p-20 absolute mix-blend-overlay" alt="Home" />
                </div>
            </div>
        </div>
    </div>
  )
}
export default Home;