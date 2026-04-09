import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartModal from "../components/cart-modal";

export default function TermsOfUse() {
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

      {/* Terms of Use Content Section */}
      <section className='relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-20 sm:py-24 md:py-32'>
        <div className='relative w-full max-w-4xl mx-auto'>
          <h1
            className='font-nineties-italic text-5xl sm:text-6xl md:text-7xl mb-12'
            style={{
              color: "#FF1275",
              lineHeight: "1",
              fontWeight: "400",
            }}
          >
            Terms of Use
          </h1>

          <div className='space-y-8 font-montserrat' style={{ color: "#FF1275" }}>
            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                1. Acceptance of Terms
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. UNPOP! reserves the right to make changes to these terms at any time without notice.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                2. Use License
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                Permission is granted to temporarily download one copy of the materials (information or software) on UNPOP!'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className='list-disc list-inside text-sm md:text-base leading-relaxed mt-2'>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                3. Disclaimer
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                The materials on UNPOP!'s website are provided on an 'as is' basis. UNPOP! makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                4. Limitations
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                In no event shall UNPOP! or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on UNPOP!'s website.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                5. Accuracy of Materials
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                The materials appearing on UNPOP!'s website could include technical, typographical, or photographic errors. UNPOP! does not warrant that any of the materials on our website are accurate, complete, or current. UNPOP! may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                6. Contact Information
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                If you have any questions about these Terms of Use, please contact us at hello@drinkunpop.com
              </p>
            </div>
          </div>
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
                    viewBox='0 0 22 22'
                    fill='#FF1275'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_18_55)'>
                      <path
                        d='M11.1909 0.0178701C12.3614 0 13.523 0.00893503 14.6845 0C14.756 1.36706 15.2474 2.76092 16.2481 3.72591C17.2489 4.71769 18.6606 5.17338 20.0366 5.32528V8.92609C18.7499 8.88142 17.4544 8.61337 16.2839 8.0594C15.7746 7.82708 15.301 7.53223 14.8364 7.22844C14.8275 9.83747 14.8453 12.4465 14.8185 15.0466C14.747 16.2975 14.336 17.5395 13.6123 18.567C12.4418 20.2825 10.4136 21.3994 8.3317 21.4351C7.05399 21.5066 5.77628 21.1581 4.68621 20.5148C2.88133 19.4516 1.61256 17.5037 1.42493 15.4129C1.40706 14.9662 1.39812 14.5194 1.41599 14.0816C1.57682 12.3839 2.41671 10.7578 3.72123 9.64983C5.20444 8.36319 7.27737 7.74667 9.21627 8.113C9.23414 9.43539 9.18053 10.7578 9.18053 12.0802C8.29596 11.7942 7.2595 11.8747 6.48215 12.4108C5.91924 12.7771 5.49036 13.34 5.26699 13.9744C5.07935 14.4301 5.13296 14.9304 5.1419 15.4129C5.35634 16.8783 6.76807 18.1113 8.26916 17.9773C9.26988 17.9683 10.2259 17.3876 10.7442 16.5387C10.9139 16.2439 11.1016 15.9401 11.1105 15.5916C11.1998 13.9923 11.1641 12.4018 11.173 10.8024C11.182 7.20163 11.1641 3.60975 11.1909 0.0178701Z'
                        fill='#FF1275'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_18_55'>
                        <rect width='21.4441' height='21.4441' fill='#FF1275' />
                      </clipPath>
                    </defs>
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
