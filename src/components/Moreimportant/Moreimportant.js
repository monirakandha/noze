import React from 'react';
import Important from '../../assets/NOZE_8.MP4'
const Moreimportant = () => {
    return (
        <div>
        <div>
            <div class="hero min-h-full bg-white">
            <div class="hero-content text-center">
                <div class="max-w-1xl">
                <h1 class="text-5xl font-medium">What's more important, form or function?</h1>
                <p class="py-6">We didn’t think it was fair to have to choose.</p>
                </div>
            </div>
            </div>
        </div>
        <div class="bg-white">
        <video src={Important}
    autoPlay  
    loop
    muted
    class="max-w-full " // Is supposed to shrink or expand the video the length of the parent div
  >Your browser does not support the video tag.</video>
        </div>
        </div>
    );
};

export default Moreimportant;