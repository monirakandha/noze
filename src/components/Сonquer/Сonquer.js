import React from 'react';
import Virus from '../../assets/NOZE_2.MP4'
const Сonquer = () => {
    return (
        <div>
            <div class="hero min-h-full bg-white">
  <div class="hero-content flex-col lg:flex-row">
  <video src={Virus}
    autoPlay  
    loop
    muted
    class="max-w-2xl " // Is supposed to shrink or expand the video the length of the parent div
  >Your browser does not support the video tag.</video>
    
    <div>
    <h1 class="text-5xl font-medium">Сonquer the Virus</h1>
      <p class="py-6 pt-6">Noze tracks the airborne markers (VOCs) associated with the Coronavirus family. Our AI uses that information to deliver a real-time risk index that will not only tell you if your space is prone to spreading the virus, but whether there’s a chance the virus is actually in the air.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Сonquer;