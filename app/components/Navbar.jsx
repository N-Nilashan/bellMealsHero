import React from 'react';

export default function CurvedNavbar() {
  return (
    <div className="relative z-50">
      {/* Main navbar */}
      <nav className="bg-white text-[#201C1B] px-6 py-4 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left side navigation */}
          <div className="flex font-semibold text-[#201C1B] items-center space-x-8">
            <button className="  rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 focus:bg-slate-800 focus:border-slate-800 cursor-pointer">

              Home
            </button>
            <button className="  rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 focus:bg-slate-800 focus:border-slate-800 cursor-pointer">
              Business
            </button>
            <button className="  rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 focus:bg-slate-800 focus:border-slate-800 cursor-pointer">
              Careers
            </button>
          </div>

          {/* Center logo */}
          <div className="flex items-center">
            <div className="bg-white text-black px-3 py-1 rounded">
              <span className="font-bold font-menbere  text-3xl">🍽️ BellMeals</span>
            </div>
          </div>

          {/* Right side navigation */}
          <div className="flex items-center text-[#201C1B] font-semibold space-x-8">
            <button className="  rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 focus:bg-slate-800 focus:border-slate-800 cursor-pointer">
              Contact
            </button>
            <button className="  rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 focus:bg-slate-800 focus:border-slate-800 cursor-pointer">
              Privacy
            </button>
            <button className="  rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 focus:bg-slate-800 focus:border-slate-800 cursor-pointer">
              Download
            </button>
          </div>
        </div>
      </nav>

      {/* Curved bottom border */}


           <svg width="100%" height="100" viewBox="0 223 1000 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="
              M0,0
              L0,250
              C167,300 360,200 530,230
              C700,260 833,300 1000,250
              L1000,0
              Z"
              fill="#ffffff"/>
          </svg>



    </div>
  );
}
