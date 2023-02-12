import React from 'react';

const Banner = () => {
  return (
    <section>
      <div className="w-full bg-no-repeat bg-cover relative h-[620px]" style={ { backgroundImage: "url('./images/banner.png')" } }>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
          <p className="text-2xl mb-5">Food app</p>
          <h1 className="text-4xl mb-5 font-bold max-w-2xl lg:leading-relaxed md:text-5xl">Why stay hungry when you can order form Bella Onojie
          </h1>
          <p className="text-xl mb-5 font-bold">Download the bella onoje’s food app now on</p>
          <div className='flex justify-center'>
            <button className='mx-4 border border-transparent bg-red-500 px-10 py-3 rounded-full hover:bg-transparent hover:border-white transition-all'>Playstore</button>
            <button className='mx-4 border border-white bg-transparent px-10 py-3 rounded-full hover:bg-red-500 hover:border-transparent transition-all'>Appstore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;