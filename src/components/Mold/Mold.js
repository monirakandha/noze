import React from 'react';
import Moldv from '../../assets/NOZE_4.MP4';

const Mold = () => {
    return (
        <div>
          <div class="hero min-h-full bg-white">
  <div class="hero-content flex-col lg:flex-row-reverse">
  <video src={Moldv}
    autoPlay  
    loop
    muted
    class="max-w-2xl " // Is supposed to shrink or expand the video the length of the parent div
  >Your browser does not support the video tag.</video>
    <div>
    <h1 class="text-5xl font-medium">Break the Mold</h1>
      <p class="py-6 pt-6">NOZE monitors the air for spores and other markers associated with the most common types of indoor mold. Our mold index will tell you if it's likely that there’s mold around and whether your space is in danger of being a breeding ground.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Mold;