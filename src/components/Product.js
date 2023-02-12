import React from 'react';

const Product = () => {
  return (
    <section className='pt-96 mt-28 sm:pt-[250px] md:pt-[640px] md:mt-0 lg:mt-0 '>
      <div className="container mx-auto px-4">
        <hr className="w-4/5 mx-auto h-0.5 bg-gray-300 md:w-2/5" />
        <h2 className="text-center text-4xl font-semibold py-10">How the app works</h2>
        <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
          <div className="text-center mb-10">
            <img src="./images/app-1.png" alt="" />
          </div>
          <div className="text-center md:text-left">
            <span className="text-red-500 font-semibold text-2xl">Create account</span>
            <h2 className="text-4xl text-black-900 font-bold max-w-md leading-relaxed py-5">Create/login to an existing account to get started</h2>
            <p className="text-xl text-gray-500 font-light max-w-sm max-auto md:mx-0">An account is created with your email
              and a desired password</p>
          </div>
        </div>

        <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
          <div className="text-center mb-10 order-1 md:order-2">
            <img src="./images/app-2.png" alt="" />
          </div>
          <div className="text-center md:text-left order-2 md:order-1">
            <span className="text-red-500 font-semibold text-2xl">Explore varieties</span>
            <h2 className="text-4xl text-black-900 font-bold max-w-md leading-relaxed py-5">Shop for your favorites meal as e dey hot.</h2>
            <p className="text-xl text-gray-500 font-light max-w-sm max-auto md:mx-0">Shop for your favorite meals or drinks and enjoy while doing it.</p>
          </div>
        </div>

        <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
          <div className="text-center mb-10">
            <img src="./images/app-3.png" alt="" />
          </div>
          <div className="text-center md:text-left">
            <span className="text-red-500 font-semibold text-2xl">Checkout</span>
            <h2 className="text-4xl text-black-900 font-bold max-w-md leading-relaxed py-5">When you done check out
              and get it delivered.</h2>
            <p className="text-xl text-gray-500 font-light max-w-sm max-auto md:mx-0">When you done check out and get it
              delivered with ease.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Product;