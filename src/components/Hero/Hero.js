import React from 'react';
import Bghero from '../../assets/NOZE-Hero-1.png';

const Hero = () => {
    return (
        <div>
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={Bghero} class="max-w-md rounded-lg shadow-2xl" />
    <div class="mr-40 ...">
      <h1 class="text-5xl font-medium ">There’s something
new in the air</h1>
      <p class="py-6">NOZE is an AI powered air quality monitor that works to keep you safe. Breathe easy.</p>
      <button class="btn btn-primary">Join the waitlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;