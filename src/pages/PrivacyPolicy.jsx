import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartModal from "../components/cart-modal";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div
      className='relative min-h-screen overflow-x-hidden'
      style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)" }}
    >
      {/* Header */}
      <header
        className='absolute top-0 left-0 right-0 grid grid-cols-3 items-center px-6 md:px-16 py-4 md:py-6 text-sm md:text-xs tracking-widest font-montserrat uppercase'
        style={{ color: "#FF1275", zIndex: 111111 }}
      >
        {/* Left – OUR STORY */}
        <a
          href='/'
          className='hover:opacity-70 transition-opacity duration-300 cursor-pointer justify-self-start text-[0.65rem] sm:text-xs md:text-sm lg:text-base'
          style={{ color: "#FF1275" }}
        >
          Home
        </a>

        {/* Center – Logo */}
        <div className='flex justify-center'>
          <img
            src='/images/logo.png'
            alt='SUN POP! Logo'
            className='w-8 sm:w-10 md:w-12 lg:w-16 h-auto drop-shadow-lg cursor-pointer'
            onClick={() => navigate('/')}
          />
        </div>

        {/* Right – CONTACT + BUY NOW */}
        <div className='flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-self-end'>
          <a
            href='/contact-us'
            className='hover:opacity-70 transition-opacity duration-300 cursor-pointer text-[0.65rem] sm:text-xs md:text-sm lg:text-base'
            style={{ color: "#FF1275" }}
          >
            Contact Us
          </a>
          <button
            className='px-2 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full text-[0.6rem] sm:text-xs md:text-sm font-semibold 
            bg-[#ff127514] hover:bg-[#FF1275] hover:text-black transition-all duration-300 font-montserrat cursor-pointer whitespace-nowrap'
            style={{
              border: "1px solid #FF1275",
            }}
            onClick={() => setIsCartOpen(true)}
          >
            Buy Now
          </button>
        </div>
      </header>

      {/* Coming Soon Section */}
      <section className='relative min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-12 sm:py-16 md:py-20'>
        <div className='relative w-full flex items-center justify-center'>
          <h1
            className='text-center font-nineties-italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl'
            style={{
              color: "#FF1275E5",
              lineHeight: "0.8",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              fontSize: "clamp(60px, 20vw, 250px)",
            }}
          >
            Coming Soon
          </h1>
        </div>
      </section>

      {/* Fixed Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className='p-3 rounded-full hover:opacity-70 transition cursor-pointer'
        style={{
          border: '2px solid #FF1275',
          backgroundColor: 'transparent',
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 10000,
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#FF1275E5'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='9' cy='21' r='1' />
          <circle cx='20' cy='21' r='1' />
          <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
        </svg>
      </button>

      {/* Footer Section */}
      <footer
        id='contact'
        className='relative w-full py-0 overflow-hidden z-[100]'
        style={{ backgroundColor: "#350622" }}
      >
        {/* Logo at Top */}
        <div className='w-full px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 md:pt-24'>
          <img
            src='/images/logo.png'
            alt='UNPOP! Logo'
            className='w-16 sm:w-20 md:w-24 h-auto drop-shadow-lg'
          />
        </div>

        {/* 5 Column Grid */}
        <div className='w-full px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-8'>
            {/* Column 1 - UNPOP! Links */}
            <div className='flex flex-col gap-3 sm:gap-4'>
              <p
                style={{
                  color: "#FF1275",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
                className='font-montserrat text-xs sm:text-sm'
              >
                UNPOP!
              </p>
              <button
                onClick={() => setIsCartOpen(true)}
                style={{
                  color: "#FF1275",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                className='font-montserrat text-justify hover:opacity-70 transition text-sm sm:text-base'
              >
                Buy Unpop!
              </button>
              <a
                href='/#our-story'
                style={{
                  color: "#FF1275",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-montserrat hover:opacity-70 transition text-sm sm:text-base'
              >
                Our Story
              </a>
            </div>

            {/* Column 2 - SUPPORT Links */}
            <div className='flex flex-col gap-3 sm:gap-4'>
              <p
                style={{
                  color: "#FF1275",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
                className='font-montserrat text-xs sm:text-sm'
              >
                SUPPORT
              </p>
              <a
                href='/contact-us'
                style={{
                  color: "#FF1275",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-montserrat hover:opacity-70 transition text-sm sm:text-base'
              >
                Contact Us
              </a>
              <a
                href='/#faqs-section'
                style={{
                  color: "#FF1275",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-montserrat hover:opacity-70 transition text-sm sm:text-base'
              >
                FAQ
              </a>
            </div>

            {/* Column 3 - MORE Links */}
            <div className='flex flex-col gap-3 sm:gap-4'>
              <p
                style={{
                  color: "#FF1275",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
                className='font-montserrat text-xs sm:text-sm'
              >
                MORE
              </p>
              <a
                href='/terms-of-use'
                style={{
                  color: "#FF1275",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-montserrat hover:opacity-70 transition text-sm sm:text-base'
              >
                Terms of use
              </a>
              <a
                href='/sales-policy'
                style={{
                  color: "#FF1275",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-montserrat hover:opacity-70 transition text-sm sm:text-base'
              >
                Sales Policy
              </a>
              <a
                href='/privacy-policy'
                style={{
                  color: "#FF1275",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-montserrat hover:opacity-70 transition text-sm sm:text-base'
              >
                Privacy Policy
              </a>
            </div>

            {/* Column 4 - KEEP IN TOUCH */}
            <div className='flex flex-col gap-3 sm:gap-4 lg:col-span-1'>
              <p
                style={{
                  color: "#FF1275",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
                className='font-montserrat text-xs sm:text-sm'
              >
                KEEP IN TOUCH!
              </p>
              <div className='flex flex-col gap-2 w-full'>
                <input
                  type='email'
                  placeholder='Email address'
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #FF1275",
                    color: "#FF1275",
                    borderRadius: "20px",
                    cursor: "pointer",
                    letterSpacing: "0.03em",
                  }}
                  className='font-montserrat px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm w-full'
                />
                <button
                  style={{
                    border: "1px solid #FF1275",
                    borderRadius: "20px",
                    fontWeight: "700",
                    cursor: "pointer",
                    letterSpacing: "0.03em",
                  }}
                  className='font-montserrat bg-[#ff127514] hover:bg-[#FF1275] text-[#FF1275] 
                hover:text-black transition px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm whitespace-nowrap w-full'
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Column 5 - Email and Social */}
            <div className='flex flex-col gap-3 sm:gap-4 lg:col-span-1'>
              <p
                style={{
                  color: "#FF1275",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                }}
                className='font-montserrat text-xs sm:text-sm'
              >
                hello@drinkunpop.com
              </p>

              {/* Social Icons */}
              <div className='flex gap-3 sm:gap-4'>
                {/* Instagram */}
                <a
                  href='#'
                  style={{
                    width: "28px",
                    height: "28px",
                    minWidth: "28px",
                    borderRadius: "50%",
                    border: "2px solid #FF1275",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                  className='hover:opacity-70 transition sm:w-8 sm:h-8'
                >
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      x='2'
                      y='2'
                      width='20'
                      height='20'
                      rx='5'
                      stroke='#FF1275'
                      strokeWidth='2'
                    />
                    <circle cx='12' cy='12' r='4' stroke='#FF1275' strokeWidth='2' />
                    <circle cx='18.5' cy='5.5' r='1' fill='#FF1275' />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href='#'
                  style={{
                    width: "28px",
                    height: "28px",
                    minWidth: "28px",
                    borderRadius: "50%",
                    border: "2px solid #FF1275",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                  className='hover:opacity-70 transition sm:w-8 sm:h-8'
                >
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 2C5.134 2 2 5.134 2 9v6c0 3.866 3.134 7 7 7h6c3.866 0 7-3.134 7-7V9c0-3.866-3.134-7-7-7H9z'
                      stroke='#FF1275'
                      strokeWidth='2'
                    />
                    <path
                      d='M9.5 6v12M14.5 8v8'
                      stroke='#FF1275'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
