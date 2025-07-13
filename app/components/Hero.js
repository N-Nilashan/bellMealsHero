import React from 'react';

const Hero = () => {
  return (
    <section className="  -mt-[100px] relative h-screen overflow-hidden bg-[#201C1B]">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg.png"
          className="w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left side */}
        <div className="mt-[140px] ml-12">
          <div className="font-bebas text-white leading-[5.5rem] text-8xl">
            <p>FROM A VARIETY </p>
            <p>OF RESTAURENTS</p>
          </div>
          <div className="mt-[150px]">
            <div className=" p-6 rounded-xl backdrop-blur-sm w-[450px]">
              <p className="font-menbere text-white text-lg">
                FIND YOUR FAVOURITE DISH
              </p>
              <p className="text-slate-200 text-lg mt-4">
                Unlock a world of culinary delight! Download now,
                <br />
                subscribe for exclusive perks, and enjoy every bite.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex gap-8 items-center rounded-xl backdrop-blur-sm w-[400px]">
              <span className="flex">
                <button className="button2 inline-block relative overflow-hidden z-[1] text-[#090909] py-3 px-7 cursor-pointer text-[18px] rounded-[0.5em] bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-200 ease-in hover:text-white hover:border-[#009087]">
                  <span className="flex items-center gap-2">
                    <img src="/apple.svg" className="w-5 h-5" />
                    App Store
                  </span>
                </button>
              </span>
              <span className="flex">
                <button className="button2 inline-block relative overflow-hidden z-[1] text-[#090909] py-3 px-7 cursor-pointer text-[18px] rounded-[0.5em] bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-200 ease-in hover:text-white hover:border-[#009087]">
                  <span className="flex items-center gap-2">
                    <img src="/playstore.png" className="w-5 h-5" />
                    Google Play
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Burger image */}
        <div>
          <img
            src="/burger.png"
            className=" w-[800px] h-auto mt-12 max-w-none "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
