import React from 'react';

const Download = () => {
  return (
    <section className=''>
      <div className='relative w-full h-[620px] bg-no-repeat bg-cover' style={ { backgroundImage: "url('./images/download.png')" } }>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10'>
          <h1 className="text-4xl mb-5 font-bold max-w-2xl md:leading-relaxed md:text-5xl">
            Download the app now.
          </h1>
          <p className="text-xl mb-5 font-light">Available on your favorite store. Start your premium experience now</p>
          <div className='flex justify-center'>
            <button className='mx-4 border border-transparent bg-red-500 px-10 py-3 rounded-full hover:bg-transparent hover:border-white transition-all'>Playstore</button>
            <button className='mx-4 border border-white bg-transparent px-10 py-3 rounded-full hover:bg-red-500 hover:border-transparent transition-all'>Appstore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;