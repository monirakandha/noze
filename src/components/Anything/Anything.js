import React from 'react';
import Vdiro from '../../assets/NOZE_9.MP4';
const Anything = () => {
    return (
        <div>
            <div class="grid grid-cols-2 gap-4">
  <div className='pl-12 pt-36'>
  <h1 class="text-5xl font-medium">Anything but
ordinary.</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
  </div>
  <video src={Vdiro}
    autoPlay  
    loop
    muted
    className='flex-1 object-cover' // Is supposed to shrink or expand the video the length of the parent div
  >Your browser does not support the video tag.</video>
  <div>

  </div>
</div>

        </div>
    );
};

export default Anything;