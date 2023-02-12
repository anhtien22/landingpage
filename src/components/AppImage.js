import React from 'react';

const AppImage = () => {
  return (
    <section className="relative">
      <div
        class="
          absolute
          top-1/2
          left-1/2
          transform
          -translate-x-2/3 -translate-y-1/4
        "
      >
        <img
          src="./images/appimage.png"
          alt="phone app screens"
          class="max-w-none w-screen pl-20 md:w-auto"
        />
      </div>
      {/* <div className="">
          <img className=' absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/4 z-10 
         max-w-none w-screen pl-20 md:w-auto' src="./images/appimage-1.png" alt="" />
        </div> */}
      {/* <img className='max-w-none w-screen pl-20 md:w-auto' src="./images/appimage-2.png" alt="" /> */ }

      {/* <div className="">
          <img className=" absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/4 -z-11
          max-w-none w-screen pl-20 md:w-auto
           " src="./images/appimage-2.png" alt="" />"
        </div> */}
      {/* w-[285px] h-[531px]  pl-20 ml-14 mt-16 md:max-w-none md:ml-[470px] md:mt-28 */ }

    </section>
  );
};

export default AppImage;