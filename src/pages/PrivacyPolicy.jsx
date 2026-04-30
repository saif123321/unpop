import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartModal from "../components/cart-modal";
import Footer from "../components/Footer";

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

      {/* Privacy Policy Content Section */}
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
            Privacy Policy
          </h1>

          <div className='space-y-8 font-montserrat' style={{ color: "#FF1275" }}>
            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                1. Introduction
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                UNPOP! ("we", "us", "our", or "Company") operates the drinkunpop.com website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                2. Information Collection and Use
              </h2>
              <p className='text-sm md:text-base leading-relaxed mb-2'>
                We collect several different types of information for various purposes to help us provide, maintain, and improve our services:
              </p>
              <ul className='list-disc list-inside text-sm md:text-base leading-relaxed'>
                <li><strong>Personal Data:</strong> Name, email address, phone number, business information</li>
                <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages</li>
                <li><strong>Cookies:</strong> Small data files for tracking user preferences</li>
              </ul>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                3. Use of Data
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                UNPOP! uses the collected data for various purposes:
              </p>
              <ul className='list-disc list-inside text-sm md:text-base leading-relaxed mt-2'>
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To contact you regarding business opportunities and partnerships</li>
              </ul>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                4. Security of Data
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                5. Your Rights
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                You have the right to request access, correction, or deletion of your personal data. You also have the right to opt-out of receiving promotional communications from us at any time by clicking the unsubscribe link in our emails.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                6. Contact Us
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                If you have any questions about this Privacy Policy, please contact us at hello@drinkunpop.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Cart Button */}
       <button
              onClick={() => setIsCartOpen(true)}
              className='p-3 rounded-full transition cursor-pointer'
              style={{
                border: '2px solid #FF1275',
                backgroundColor: '#410627',
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                zIndex: 10000
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF1275E5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>

            <Footer onCartClick={() => setIsCartOpen(true)} />


      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
