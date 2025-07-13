'use client'
import React, { useState } from 'react';

export default function CurvedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Main navbar */}
      <nav className="bg-white text-[#201C1B] px-4 sm:px-6 py-4 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#090909] focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Left side navigation - hidden on mobile */}
          <div className="hidden md:flex font-semibold text-[#201C1B] items-center space-x-4 lg:space-x-8">
            <button className="button2 inline-block relative overflow-hidden z-[1] text-[#090909] py-2 px-3 lg:py-2 lg:px-5 cursor-pointer text-sm lg:text-[16px] rounded-full bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-200 ease-in hover:text-white hover:border-[#009087]">
              Home
            </button>
            <button className="button2 inline-block relative overflow-hidden z-[1] text-[#090909] py-2 px-3 lg:py-3 lg:px-7 cursor-pointer text-sm lg:text-[18px] bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-200 ease-in hover:text-white hover:border-[#009087]">
              Business
            </button>
            <button className="button2 inline-block relative overflow-hidden z-[1] text-[#090909] py-2 px-3 lg:py-3 lg:px-7 cursor-pointer text-sm lg:text-[18px] bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-200 ease-in hover:text-white hover:border-[#009087]">
              Careers
            </button>
          </div>

          {/* Center logo */}
          <div className="flex items-center mx-auto md:mx-0">
            <div className="bg-white text-black px-2 sm:px-3 py-1 rounded">
              <span className="font-bold font-menbere text-2xl sm:text-3xl">🍽️ BellMeals</span>
            </div>
          </div>

          {/* Right side navigation - hidden on mobile */}
          <div className="hidden md:flex items-center text-[#201C1B] font-semibold space-x-4 lg:space-x-8">
            <button className="button2 inline-block relative overflow-hidden z-[1] text-[#090909] py-2 px-3 lg:py-3 lg:px-7 cursor-pointer text-sm lg:text-[18px] bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-200 ease-in hover:text-white hover:border-[#009087]">
              Contact
            </button>
            <button className="button2 inline-block relative overflow-hidden z-[1] text-[#090909] py-2 px-3 lg:py-3 lg:px-7 cursor-pointer text-sm lg:text-[18px] bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-200 ease-in hover:text-white hover:border-[#009087]">
              Privacy
            </button>
            <button className="button2 inline-block relative overflow-hidden z-[1] text-[#090909] py-2 px-3 lg:py-3 lg:px-7 cursor-pointer text-sm lg:text-[18px] bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-200 ease-in hover:text-white hover:border-[#009087]">
              Download
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 mt-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              <button className="button2 w-full text-left py-2 px-4 rounded bg-[#e8e8e8] hover:bg-[#009087] hover:text-white transition-all duration-200">
                Home
              </button>
              <button className="button2 w-full text-left py-2 px-4 rounded bg-[#e8e8e8] hover:bg-[#009087] hover:text-white transition-all duration-200">
                Business
              </button>
              <button className="button2 w-full text-left py-2 px-4 rounded bg-[#e8e8e8] hover:bg-[#009087] hover:text-white transition-all duration-200">
                Careers
              </button>
              <button className="button2 w-full text-left py-2 px-4 rounded bg-[#e8e8e8] hover:bg-[#009087] hover:text-white transition-all duration-200">
                Contact
              </button>
              <button className="button2 w-full text-left py-2 px-4 rounded bg-[#e8e8e8] hover:bg-[#009087] hover:text-white transition-all duration-200">
                Privacy
              </button>
              <button className="button2 w-full text-left py-2 px-4 rounded bg-[#e8e8e8] hover:bg-[#009087] hover:text-white transition-all duration-200">
                Download
              </button>
            </div>
          </div>
        )}
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
