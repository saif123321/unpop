import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Scroll3DSection from "../components/scroll-3d-section";
import CartModal from "../components/cart-modal";

export default function Home() {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const faqItems = [
    {
      question: "different how?",
      answer:
        "big soda uses artificial everything. functional foods use questionnaire science. we use real ingredients to make something that tastes like what you wanted all along.",
    },
    {
      question: "what's in it?",
      answer:
        "natural fruit sweetener, real cola flavor, carbonated water, and ingredients you can actually pronounce. full list in the section above.",
    },
    {
      question: "does it taste exactly like coke?",
      answer:
        "no. it tastes like what cola would be if it started with real ingredients instead of 40 artificial ones. the flavor is recognizably cola, but cleaner, less chemical finish, more natural sweetness. most people prefer it. some need a can or two to adjust.",
    },
    {
      question: "i'm used to diet soda, will i like this?",
      answer:
        "if you love aspartame zero calories, unpop isn't that. if you tolerate diet colas because regular soda makes you crash, try unpop. it tastes more like traditional cola than diet sodas, while making you crash less.",
    },
    {
      question: "does it have caffeine?",
      answer:
        "it does. roughly the same amount you'd find in regular cola. plan accordingly if you're watching your caffeine intake.",
    },
    {
      question: "is it good for me?",
      answer:
        "it's better than what you're drinking now. also, we use dates specifically because they don't spike blood sugar or cause sugar cravings.",
    },
    {
      question: "will this make me bloated?",
      answer:
        "unlikely. we use natural fruit sweetener instead of loading it with prebiotics or fiber that can upset your stomach. just carbonated cola made with real ingredients.",
    },
    {
      question: "sugar crash?",
      answer:
        "not with natural fruit sweetener. your blood sugar stays steady. your afternoon stays productive.",
    },
    {
      question: "shipping speed?",
      answer:
        "we ship within 24 hours and you'll have it within 3 business days. could be faster. rarely slower.",
    },
    {
      question: "subscription flexibility?",
      answer:
        "pause, skip, change frequency, or cancel anytime. we built it to be easy because we're not trying to trap you.",
    },
  ];

  return (
    <div
      className='relative min-h-screen overflow-x-hidden'
      style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)"}}>
      <Scroll3DSection />

      {/* Header */}
      <header
        className='absolute top-0 left-0 right-0  grid grid-cols-3 items-center px-6 md:px-16 py-4 md:py-6 text-sm md:text-xs tracking-widest font-montserrat uppercase'
        style={{ color: "#FF1275", zIndex: 111111 }}
      >
        {/* Left – OUR STORY */}
        <a
          href='#our-story'
          className='hover:opacity-70 transition-opacity duration-300 cursor-pointer justify-self-start text-[0.65rem] sm:text-xs md:text-sm lg:text-base'
          style={{ color: "#FF1275" }}
        >
          Our Story
        </a>

        {/* Center – Logo */}
        <div className='flex justify-center'>
          <img
            src='/images/logo.png'
            alt='SUN POP! Logo'
            className='w-8 sm:w-10 md:w-12 lg:w-16 h-auto drop-shadow-lg'
          />
        </div>

        {/* Right – CONTACT + BUY NOW */}
        <div className='flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-self-end'>
          <a
            href='#contact'
            className='hover:opacity-70 transition-opacity duration-300 cursor-pointer text-[0.65rem] sm:text-xs md:text-sm lg:text-base'
            style={{ color: "#FF1275" }}
          >
            Contact Us
          </a>
          <button
            className='px-2 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full text-[0.6rem] sm:text-xs md:text-sm font-semibold hover:bg-[#FF1275] hover:text-white transition-all duration-300 font-montserrat cursor-pointer whitespace-nowrap'
            style={{
              border: "1px solid #FF1275",
              backgroundColor: "transparent",
              color: "#FF1275",
            }}
            onClick={() => setIsCartOpen(true)}
          >
            Buy Now
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <section className='relative min-h-screen md:min-h-[calc(100vh-80px)] flex items-center overflow-visible px-4 sm:px-8 md:px-16 lg:px-32 py-12 sm:py-16 md:py-20 mb-10 md:mb-20'>
        {/* Centered Content Container */}
        <div className='relative w-full'>
          {/* Heading and Can Container */}
          <div className='relative flex items-center justify-center min-h-64 sm:min-h-72 md:min-h-96'>
            {/* SODA UNJUNKED Heading */}
            <h1
              className='text-center font-montserrat text-7xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'
              style={{
                color: "#FF1275E5",
                lineHeight: "0.8",
                fontWeight: "400",
                letterSpacing: "-0.02em",
                zIndex: "10",
                position: "relative",
                fontSize: "clamp(100px, 30vw, 250px)",
              }}
            >
              SODA
              <br />
              <span style={{ fontSize: "clamp(65px, 15.5vw, 180px)" }}>UNJUNKED</span>
            </h1>

            {/* Can with POP! overlay - positioned absolutely over the heading */}
            {/* <div className="absolute left-1/2 top-1/1 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="relative w-[1500px] h-[1200px] flex items-center justify-center">
                <img
                  src="/images/soda-can.png"
                  alt="Soda Can"
                  className="w-full h-full object-contain"
                />
              </div>
            </div> */}
          </div>

          {/* Product Description and CTA */}
          <div className='mt-8 sm:mt-12 md:mt-24 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8'>
            <div>
              <div
                className='font-montserrat tracking-wide uppercase mb-4'
                style={{ color: "#FF1275" }}
              >
                <p className='text-sm md:text-base'>rich, crafted cola.</p>
                <p className='text-sm md:text-base'>
                  sweetened with organic dates
                </p>
                <p>nothing artificial.</p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className='px-6 sm:px-8 py-2 sm:py-3 rounded-full text-[0.7rem] sm:text-xs md:text-sm font-semibold hover:opacity-70 transition uppercase tracking-widest font-montserrat whitespace-nowrap cursor-pointer'
                style={{
                  border: `1px solid #FF1275`,
                  backgroundColor: "transparent",
                  color: "#FF1275",
                  position: "relative",
                  zIndex: 10000
                }}
              >
                Buy now
              </button>
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className='ml-8 p-3 rounded-full hover:opacity-70 transition cursor-pointer' 
              style={{ 
                border: '2px solid #FF1275', 
                backgroundColor: 'transparent',
                position: "relative",
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
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className='my-32 py-32'></section>
      {/* Sugar Facts Section */}
      <section className='relative py-10 md:py-20 flex items-center overflow-visible px-4 md:px-16 lg:px-32'>
        <div className='relative w-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-16'>
          <div className='w-full lg:max-w-xl'>
             <h2
                className='font-nineties-italic mb-4 md:mb-8 italic text-center lg:text-left text-9xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
                style={{
                  color: "#FF1275",
                  lineHeight: "1.1",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                }}
              >
                16g of sugar
                <br />
                from dates.
              </h2>
            <div className='text-center lg:text-left'>
              {/* Heading with Nineties Font */}
             

              {/* Benefits Text */}
              <div
                className='space-y-1 md:space-y-2 mb-4 md:mb-8 mt-6 md:mt-32 font-montserrat tracking-widest text-xs md:text-base lg:text-lg'
                style={{ color: "#FF1275" }}
              >
                <p>LIGHT ON THE BODY,</p>
                <p>EASY ON THE MIND,</p>
                <p>FREE FROM THE CRASH.</p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className='px-4 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:opacity-70 transition uppercase tracking-widest font-montserrat cursor-pointer'
                style={{
                  border: `2px solid #FF1275`,
                  backgroundColor: "#ff127512",
                  color: "#FF1275",
                  position: "relative",
                  zIndex: 10000
                }}
              >
                BUY a 12 PACK TODAY NOW
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className='w-full lg:w-auto mt-6 lg:mt-32 flex justify-end'>
            <img
              src='/images/hero1.png'
              alt='Product'
              className='w-3/4 sm:w-2/3 md:w-[80%] lg:w-[65%] object-contain'
            />
          </div>
        </div>
      </section>
      <section className='my-32 py-32'></section>
      {/* Our Story Section */}
      <section
        className='relative py-20 flex items-center overflow-visible px-16 lg:px-32'
      >
        <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center '>
          {/* Left Content */}
          <div className='text-left'>
            {/* Heading with Aloevera Font */}
            <h2
                className='font-nineties-italic mb-4 md:mb-8 italic text-center lg:text-left'
                style={{
                  color: "#FF1275",
                  lineHeight: "1.2",
                  fontStyle: "italic",
                  fontSize: "clamp(4.5rem, 6vw, 8rem)",}}
            >
              a million miles
              <br />
              in the making
            </h2>

            {/* Story Text */}
            <div
              className='space-y-2 sm:space-y-3 font-montserrat tracking-widest text-xs sm:text-sm md:text-base'
              style={{ color: "#FF1275" }}
            >
              <p>WE TRAVELLED THE WORLD</p>
              <p>IN SEARCH OF A CLEAN SODA.</p>
              <p>AFTER COMING UP EMPTY.</p>
              <p>WE DECIDED TO MAKE </p>
              <p>A COLA WE'D LOVE.</p>
              <p>WE HOPE YOU WILL TOO.</p>
            </div>
          </div>

          {/* Right Image */}
          <div className='flex justify-center items-center mt-8 sm:mt-16 md:mt-32'>
            <img
              src='/images/hero2.png'
              alt='Our Story'
              className='w-full h-auto drop-shadow-lg mt-8 sm:mt-16 md:mt-32 pt-8 sm:pt-16 md:pt-32'
            />
          </div>
        </div>
      </section>
      {/* Reference Section - Light on the spots */}
      <section
        className='relative py-20 flex items-center overflow-visible px-16 lg:px-32'
      >
        <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center '>
          {/* Left Content */}
          <div className='flex-shrink-0'>
            <img
              src='/images/hero3.png'
              alt='Product'
              className='object-contain'
            />
          </div>
          <div className='flex-1'>
            <div className='text-left'>
              <h2
                className='font-montserrat uppercase mb-2 text-sm sm:text-base md:text-lg lg:text-xl'
                style={{
                  color: "#FF1275",
                  lineHeight: "2",
                  fontWeight: "300",
                  letterSpacing: "0.02em",
                }}
              >
                Light on the body,
                <br />
                easy on the mind,
                <br />
                Free from the crash.
              </h2>

              {/* CTA Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className='px-6 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:opacity-70 transition uppercase tracking-widest font-montserrat mt-4 cursor-pointer'
                style={{
                  border: `2px solid #FF1275`,
                  backgroundColor: "#ff127512",
                  color: "#FF1275",
                  position: "relative",
                  // zIndex: 10000
                }}
              >
                Grab a 12 pack
              </button>
            </div>
          </div>

          {/* Right Image */}
        </div>
      </section>

      <section id='cola-sublime' className='my-32 py-32'></section>

      {/* Cola Sublime Section */}
      <section
        className='relative w-full py-0 overflow-hidden'
        style={{ backgroundColor: "#500730" }}
      >
        {/* Top Pattern */}
        <div
          className='w-full h-20 flex items-center'
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #FF1275 0px, #FF1275 2px, transparent 2px, transparent 12px)",
            opacity: 0.3,
          }}
        ></div>

        {/* Main Content */}
        <div className='relative py-12 sm:py-16 md:py-24 px-4 sm:px-8 flex items-center justify-center w-full min-h-64 sm:min-h-96'>
          <div className='relative w-full max-w-6xl'>
            {/* Right Content - Circular Badge (positioned top right) */}
            <div className='absolute -top-10 sm:-top-20 right-0 lg:right-0 flex justify-center items-start pointer-events-none'>
              <svg width="100" height="100" viewBox="0 0 139 138" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:w-48 sm:h-48'>
                <path d="M44.9869 85.5684L57.6894 57.0617L42.5745 57.111L42.5745 53.0738L62.662 53.0738L62.662 56.7663L49.8119 85.5684L44.9869 85.5684ZM81.441 86.0607C72.2342 86.0607 66.3261 78.9217 66.3261 69.8134C66.3261 60.5574 72.1358 52.5814 81.5395 52.5814C91.1402 52.5814 96.6052 60.5574 96.6052 69.8134C96.6052 78.9217 90.7463 86.0607 81.441 86.0607ZM70.8064 69.7642C70.8064 76.9031 75.2868 81.925 81.4903 81.925C87.6938 81.925 92.1249 76.9524 92.1249 69.7642C92.1741 62.0344 87.7923 56.7171 81.5887 56.7171C75.336 56.7171 70.7572 62.0836 70.8064 69.7642Z" fill="#FF1275" />
                <path d="M28.3851 50.7822C27.9869 51.6172 27.4816 52.3233 26.8691 52.9005C26.2461 53.4726 25.5574 53.8967 24.8031 54.1728C24.0488 54.4488 23.2576 54.571 22.4294 54.5394C21.6063 54.4972 20.7877 54.2821 19.9738 53.8941C19.1599 53.506 18.4775 53.0055 17.9265 52.3925C17.3805 51.769 16.9773 51.0773 16.7169 50.3175C16.4615 49.5471 16.3653 48.7422 16.4281 47.903C16.4803 47.0587 16.7055 46.2191 17.1037 45.384C17.4867 44.5807 17.9844 43.8904 18.5969 43.3133C19.1988 42.7311 19.8852 42.3254 20.6561 42.0961L21.046 43.1966C20.3642 43.4294 19.7919 43.7727 19.329 44.2266C18.8555 44.6755 18.4676 45.217 18.1652 45.8512C17.8477 46.5172 17.6692 47.191 17.6296 47.8726C17.5794 48.5492 17.665 49.1997 17.8862 49.8241C18.0968 50.4435 18.4243 51.0083 18.8686 51.5185C19.3074 52.0131 19.8598 52.4191 20.5257 52.7366C21.1916 53.0541 21.8601 53.2302 22.5312 53.2647C23.1967 53.2837 23.8417 53.1825 24.4661 52.9613C25.0799 52.735 25.6392 52.3919 26.1439 51.932C26.638 51.4671 27.0438 50.9016 27.3613 50.2357C27.6637 49.6015 27.8402 48.9592 27.8908 48.3087C27.9415 47.6583 27.8426 46.9949 27.5942 46.3187L28.6947 45.9288C29.002 46.672 29.1242 47.4633 29.0614 48.3025C28.9985 49.1417 28.7731 49.9683 28.3851 50.7822ZM32.2305 42.501L27.815 29.7229L28.7431 28.8381L41.2954 33.8595L40.3038 34.8048L28.6031 30.0151L28.9845 29.6515L33.2094 41.5677L32.2305 42.501ZM31.566 38.5964L31.1185 37.5669L36.293 32.6341L37.2999 33.1303L31.566 38.5964ZM46.1281 30.1793L41.1156 18.9518L42.3025 18.4219L46.8567 28.6229L53.1441 25.8159L53.6024 26.8424L46.1281 30.1793ZM64.6901 24.8578C63.7665 24.9118 62.8984 24.8101 62.0857 24.5526C61.284 24.2827 60.5746 23.8843 59.9572 23.3574C59.351 22.818 58.8623 22.1838 58.4912 21.4548C58.1312 20.7134 57.9248 19.8926 57.8722 18.9925C57.8196 18.0923 57.9293 17.2589 58.2012 16.4923C58.4841 15.7133 58.8956 15.0265 59.4356 14.4319C59.9866 13.825 60.6449 13.3466 61.4103 12.9969C62.1751 12.6355 63.0251 12.4274 63.9603 12.3728C64.8839 12.3188 65.7465 12.4267 66.5482 12.6966C67.3492 12.9548 68.0525 13.3477 68.6581 13.8753C69.2754 14.4023 69.7641 15.0365 70.1241 15.7779C70.4958 16.5186 70.708 17.339 70.7606 18.2392C70.8132 19.1393 70.6981 19.9789 70.4152 20.7579C70.1439 21.5362 69.7325 22.223 69.1808 22.8183C68.6408 23.4129 67.9883 23.8909 67.2236 24.2523C66.4581 24.602 65.6136 24.8039 64.6901 24.8578ZM64.6224 23.7005C65.3589 23.6575 66.0297 23.4951 66.635 23.2134C67.2512 22.9193 67.774 22.531 68.2032 22.0484C68.6435 21.5535 68.9745 20.9946 69.1961 20.3717C69.4171 19.737 69.5061 19.0515 69.463 18.315C69.42 17.5785 69.2521 16.9139 68.9594 16.321C68.666 15.7165 68.2722 15.1999 67.7779 14.7713C67.2947 14.3304 66.7302 14.0056 66.0846 13.797C65.45 13.576 64.7645 13.4871 64.028 13.5301C63.2915 13.5731 62.6151 13.7417 61.9989 14.0358C61.382 14.3182 60.8534 14.7068 60.4131 15.2018C59.9838 15.6843 59.6529 16.2433 59.4202 16.8786C59.1986 17.5015 59.1093 18.1812 59.1523 18.9177C59.1947 19.6424 59.3626 20.3071 59.6559 20.9117C59.961 21.5155 60.3552 22.0379 60.8384 22.4789C61.3327 22.9075 61.903 23.2319 62.5493 23.4522C63.1949 23.6608 63.8859 23.7436 64.6224 23.7005ZM77.995 24.7413L82.0237 13.1245L86.3718 14.6323C87.3564 14.9738 88.1472 15.4278 88.744 15.9942C89.3446 16.5495 89.7294 17.1911 89.8984 17.919C90.0823 18.6397 90.0284 19.4204 89.7368 20.2613C89.4529 21.08 89.0137 21.7209 88.4193 22.1841C87.8398 22.64 87.1403 22.9056 86.321 22.9809C85.5055 23.0451 84.6054 22.9065 83.6207 22.565L79.9531 21.2931L80.6965 20.9188L79.2231 25.1672L77.995 24.7413ZM85.9277 27.4923L84.4023 22.2411L85.73 22.7016L87.2719 27.9585L85.9277 27.4923ZM80.6619 21.0183L80.3157 20.2476L83.9501 21.508C85.1118 21.9108 86.0796 21.9614 86.8536 21.6597C87.6386 21.3618 88.1903 20.7537 88.5087 19.8354C88.831 18.906 88.7762 18.0814 88.3442 17.3614C87.9232 16.6453 87.1319 16.0858 85.9702 15.6829L82.3358 14.4225L83.0849 14.0316L80.6619 21.0183ZM93.6131 30.7616L100.785 20.7743L101.841 21.5325L94.6689 31.5197L93.6131 30.7616ZM106.996 33.4023L111.024 38.5028L110.155 39.1886L106.128 34.0881L106.996 33.4023ZM102.631 37.0288L107.214 42.8323L106.331 43.529L100.943 36.7054L110.592 29.0851L115.818 35.702L114.935 36.3987L110.516 30.8019L102.631 37.0288ZM111.167 52.7416C110.875 51.876 110.733 50.997 110.742 50.1045C110.765 49.2194 110.925 48.4857 111.223 47.9033L112.335 48.0663C112.073 48.6115 111.92 49.2749 111.874 50.0564C111.844 50.8452 111.957 51.6225 112.215 52.3882C112.462 53.1206 112.751 53.6843 113.082 54.0795C113.428 54.482 113.791 54.7363 114.173 54.8424C114.559 54.9596 114.94 54.9547 115.317 54.8275C115.772 54.6742 116.094 54.4176 116.281 54.0578C116.473 53.7091 116.575 53.2977 116.588 52.8237C116.613 52.3459 116.6 51.8312 116.55 51.2796C116.5 50.728 116.456 50.1746 116.417 49.6192C116.389 49.0601 116.419 48.525 116.506 48.0136C116.597 47.5134 116.786 47.0666 117.074 46.6731C117.376 46.287 117.838 45.9892 118.459 45.7798C119.036 45.5853 119.614 45.5575 120.192 45.6963C120.785 45.8425 121.332 46.1832 121.834 46.7185C122.347 47.25 122.77 48.0096 123.102 48.9973C123.323 49.652 123.448 50.3329 123.476 51.0401C123.515 51.7436 123.452 52.3826 123.288 52.9571L122.165 52.8719C122.33 52.2604 122.395 51.6454 122.359 51.0271C122.328 50.4199 122.224 49.8556 122.048 49.334C121.813 48.6349 121.524 48.0897 121.182 47.6983C120.84 47.3069 120.471 47.0544 120.074 46.9409C119.692 46.8348 119.302 46.8491 118.902 46.9837C118.447 47.137 118.124 47.388 117.932 47.7368C117.745 48.0966 117.644 48.5135 117.631 48.9875C117.622 49.4727 117.642 49.991 117.692 50.5426C117.742 51.0942 117.779 51.644 117.803 52.192C117.831 52.7511 117.799 53.2807 117.708 53.7809C117.632 54.2885 117.448 54.7335 117.157 55.1158C116.869 55.5093 116.42 55.8089 115.81 56.0146C115.244 56.2053 114.665 56.2276 114.072 56.0814C113.49 55.9315 112.941 55.5852 112.424 55.0426C111.923 54.5073 111.503 53.7403 111.167 52.7416Z" fill="#FF1275" />
                <path d="M110.2 88.5128C110.612 87.6847 111.13 86.9872 111.752 86.4205C112.384 85.8589 113.08 85.4466 113.839 85.1833C114.598 84.9201 115.391 84.8113 116.219 84.8569C117.041 84.913 117.856 85.1419 118.663 85.5436C119.47 85.9454 120.144 86.4574 120.685 87.0796C121.22 87.7122 121.611 88.4107 121.859 89.1748C122.101 89.9494 122.184 90.7557 122.107 91.5938C122.04 92.4371 121.801 93.2728 121.389 94.101C120.992 94.8977 120.483 95.5795 119.861 96.1462C119.249 96.7181 118.556 97.1122 117.781 97.3283L117.41 96.2214C118.096 96.0002 118.674 95.6666 119.144 95.2206C119.625 94.7798 120.022 94.2449 120.335 93.6159C120.664 92.9554 120.854 92.2848 120.905 91.6039C120.967 90.9282 120.892 90.2763 120.681 89.6483C120.481 89.0255 120.163 88.4552 119.728 87.9376C119.297 87.4356 118.752 87.0203 118.092 86.6916C117.431 86.3629 116.766 86.1756 116.095 86.1297C115.43 86.0995 114.783 86.1897 114.155 86.4003C113.538 86.6162 112.973 86.9498 112.461 87.4011C111.959 87.8576 111.543 88.4161 111.215 89.0766C110.902 89.7056 110.714 90.3448 110.653 90.9943C110.591 91.6438 110.679 92.3087 110.915 92.9891L109.809 93.3603C109.514 92.612 109.405 91.8188 109.482 90.9808C109.559 90.1427 109.798 89.3201 110.2 88.5128ZM106.214 96.7311L110.485 109.558L109.547 110.432L97.052 105.27L98.0543 104.336L109.7 109.257L109.315 109.616L105.225 97.6532L106.214 96.7311ZM106.834 100.643L107.27 101.677L102.04 106.551L101.039 106.044L106.834 100.643ZM92.1803 108.909L97.1353 120.162L95.9457 120.686L91.4437 110.462L85.142 113.237L84.689 112.208L92.1803 108.909ZM73.5916 114.165C74.5152 114.112 75.3832 114.215 76.1956 114.473C76.997 114.744 77.706 115.143 78.3227 115.671C78.9284 116.211 79.4163 116.846 79.7865 117.575C80.1457 118.317 80.3511 119.138 80.4027 120.038C80.4543 120.939 80.3437 121.772 80.0709 122.538C79.7871 123.317 79.3749 124.003 78.8342 124.597C78.2825 125.203 77.6237 125.681 76.8578 126.03C76.0926 126.39 75.2423 126.598 74.3071 126.651C73.3835 126.704 72.521 126.595 71.7196 126.324C70.9189 126.065 70.2161 125.672 69.611 125.143C68.9943 124.616 68.5064 123.981 68.1472 123.239C67.7763 122.498 67.5651 121.677 67.5135 120.777C67.4619 119.877 67.578 119.037 67.8618 118.259C68.1339 117.481 68.5462 116.794 69.0986 116.2C69.6393 115.606 70.2922 115.128 71.0574 114.768C71.8233 114.419 72.668 114.218 73.5916 114.165ZM73.6579 115.323C72.9214 115.365 72.2504 115.526 71.6448 115.807C71.0282 116.101 70.505 116.489 70.0752 116.971C69.6344 117.465 69.3028 118.024 69.0804 118.646C68.8587 119.281 68.769 119.966 68.8112 120.703C68.8534 121.439 69.0205 122.104 69.3125 122.697C69.6052 123.302 69.9985 123.819 70.4922 124.248C70.975 124.69 71.539 125.015 72.1844 125.224C72.8188 125.446 73.5042 125.536 74.2407 125.494C74.9773 125.451 75.6538 125.284 76.2704 124.99C76.8876 124.709 77.4167 124.321 77.8575 123.826C78.2873 123.344 78.6189 122.786 78.8523 122.151C79.0747 121.528 79.1648 120.848 79.1226 120.112C79.081 119.387 78.9139 118.722 78.6212 118.117C78.3168 117.513 77.9232 116.99 77.4405 116.549C76.9467 116.119 76.3768 115.794 75.7308 115.573C75.0854 115.364 74.3945 115.28 73.6579 115.323ZM60.2795 114.276L56.2965 125.909L51.9426 124.418C50.9566 124.081 50.1641 123.63 49.5651 123.066C48.9622 122.513 48.5749 121.873 48.4031 121.145C48.2164 120.426 48.2671 119.645 48.5554 118.803C48.8361 117.983 49.2728 117.34 49.8654 116.875C50.4431 116.416 51.1415 116.148 51.9605 116.07C52.7758 116.002 53.6764 116.137 54.6624 116.475L58.335 117.732L57.5931 118.11L59.0497 113.855L60.2795 114.276ZM52.3361 111.557L53.8821 116.802L52.5526 116.347L50.99 111.096L52.3361 111.557ZM57.6273 118.01L57.9765 118.779L54.3372 117.533C53.1739 117.135 52.2059 117.088 51.4332 117.393C50.6493 117.694 50.1 118.304 49.7852 119.224C49.4665 120.154 49.5246 120.979 49.9595 121.697C50.3832 122.411 51.1767 122.968 52.34 123.366L55.9794 124.612L55.2318 125.006L57.6273 118.01ZM44.6303 108.321L37.527 118.357L36.466 117.606L43.5693 107.57L44.6303 108.321ZM31.2432 105.829L27.1404 100.789L27.9986 100.09L32.1014 105.131L31.2432 105.829ZM35.5546 102.139L30.8863 96.4035L31.7581 95.6939L37.247 102.437L27.7111 110.199L22.3886 103.66L23.2605 102.951L27.7624 108.481L35.5546 102.139ZM26.7431 86.5644C27.0546 87.4231 27.2164 88.2986 27.2286 89.1911C27.2259 90.0765 27.0822 90.8137 26.7976 91.4027L25.6827 91.2652C25.9312 90.7142 26.0694 90.0475 26.0971 89.2651C26.1097 88.4758 25.9783 87.7013 25.7028 86.9417C25.4393 86.2152 25.1377 85.6582 24.7978 85.2707C24.443 84.8762 24.0735 84.6303 23.6895 84.5329C23.3014 84.4245 22.9202 84.4382 22.5459 84.574C22.0945 84.7376 21.7792 85.0015 21.5998 85.3655C21.4164 85.7185 21.3235 86.1321 21.3211 86.6064C21.3077 87.0846 21.3323 87.5988 21.3948 88.1491C21.4574 88.6994 21.5145 89.2517 21.566 89.806C21.6065 90.3643 21.5891 90.9001 21.5136 91.4132C21.4342 91.9154 21.2552 92.3665 20.9767 92.7664C20.6833 93.1593 20.2283 93.4676 19.6118 93.6912C19.0394 93.8988 18.4626 93.9398 17.8814 93.8143C17.2852 93.6817 16.7303 93.3536 16.2165 92.8299C15.6917 92.3102 15.2516 91.5605 14.8963 90.5807C14.6607 89.9312 14.5207 89.2533 14.4763 88.5469C14.4209 87.8446 14.4689 87.2043 14.6205 86.6262L15.7445 86.6857C15.5939 87.3008 15.5433 87.9171 15.5928 88.5344C15.6383 89.1407 15.7549 89.7026 15.9426 90.22C16.1941 90.9135 16.4953 91.452 16.8461 91.8355C17.1969 92.2189 17.5719 92.4629 17.971 92.5673C18.3551 92.6646 18.7453 92.6415 19.1416 92.4977C19.593 92.334 19.9103 92.0757 20.0937 91.7227C20.2731 91.3587 20.364 90.9395 20.3664 90.4653C20.3648 89.9801 20.3327 89.4623 20.2702 88.912C20.2076 88.3617 20.158 87.8129 20.1215 87.2656C20.0809 86.7073 20.1004 86.1771 20.1799 85.675C20.2443 85.1658 20.4178 84.7167 20.7002 84.3278C20.9787 83.9278 21.4207 83.6181 22.0261 83.3985C22.5876 83.1949 23.1664 83.1593 23.7625 83.2919C24.3477 83.4285 24.9047 83.7621 25.4335 84.2928C25.9473 84.8165 26.3838 85.5737 26.7431 86.5644Z" fill="#FF1275" />
                <circle cx="69.9524" cy="69.9164" r="67.1149" stroke="#FF1275" stroke-width="1.9059" />
              </svg>

            </div>

            {/* Left Content - Full Width */}
            <div className='text-left pt-8 sm:pt-16 md:pt-24'>
              {/* Heading */}
              <h2
                className='font-montserrat mb-6 sm:mb-8 md:mb-12 mt-12 text-center'
                style={{
                  color: "#FF1275",
                  lineHeight: "0.9",
                  fontWeight: "400",
                  letterSpacing: "0.03em",
                  fontSize: "clamp(4.5rem, 11vw, 17rem)"
                }}
              >
                cola sublimé
              </h2>

              {/* CTA Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className='px-6 sm:px-10 py-2 sm:py-3 rounded-full text-xs sm:text-sm hover:opacity-70 transition uppercase tracking-widest font-montserrat cursor-pointer'
                style={{
                  border: "1px solid #FF1275",
                  backgroundColor: "#410627",
                  color: "#FF1275",
                  fontWeight: "600",
                  position: "relative",
                  zIndex: 10000
                }}
              >
                TRY UNPOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Pattern */}
        <div
          className='w-full h-20 flex items-center'
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #FF1275 0px, #FF1275 2px, transparent 2px, transparent 12px)",
            opacity: 0.3,
          }}
        ></div>
      </section>

      {/* Reference Section - 13g Sugar from Dates */}
      <section
        className='relative w-full pt-32 pb-32 overflow-hidden'
      style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)"}}>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-full min-h-64 sm:min-h-96 flex items-center justify-between'>
          {/* Left Content */}
          <div className='text-center flex-1 z-10 w-full'>
             <h2
              className='font-broton'
              style={{
                color: "#FF1275",
                lineHeight: "1.1",
                fontWeight: "100",
                letterSpacing: "0.02em",
                fontSize: "clamp(3rem, 10vw, 12rem)",
              }}
            >
              16g
              <br />
              sugar
            </h2>
            <span style={{ fontSize: "clamp(2rem, 10vw, 6rem)", fontWeight: "400", textTransform: "uppercase" , fontFamily: 'Montserrat', wordSpacing: "0.9em" ,color: "#FF1275",
               }}>
                from dates
              </span>
          </div>
        </div>
      </section>

      {/* Soda Back to Its Senses Section */}
      <section
        className='relative py-10 md:py-20 overflow-visible px-4 sm:px-8 md:px-16 lg:px-32 z-[100]'
        style={{ backgroundColor: "#410627" }}
      >
        <div className='relative mx-auto px-4 sm:px-8 md:px-16 flex flex-col'>
          {/* Main Row - Heading and Ingredients */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 md:gap-16 items-start relative z-20'>
            {/* Left - Heading */}
            <div>
              <h2
                className='font-nineties-italic'
                style={{
                  color: "#FF1275",
                  lineHeight: "1.1",
                  fontWeight: "100",
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
                  fontSize: "clamp(3rem, 10vw, 8rem)",
                }}
              >
                soda,
                <br />
                back to its
                <br />
                senses.
              </h2>
            </div>

            {/* Right - Single Column Ingredients (Like Reference Image) */}
            <div className='space-y-6'>
              {/* Ingredients */}
              <div className='grid grid-cols-2 gap-4'>
                <p
                  className='text-sm md:text-base lg:text-lg'
                  style={{
                    color: "#FF1275",
                    fontStyle: "italic",
                    fontWeight: "100",
                    letterSpacing: "0.05em",
                  }}
                >
                  ingredients
                </p>
                <p
                  className='text-xs md:text-sm lg:text-base font-montserrat'
                  style={{
                    color: "#FF1275",
                    fontWeight: "400",
                    letterSpacing: "0.08em",
                    lineHeight: "1.6",
                  }}
                >
                  Why it's there
                </p>
              </div>

              {/* Real Spices */}
              <div className='grid grid-cols-2 gap-4'>
                <p
                  className='text-sm md:text-base lg:text-lg'
                  style={{
                    color: "#FF1275",
                    fontStyle: "italic",
                    fontWeight: "100",
                    letterSpacing: "0.05em",
                  }}
                >
                  real spices
                </p>
                <p
                  className='text-xs md:text-sm lg:text-base font-montserrat'
                  style={{
                    color: "#FF1275",
                    fontWeight: "400",
                    letterSpacing: "0.08em",
                    lineHeight: "1.6",
                  }}
                >
                  VANILLA BEAN,
                  <br />
                  CINNAMON, NUTMEG –<br />
                  FLAVOR WITH SOUL.
                </p>
              </div>

              {/* Dates */}
              <div className='grid grid-cols-2 gap-4'>
                <p
                  className='text-sm md:text-base lg:text-lg'
                  style={{
                    color: "#FF1275",
                    fontStyle: "italic",
                    fontWeight: "100",
                    letterSpacing: "0.05em",
                  }}
                >
                  dates
                </p>
                <p
                  className='text-xs md:text-sm lg:text-base font-montserrat'
                  style={{
                    color: "#FF1275",
                    fontWeight: "400",
                    letterSpacing: "0.08em",
                    lineHeight: "1.6",
                  }}
                >
                  NATURAL SWEETNESS
                  <br />
                  WITH CARAMEL DEPTH.
                  <br />
                  AND SMOOTH LANDING.
                </p>
              </div>

              {/* Carbonation */}
              <div className='grid grid-cols-2 gap-4'>
                <p
                  className='text-sm md:text-base lg:text-lg'
                  style={{
                    color: "#FF1275",
                    fontStyle: "italic",
                    fontWeight: "100",
                    letterSpacing: "0.05em",
                  }}
                >
                  carbonation
                  <br />
                  that bites
                </p>
                <p
                  className='text-xs md:text-sm lg:text-base font-montserrat'
                  style={{
                    color: "#FF1275",
                    fontWeight: "400",
                    letterSpacing: "0.08em",
                    lineHeight: "1.6",
                  }}
                >
                  THE KIND THAT
                  <br />
                  SOUNDS RIGHT WHEN
                  <br />
                  YOU OPEN IT.
                </p>
              </div>
            </div>
          </div>

          {/* Image - After Grid Section */}
          <div className='flex justify-center w-full max-w-3xl mx-auto pointer-events-none z-10'>
            <img
              src='/images/hero4.png'
              alt='Soda back to its senses'
              className='w-full h-auto drop-shadow-lg'
            />
          </div>
        </div>
      </section>

      {/* Detailed Our Story Section */}

      {/* UPON! Logo Section - Design Reference Comparison */}
      <section
        className='relative w-full py-32 overflow-hidden z-[101]'
            style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)"}}>

        <div className='relative max-w-7xl mx-auto px-8 lg:px-16'>
          {/* Comparison Grid - Similar to Reference Image */}
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8'>
            {/* Column Headers */}
            <div className='col-span-1 lg:col-span-4'>
              <div className='grid grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8'>
                <div></div>
                <div
                  className='text-sm md:text-base lg:text-lg font-nineties'
                  style={{
                    color: "#FF1275",
                    fontStyle: "italic",
                    letterSpacing: "0.05em",
                  }}
                >
                  BIG SODA
                </div>
                <div
                  className='text-sm md:text-base lg:text-lg font-nineties'
                  style={{
                    color: "#FF1275",
                    fontStyle: "italic",
                    letterSpacing: "0.05em",
                  }}
                >
                  GUT SODA
                </div>
                <div
                  className='text-sm md:text-base lg:text-lg font-nineties'
                  style={{
                    color: "#FF1275",
                    fontStyle: "italic",
                    letterSpacing: "0.05em",
                  }}
                >
                  <img
                    src='/images/logo.png'
                    alt='UPON! Logo'
                    className='w-10 sm:w-12 md:w-16 h-auto drop-shadow-lg'
                  />
                </div>
              </div>
            </div>

            {/* Sweetener Row */}
            <div
              className='text-sm md:text-base lg:text-lg font-nineties'
              style={{
                color: "#FF1275",
                fontStyle: "italic",
                fontWeight: "100",
                letterSpacing: "0.05em",
              }}
            >
              Sweetener
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "300",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              HF CORN SYRUP OR ASPARTAME
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "300",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              STEVIA + SUGAR + PREBIOTICS
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "500",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              DATE SYRUP + STEVIA
            </div>

            {/* Aftertaste Row */}
            <div
              className='text-sm md:text-base lg:text-lg font-nineties'
              style={{
                color: "#FF1275",
                fontStyle: "italic",
                fontWeight: "100",
                letterSpacing: "0.05em",
              }}
            >
              Aftertaste
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "300",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              CLOYING SUGAR CRASH
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "300",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              CHALKY, FAKE-SWEET
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "500",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              CLEAN, CRISP, & GONE
            </div>

            {/* The Talk Row */}
            <div
              className='text-sm md:text-base lg:text-lg font-nineties'
              style={{
                color: "#FF1275",
                fontStyle: "italic",
                fontWeight: "100",
                letterSpacing: "0.05em",
              }}
            >
              The talk
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "300",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              NOSTALGIA & JINGLES
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "300",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              SCIENCE PROJECT MEETS NSYNC
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "500",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              HONESTLY
            </div>

            {/* The Feels Row */}
            <div
              className='text-sm md:text-base lg:text-lg font-nineties'
              style={{
                color: "#FF1275",
                fontStyle: "italic",
                fontWeight: "100",
                letterSpacing: "0.05em",
              }}
            >
              The feels
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "300",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              HEAVY
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "300",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              CONFUSED
            </div>
            <div
              className='text-xs md:text-sm lg:text-base font-montserrat'
              style={{
                color: "#FF1275",
                fontWeight: "500",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
            >
              ALIVE, FIZZY, REAL
            </div>

            {/* What You're Buying Row */}
            <div
              style={{
                color: "#FF1275",
                fontStyle: "italic",
                fontWeight: "100",
                letterSpacing: "0.05em",
              }}
              className='text-sm md:text-base lg:text-lg font-nineties'
            >
              What you're buying
            </div>
            <div
              style={{
                color: "#FF1275",
                fontWeight: "300",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='text-xs md:text-sm lg:text-base font-montserrat'
            >
              A FEELING FROM 1987
            </div>
            <div
              style={{
                color: "#FF1275",
                fontWeight: "300",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='text-xs md:text-sm lg:text-base font-montserrat'
            >
              QUESTIONABLE GUT SCIENCE
            </div>
            <div
              style={{
                color: "#FF1275",
                fontWeight: "500",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='text-xs md:text-sm lg:text-base font-montserrat'
            >
              SODA, HOW IT OUGHT TO BE
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className='flex justify-center mt-16'>
            <button
              className='px-10 py-3 rounded-full text-xs font-semibold hover:opacity-70 transition uppercase tracking-widest font-montserrat'
              style={{
                border: "none",
                backgroundColor: "#FF1275",
                color: "#500730",
              }}
            >
              GET YOUR 12 PACK
            </button>
          </div> */}
        </div>
      </section>
         <section
        className='relative py-20 flex items-center overflow-visible px-16 lg:px-32'
        style={{ backgroundColor: "#410627" }}

      >
        <div className='relative mx-auto px-4 sm:px-8 md:px-16'>
          {/* Heading */}
          <div className='text-center mb-8 md:mb-16'>
            <h2
              className='font-nineties-italic'
              style={{
                color: "#FF1275",
                lineHeight: "1.1",
                fontWeight: "100",
                fontStyle: "italic",
                letterSpacing: "0.02em",
                textDecoration: "underline",
                textDecorationColor: "#FF1275",
                textDecorationThickness: "2px",
                textUnderlineOffset: "12px",
                fontSize: "clamp(3rem, 10vw, 5rem)",
              }}
            >
              our
              <br />
              story
            </h2>
          </div>

          {/* Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16'>
            {/* Left - Story Text */}
            <div
              className='space-y-4 font-montserrat tracking-widest text-xs md:text-sm'
              style={{ color: "#FF1275" , letterSpacing: "0.2em" }}
            >
              <p>WE DIDN'T ASK FOR PERMISSION.</p>
              <p>BIG SODA TOLD US CORN SYRUP IS FINE.</p>
              <p>IT'S NOT.</p>
              <p>DIET SODA TOLD US ASPARTAME IS SAFE.</p>
              <p>THE WHO DISAGREES.</p>
              <p>BETTER-FOR-YOU SODA TOLD US PREBIOTICS ARE THE</p>
              <p>ANSWER.</p>
              <p>THE RUMBLINGS IN OUR GUT BEG TO DIFFER.</p>
              <p>SO WE STOPPED LISTENING.</p>
              <p>AND MADE SODA THE WAY IT SHOULD BE.</p>
              <p>WITH DATES, SPICES AND FIZZ.</p>
              <p>NO CORN SYRUP. NO FAKE SWEETENERS. NO GUT SCIENCE.</p>
              <p>JUST 12 GRAMS FROM DATES.</p>
              <p>AND THE CONFIDENCE TO SAY:</p>
              <p>THIS IS HOW SODA SHOULD TASTE.</p>
              <p>WE DIDN'T UNJUNK SODA TO BE REBELLIOUS.</p>
              <p>WE UNJUNKED IT BECAUSE EVERYONE ELSE</p>
              <p>WAS BEATING AROUND THE TRUTH.</p>
              <p>THIS IS UNPOP.</p>
              <p>IF YOU ARE DONE COMPROMISING,</p>
              <p>YOu'RE IN THE RIGHT PLACE.</p>
              <p>
                <b>UNPOP</b>. SODA. UNJUNKED
              </p>
            </div>

            {/* Right - Image */}
            <div className='flex justify-center items-end'>
              <img
                src='/images/hero5.png'
                alt='Our Story - Motorcycle'
                className='w-full h-auto drop-shadow-lg'
              />
            </div>
          </div>
        </div>
      </section>
      {/* The UNPOP Club Section */}
      <section
        className='relative w-full py-0 overflow-hidden'
                    style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)"}}>

        {/* Top Pattern */}
        <div
          className='w-full h-20 flex items-center'
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #FF1275 0px, #FF1275 2px, transparent 2px, transparent 12px)",
            opacity: 0.3,
          }}
        ></div>

        {/* Main Content */}
        <div className='relative py-12 sm:py-16 md:py-24 px-4 sm:px-8 flex items-center justify-between w-full min-h-64 sm:min-h-96'>
          <div className='relative w-full px-4 sm:px-8 md:px-16 mx-auto flex items-end justify-between gap-4 sm:gap-8 md:gap-16'>
            {/* Left Content */}
            <div className='text-left z-20 flex items-end gap-4 sm:gap-8 flex-col sm:flex-row'>
              {/* Heading */}
              <h2
                className='font-montserrat '
                style={{
                  color: "#FF1275",
                  lineHeight: "0.9",
                  fontWeight: "400",
                  letterSpacing: "0.03em",
                  fontSize: "clamp(3rem, 10vw, 6rem)"
                }}
              >
                the
                <br />
                unpop
                <br />
                club
              </h2>

              {/* CTA Button */}
              <button
                className='px-6 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-semibold hover:opacity-70 transition uppercase tracking-widest font-montserrat'
                style={{
                  border: "1px solid #FF1275",
                  backgroundColor: "#ff12750c",
                  color: "#FF1275",
                  whiteSpace: "nowrap",
                }}
              >
                BE A MEMBER
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Collage Image - Absolute Bottom */}
        <div
          className='absolute bottom-0 right-4 sm:right-8 md:right-24 pointer-events-none z-10 flex items-end'
          style={{ width: "25%", minWidth: "100px", zIndex: 11111111 }}
        >
          <img
            src='/images/hero6.png'
            alt='The UNPOP Club Members'
            className='h-auto drop-shadow-lg'
          />
        </div>

        {/* Bottom Pattern */}
        <div
          className='w-full h-20 flex items-center relative z-20'
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #FF1275 0px, #FF1275 2px, transparent 2px, transparent 12px)",
            opacity: 0.3,
          }}
        ></div>
      </section>

      {/* Business Plan Section */}
      <section
        className='relative w-full py-0 overflow-visible'
        style={{ backgroundColor: "#410627" }}

      >
        {/* Main Content */}
        <div className='relative w-full flex flex-col items-center justify-start pt-12 sm:pt-16 md:pt-20'>
          {/* Text Content - Centered with Tilt */}
          <div
            className='z-20 text-center max-w-4xl px-4 sm:px-8 mb-12 sm:mb-20'
            style={{ transform: "skewY(-2deg)" }}
          >
            <p
              className='font-quick-writers italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
              style={{
                color: "#FF1275",
                fontWeight: "700",
                letterSpacing: "0.02em",
              }}
            >
              REAL FRUIT. PLENTY OF FIZZ.
            </p>
            <p
              className='font-quick-writers italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
              style={{
                color: "#FF1275",
                fontWeight: "700",
                letterSpacing: "0.02em",
              }}
            >
              YOU DRINK IT, YOU BURP.
            </p>
            <p
              className='font-quick-writers italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
              style={{
                color: "#FF1275",
                fontWeight: "700",
                letterSpacing: "0.02em",
              }}
            >
              MAYBE YOU SMILE.
            </p>
            <p
              className='font-quick-writers italic'
              style={{
                color: "#FF1275",
                fontSize: "46px",
                fontWeight: "700",
                letterSpacing: "0.02em",
              }}
            >
              THAT'S IT, THAT'S THE
            </p>
            <p
              className='font-quick-writers italic'
              style={{
                color: "#FF1275",
                fontSize: "64px",
                fontWeight: "900",
                letterSpacing: "0.02em",
              }}
            >
              WHOLE BUSINESS PLAN.
            </p>
            <p
              className='font-quick-writers italic mt-6'
              style={{
                color: "#FF1275",
                fontSize: "36px",
                fontWeight: "700",
                letterSpacing: "0.02em",
              }}
            >
              xoxo,
              <br />
              UNPOP!
            </p>
          </div>

          {/* Bottom Image - Below Text with Space */}
          <div className='w-full flex justify-center pointer-events-none z-10'>
            <img
              src='/images/hero7.png'
              alt='Business Plan'
              className='w-full h-auto drop-shadow-lg aspect-[2/1]'
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
       <section
        className='relative py-20 overflow-visible px-16 lg:px-32'
                style={{ backgroundColor: "#410627" }}

      >
        {/* Main Content */}
        <div className='relative w-full flex flex-col items-start justify-start pt-12 sm:pt-16 md:pt-24 pb-0'>
          <div className='mx-auto px-4 sm:px-8 md:px-16 w-full'>
            {/* Heading */}
            <h2
              className='font-nineties-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
              style={{
                color: "#FF1275",
                lineHeight: "1.2",
                fontWeight: "400",
                letterSpacing: "0.02em",
                marginBottom: "32px",
              }}
            >
              frequently
              <br />
              asked
              <br />
              questions
            </h2>

            {/* FAQ Accordion */}
            <div className='space-y-0 max-w-5xl'>
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className='border-b'
                  style={{ borderColor: "#FF1275" }}
                >
                  {/* Question Button */}
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className='w-full py-6 flex items-center justify-between hover:opacity-70 transition-opacity text-left'
                    style={{ color: "#FF1275" }}
                  >
                    <span
                      className='font-nineties-bold'
                      style={{
                        fontSize: "20px",
                        letterSpacing: "0.01em",
                        color: "#FF1275",
                      }}
                    >
                      {item.question}
                    </span>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      style={{
                        transform:
                          openFaqIndex === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d='M5 7.5L10 12.5L15 7.5'
                        stroke='#FF1275'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>

                  {/* Answer - Expandable */}
                  {openFaqIndex === index && (
                    <div
                      className='pb-6 font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontSize: "18px",
                        fontWeight: "400",
                        letterSpacing: "0.05em",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer
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
              <a
                href='#'
                style={{
                  color: "#FF1275",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-montserrat hover:opacity-70 transition text-sm sm:text-base'
              >
                Buy Unpop!
              </a>
              <a
                href='#'
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
                href='#'
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
                href='#'
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
                href='#'
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
                href='#'
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
                href='#'
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
                    backgroundColor: "#ff127509",
                    color: "#FF1275",
                    borderRadius: "20px",
                    fontWeight: "700",
                    cursor: "pointer",
                    letterSpacing: "0.03em",
                  }}
                  className='font-montserrat hover:opacity-70 transition px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm whitespace-nowrap w-full'
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
                    <circle
                      cx='12'
                      cy='12'
                      r='4'
                      stroke='#FF1275'
                      strokeWidth='2'
                    />
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

        {/* Bottom Section - Copyright */}
        <div
          className='w-full px-4 sm:px-8 md:px-16 py-4 sm:py-6 border-t'
          style={{ borderColor: "#FF1275" }}
        >
          <div className='flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left'>
            <p
              style={{
                color: "#FF1275",
                fontWeight: "400",
                letterSpacing: "0.02em",
              }}
              className='font-montserrat text-xs sm:text-sm'
            >
              {new Date().getFullYear()} © UNPOP!
            </p>
            <p
              style={{
                color: "#FF1275",
                fontWeight: "400",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
              className='font-montserrat text-xs sm:text-sm'
            >
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onCheckout={() => { setIsCartOpen(false); navigate("/checkout"); }} 
      />
    </div>
  );
}
