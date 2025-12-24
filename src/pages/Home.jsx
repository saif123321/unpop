import React, { useState } from "react";
import Scroll3DSection from "../components/scroll-3d-section";

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

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
      style={{ backgroundColor: "#500730" }}
    >
      <Scroll3DSection />
      {/* Header */}
      <header
        className='relative z-50 flex items-center justify-between px-6 md:px-16 py-4 md:py-6 text-sm md:text-xs tracking-widest font-aloevera uppercase'
        style={{ color: "#FF1275" }}
      >
        {/* Left – OUR STORY */}
        <a
          href='#our-story'
          className='hover:opacity-70 transition-opacity duration-300 cursor-pointer'
          style={{ color: "#FF1275" }}
        >
          Our Story
        </a>

        {/* Center – Logo (updated for better visibility; replace src with your neon/pop style logo PNG/SVG) */}
        <div className='flex-1 flex justify-center'>
          <img
            src='/images/logo.png' // Update to your reference image path, e.g., a pink neon "SUN POP!" graphic
            alt='SUN POP! Logo'
            className='w-12 md:w-16 h-auto drop-shadow-lg' // Larger size, added shadow for neon pop effect
          />
        </div>

        {/* Right – CONTACT + BUY NOW */}
        <div className='flex items-center gap-6 md:gap-8'>
          <a
            href='#contact'
            className='hover:opacity-70 transition-opacity duration-300 cursor-pointer'
            style={{ color: "#FF1275" }}
          >
            Contact
          </a>
          <button
            className='px-4 py-1.5 md:px-5 md:py-2 rounded-full font-semibold hover:bg-[#FF1275] hover:text-white transition-all duration-300 font-aloevera cursor-pointer'
            style={{
              border: "1px solid #FF1275",
              backgroundColor: "transparent",
              color: "#FF1275",
            }}
          >
            Buy Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-visible px-8 py-16 mb-20'>
        {/* Centered Content Container */}
        <div className='relative w-full max-w-5xl'>
          {/* Heading and Can Container */}
          <div className='relative flex items-center justify-center min-h-96'>
            {/* SODA UNJUNKED Heading */}
            <h1
              className='text-center font-aloevera'
              style={{
                color: "#FF1275E5",
                fontSize: "200px",
                lineHeight: "1.1",
                fontWeight: "100",
                letterSpacing: "-0.02em",
                zIndex: "10",
                position: "relative",
              }}
            >
              SODA
              <br />
              UNJUNKED
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

          {/* CTA Button - Below the content */}
          <div className='flex mt-12'>
            <button
              className='px-8 py-3 rounded-full text-xs font-semibold hover:opacity-70 transition uppercase tracking-widest font-aloevera'
              style={{
                border: `1px solid #FF1275E5`,
                backgroundColor: "transparent",
                color: "#FF1275E5",
              }}
            >
              GET YOUR 12 PACK
            </button>
          </div>
        </div>
      </section>

      {/* Sugar Facts Section */}
      <section
        className='relative py-20 flex items-center overflow-visible px-16 lg:px-32'
        style={{ backgroundColor: "#500730" }}
      >
        <div className='relative max-w-xl'>
          <div className='text-left'>
            {/* Heading with Nineties Font */}
            <h2
              className='font-nineties mb-8'
              style={{
                color: "#FF1275",
                fontSize: "100px",
                lineHeight: "1.1",
                fontWeight: "400",
                letterSpacing: "0.02em",
                maxWidth: "600px",
              }}
            >
              13g of sugar
              <br />
              from dates.
            </h2>

            {/* Benefits Text */}
            <div
              className='space-y-2 mb-8 font-aloevera tracking-widest text-xs md:text-sm'
              style={{ color: "#FF1275" }}
            >
              <p>LIGHT ON THE BODY,</p>
              <p>EASY ON THE MIND,</p>
              <p>FREE FROM THE CRASH.</p>
            </div>

            {/* CTA Button */}
            <button
              className='px-8 py-3 rounded-full text-xs font-semibold hover:opacity-70 transition uppercase tracking-widest font-aloevera'
              style={{
                border: `2px solid #FF1275`,
                backgroundColor: "#FF1275",
                color: "#500730",
              }}
            >
              GET YOUR 12 PACK
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        className='relative py-20 flex items-center overflow-visible px-16 lg:px-32'
        style={{ backgroundColor: "#500730" }}
      >
        <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center '>
          {/* Left Content */}
          <div className='text-left'>
            {/* Heading with Aloevera Font */}
            <h2
              className='font-nineties mb-12'
              style={{
                color: "#FF1275",
                fontSize: "120px",
                lineHeight: "1.2",
                fontWeight: "100",
                fontStyle: "italic",
                letterSpacing: "0.02em",
              }}
            >
              a new
              <br />
              perspective
              <br />
              on taste
            </h2>

            {/* Story Text */}
            <div
              className='space-y-3 font-aloevera tracking-widest text-xs md:text-sm'
              style={{ color: "#FF1275" }}
            >
              <p>WE TRAVELLED THE WORLD</p>
              <p>IN SEARCH OF A CLEAN SODA.</p>
              <p>AFTER COMING UP EMPTY.</p>
              <p>WE DECIDED TO MAKE OUR OWN.</p>
              <p>TWO YEARS LATER, WE MADE A COLA WE LOVE.</p>
              <p>WE HOPE YOU WILL TOO.</p>
            </div>
          </div>

          {/* Right Image */}
          <div className='flex justify-center items-center'>
            <img
              src='/images/hero2.png'
              alt='Our Story'
              className='w-full h-auto drop-shadow-lg'
            />
          </div>
        </div>
      </section>

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
        <div className='relative py-24 px-8 flex items-center justify-center w-full min-h-96'>
          <div className='relative w-full max-w-6xl'>
            {/* Right Content - Circular Badge (positioned top right) */}
            <div className='absolute -top-20 right-0 lg:right-0 flex justify-center items-start pointer-events-none'>
              <svg
                width='200'
                height='200'
                viewBox='0 0 146 146'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M53.016 88.0412C50.9855 88.0733 49.0159 87.6052 47.1072 86.637C45.2324 85.6338 43.6434 84.1959 42.3401 82.3231C41.0707 80.4153 40.3121 78.1552 40.0643 75.5429C39.9792 74.5115 39.9318 73.686 39.922 73.0665C39.8698 69.7626 40.302 66.6059 41.2184 63.5964C42.1686 60.552 43.764 58.0311 46.0045 56.0335C48.2445 54.0015 51.1885 52.9567 54.8367 52.8991C58.2783 52.8448 61.2722 53.8647 63.8182 55.9588L61.3375 59.0962C60.3264 58.286 59.164 57.7019 57.8502 57.344C56.5708 56.9855 55.2608 56.8685 53.9202 56.9929C51.582 57.1675 49.6527 58.1619 48.1322 59.976C46.6118 61.7901 45.6014 64.3018 45.1013 67.5112C46.011 66.2576 47.2176 65.2746 48.721 64.5624C50.2245 63.8502 51.9057 63.4966 53.7647 63.5017C55.898 63.4336 57.8845 63.8842 59.7244 64.8535C61.5986 65.8222 63.0838 67.2274 64.1801 69.069C65.3102 70.8757 65.8937 72.9492 65.9306 75.2895C65.9698 77.7675 65.4708 79.9613 64.4338 81.8711C63.3967 83.7808 61.8886 85.2849 59.9093 86.3833C57.9638 87.4468 55.6661 87.9994 53.016 88.0412ZM44.6967 74.5919C44.7271 76.5192 45.132 78.1824 45.9115 79.5816C46.7253 80.9801 47.7574 82.031 49.0078 82.7342C50.2926 83.4368 51.6062 83.7776 52.9484 83.7564C55.4608 83.7167 57.4791 82.9103 59.0034 81.3371C60.5277 79.764 61.2708 77.7728 61.2328 75.3637C61.2084 73.8149 60.8247 72.4096 60.0819 71.1476C59.3735 69.885 58.4113 68.9019 57.1953 68.1982C55.9793 67.4944 54.6314 67.1542 53.1515 67.1776C50.7423 67.2156 48.7221 67.9016 47.0907 69.2355C45.4589 70.535 44.6608 72.3204 44.6967 74.5919ZM90.9677 87.4422C87.8358 87.4916 85.0536 86.7954 82.6211 85.3535C80.1881 83.8772 78.2973 81.8588 76.9487 79.2982C75.6001 76.7376 74.9006 73.857 74.8501 70.6563C74.7985 67.3867 75.4049 64.365 76.6692 61.591C77.9336 58.8171 79.7576 56.6023 82.1412 54.9467C84.5242 53.2567 87.3161 52.3864 90.5168 52.3359C93.752 52.2849 96.57 53.0666 98.9708 54.6811C101.405 56.2606 103.264 58.4173 104.546 61.151C105.863 63.8842 106.548 66.8856 106.599 70.1552C106.65 73.3559 106.041 76.2572 104.774 78.859C103.507 81.4609 101.681 83.538 99.2958 85.0903C96.91 86.6083 94.134 87.3922 90.9677 87.4422ZM79.5455 70.4273C79.5846 72.9052 80.0842 75.1177 81.0444 77.0648C82.0385 78.9769 83.3874 80.4703 85.0912 81.545C86.8294 82.6192 88.7826 83.1392 90.9509 83.1049C93.1191 83.0707 95.0377 82.4896 96.7067 81.3617C98.3757 80.2337 99.6597 78.6988 100.558 76.7568C101.491 74.7799 101.938 72.5352 101.898 70.0228C101.857 67.4072 101.338 65.0745 100.342 63.0247C99.3799 60.9744 98.0468 59.3947 96.3425 58.2855C94.6726 57.1759 92.7707 56.6379 90.6369 56.6716C88.5031 56.7052 86.585 57.3207 84.8827 58.5181C83.1798 59.681 81.8456 61.3028 80.8801 63.3835C79.9491 65.4637 79.5042 67.8116 79.5455 70.4273Z'
                  fill='#FF1275'
                />
                <path
                  d='M112.071 96.8425C112.661 96.1032 113.377 95.5544 114.219 95.1961C115.054 94.8478 115.913 94.7241 116.798 94.825C117.684 94.9438 118.497 95.2984 119.237 95.8886C120.036 96.5266 120.596 97.2598 120.916 98.088C121.238 98.9343 121.312 99.7947 121.137 100.669C120.973 101.552 120.583 102.378 119.969 103.147C119.299 103.987 118.488 104.583 117.536 104.935C116.594 105.295 115.679 105.366 114.79 105.147L115.175 103.835C115.894 104 116.607 103.948 117.313 103.677C118.022 103.425 118.607 103.009 119.07 102.43C119.501 101.89 119.769 101.287 119.877 100.62C119.994 99.9608 119.929 99.304 119.683 98.6494C119.429 98.0048 118.997 97.4392 118.387 96.9527C117.828 96.506 117.206 96.2391 116.524 96.152C115.841 96.0649 115.186 96.1474 114.559 96.3997C113.932 96.6519 113.412 97.0378 112.997 97.5573C112.518 98.1568 112.236 98.839 112.149 99.6038C112.062 100.369 112.183 101.087 112.513 101.76L111.316 102.399C110.902 101.545 110.756 100.611 110.879 99.5961C111.004 98.5997 111.401 97.6818 112.071 96.8425ZM100.023 108.576C100.822 108.12 101.657 107.893 102.527 107.896C103.393 107.917 104.205 108.152 104.963 108.603C105.721 109.053 106.328 109.678 106.785 110.477C107.299 111.376 107.562 112.264 107.577 113.139C107.591 114.014 107.378 114.813 106.937 115.536C106.502 116.271 105.885 116.866 105.086 117.323C104.254 117.798 103.373 118.022 102.443 117.993C101.514 117.965 100.705 117.683 100.017 117.149L101.245 119.297L100.046 119.982L95.2225 111.54L96.4047 110.864L97.6604 113.062C97.5495 112.198 97.7113 111.347 98.1458 110.51C98.5867 109.684 99.2123 109.039 100.023 108.576ZM105.603 111.153C105.241 110.52 104.759 110.037 104.157 109.704C103.554 109.371 102.915 109.206 102.239 109.209C101.559 109.23 100.925 109.408 100.337 109.744C99.7546 110.091 99.282 110.553 98.9188 111.128C98.562 111.715 98.3709 112.347 98.3455 113.024C98.3153 113.719 98.4809 114.382 98.8424 115.015C99.2357 115.703 99.7391 116.211 100.353 116.537C100.962 116.882 101.606 117.043 102.286 117.023C102.967 117.002 103.604 116.829 104.199 116.504C104.809 116.156 105.294 115.702 105.652 115.144C106.017 114.597 106.206 113.974 106.219 113.274C106.226 112.593 106.021 111.885 105.603 111.153ZM91.7038 127.308L90.3623 127.634L87.368 115.337L88.7095 115.01L91.7038 127.308ZM74.8418 116.538C75.7873 116.569 76.6554 116.816 77.446 117.277C78.2239 117.737 78.8365 118.359 79.284 119.141C79.7187 119.923 79.9206 120.78 79.8898 121.713C79.8565 122.722 79.6036 123.603 79.131 124.355C78.6453 125.119 77.9994 125.699 77.1933 126.094C76.3744 126.489 75.4794 126.671 74.5083 126.639C73.5116 126.606 72.6242 126.366 71.8459 125.918C71.0548 125.469 70.4422 124.848 70.0079 124.053C69.5733 123.272 69.3726 122.376 69.4059 121.367C69.4371 120.421 69.6954 119.573 70.1807 118.821C70.6655 118.082 71.3176 117.509 72.137 117.101C72.9563 116.693 73.8579 116.506 74.8418 116.538ZM78.529 121.668C78.5526 120.952 78.3953 120.295 78.0569 119.695C77.7185 119.095 77.261 118.62 76.6842 118.268C76.1074 117.917 75.4867 117.73 74.8223 117.708C74.1323 117.685 73.4818 117.824 72.8707 118.123C72.2596 118.423 71.7657 118.854 71.389 119.417C70.999 119.993 70.7916 120.658 70.7667 121.411C70.741 122.191 70.8971 122.887 71.235 123.499C71.5602 124.111 72.0178 124.587 72.6078 124.926C73.1845 125.278 73.8307 125.465 74.5463 125.489C75.2362 125.512 75.8804 125.373 76.4787 125.073C77.077 124.773 77.565 124.329 77.9425 123.74C78.3069 123.163 78.5024 122.473 78.529 121.668ZM58.8611 125.198L57.5823 124.731L58.557 122.065C58.0523 122.738 57.3639 123.188 56.4919 123.413C55.6035 123.646 54.751 123.614 53.9346 123.315C53.7305 123.241 53.5269 123.146 53.324 123.031L54.3134 122.167C54.3931 122.21 54.511 122.26 54.6671 122.317C55.1954 122.51 55.7704 122.557 56.392 122.458C57.0017 122.354 57.5652 122.097 58.0826 121.688C58.5955 121.29 58.975 120.755 59.2208 120.082L60.8672 115.58L62.2 116.067L58.8611 125.198ZM44.1305 119.282L42.9964 118.529L48.3765 110.43L49.5105 111.184L44.1305 119.282ZM43.038 121.273C42.9178 121.454 42.7531 121.552 42.5439 121.566C42.317 121.584 42.1024 121.526 41.9 121.392C41.6977 121.257 41.5662 121.086 41.5056 120.877C41.4379 120.678 41.4642 120.488 41.5845 120.307C41.6977 120.137 41.8677 120.043 42.0946 120.025C42.3109 119.999 42.5148 120.051 42.7065 120.178C42.8982 120.305 43.0297 120.477 43.1009 120.693C43.1722 120.909 43.1512 121.103 43.038 121.273ZM38.9946 102.018C39.5723 102.702 39.9469 103.481 40.1184 104.358C40.2817 105.224 40.2231 106.086 39.9427 106.942C39.654 107.789 39.1484 108.517 38.4259 109.128C37.6351 109.797 36.7982 110.203 35.9153 110.347C35.0324 110.49 34.1871 110.401 33.3795 110.08C32.5636 109.748 31.8627 109.236 31.2767 108.543C30.7072 107.869 30.3337 107.13 30.1561 106.326C29.9606 105.52 29.9925 104.707 30.2519 103.885C30.503 103.053 30.9894 102.282 31.7112 101.571L32.1652 101.187L37.8624 107.897C38.337 107.429 38.6597 106.88 38.8304 106.25C38.9914 105.628 39.0074 105.004 38.8786 104.376C38.74 103.757 38.4858 103.218 38.1159 102.761C37.6784 102.244 37.1396 101.854 36.4993 101.591C35.8493 101.337 35.1876 101.277 34.5141 101.411L34.2579 100.247C35.1259 100.066 35.9817 100.137 36.8253 100.462C37.6607 100.777 38.3838 101.296 38.9946 102.018ZM32.348 102.74C31.8621 103.235 31.5435 103.789 31.3923 104.402C31.2231 105.014 31.2086 105.62 31.3487 106.222C31.4888 106.823 31.7528 107.353 32.1407 107.812C32.5286 108.271 33.0033 108.615 33.5647 108.843C34.1262 109.072 34.7226 109.153 35.354 109.088C35.9756 109.032 36.5665 108.8 37.1268 108.393L32.348 102.74ZM29.8296 88.5181C30.2428 89.6737 30.3018 90.7117 30.0063 91.632C29.6945 92.5445 29.0533 93.1812 28.0825 93.5419L27.6499 92.3321C28.9636 91.7537 29.3785 90.6549 28.8946 89.0357C28.7077 88.4373 28.382 87.9631 27.9174 87.6133C27.4409 87.2678 26.9558 87.1833 26.4623 87.3598C25.9687 87.5363 25.6722 87.8461 25.5726 88.289C25.461 88.7362 25.4879 89.419 25.6534 90.3374C25.8956 91.6221 25.9356 92.6261 25.7734 93.3494C25.6069 94.0607 25.1143 94.5627 24.2957 94.8554C23.5133 95.1352 22.7754 95.0461 22.0821 94.5881C21.3767 94.1343 20.8432 93.4018 20.4816 92.3906C20.0812 91.2711 20.0214 90.2878 20.3023 89.4406C20.5788 88.5813 21.1956 87.9331 22.1526 87.4958L22.5788 88.6876C21.9743 88.9716 21.5755 89.4129 21.3822 90.0116C21.1727 90.6025 21.2056 91.2831 21.4811 92.0535C21.7007 92.6675 22.0462 93.121 22.5176 93.414C22.9846 93.695 23.4589 93.7494 23.9405 93.5772C24.4177 93.393 24.7159 93.0691 24.8353 92.6055C24.9546 92.1419 24.9315 91.4509 24.766 90.5326C24.6126 89.6099 24.5439 88.8673 24.56 88.3049C24.5718 87.7304 24.6971 87.2647 24.936 86.9077C25.175 86.5507 25.5653 86.2754 26.107 86.0816C26.8894 85.8018 27.6192 85.8871 28.2962 86.3374C28.9611 86.792 29.4722 87.5189 29.8296 88.5181ZM33.8323 46.7715C33.271 47.5331 32.5766 48.1091 31.7488 48.4996C30.9287 48.8798 30.0747 49.0366 29.1868 48.9699C28.2963 48.8853 27.4702 48.5624 26.7087 48.0012C25.8853 47.3944 25.2977 46.6834 24.9456 45.8681C24.5909 45.035 24.484 44.178 24.6249 43.2972C24.7555 42.4088 25.1128 41.5684 25.6968 40.776C26.3339 39.9115 27.1213 39.2848 28.059 38.8959C28.9864 38.4995 29.8983 38.3934 30.7948 38.5776L30.4608 39.9037C29.736 39.7666 29.0258 39.8467 28.3303 40.144C27.632 40.4235 27.0629 40.8617 26.623 41.4586C26.2135 42.0143 25.968 42.6275 25.8867 43.2981C25.7951 43.9611 25.885 44.615 26.1563 45.2596C26.4353 45.8939 26.8886 46.4424 27.5164 46.9051C28.0927 47.3298 28.7238 47.5726 29.4096 47.6333C30.0954 47.694 30.7465 47.5863 31.3629 47.31C31.9794 47.0338 32.4848 46.6281 32.8792 46.093C33.3343 45.4755 33.5906 44.7829 33.6481 44.0154C33.7055 43.2478 33.5564 42.5344 33.2005 41.8751L34.3722 41.1902C34.8191 42.0277 35.0008 42.9556 34.9173 43.974C34.831 44.9745 34.4694 45.907 33.8323 46.7715ZM44.5613 35.5186C43.7929 36.0255 42.9743 36.3053 42.1053 36.3579C41.24 36.3927 40.4147 36.2097 39.6294 35.8088C38.8442 35.4079 38.1981 34.8233 37.6912 34.055C37.1209 33.1906 36.8006 32.3222 36.7303 31.4496C36.6601 30.577 36.8217 29.7657 37.2154 29.0159C37.6019 28.2554 38.1794 27.6217 38.9477 27.1148C39.7481 26.5868 40.6128 26.3072 41.5419 26.2762C42.4711 26.2452 43.2962 26.4743 44.0172 26.9635L42.6548 24.8987L43.8073 24.1383L49.1616 32.2537L48.0251 33.0035L46.6311 30.8906C46.7972 31.746 46.6903 32.6053 46.3103 33.4687C45.9233 34.3213 45.3403 35.0047 44.5613 35.5186ZM38.8277 33.3052C39.229 33.9134 39.741 34.3644 40.3636 34.6582C40.9863 34.9519 41.6346 35.0756 42.3085 35.0292C42.986 34.965 43.6076 34.7464 44.1732 34.3732C44.7317 33.9894 45.1737 33.4987 45.4993 32.901C45.8177 32.2926 45.968 31.6498 45.9499 30.9725C45.9355 30.2774 45.7277 29.6258 45.3264 29.0175C44.8899 28.3559 44.3549 27.8817 43.7216 27.5951C43.0919 27.2906 42.4383 27.1705 41.7607 27.2346C41.0832 27.2988 40.4581 27.5121 39.8855 27.8745C39.2986 28.2618 38.8442 28.7454 38.5223 29.3253C38.1933 29.8946 38.0449 30.5286 38.077 31.2273C38.1128 31.9083 38.363 32.6009 38.8277 33.3052ZM50.2099 17.1119L51.5155 16.6626L55.6335 28.6305L54.328 29.0798L50.2099 17.1119ZM66.7236 26.5734C65.7808 26.6516 64.8901 26.5073 64.0515 26.1407C63.2256 25.773 62.5453 25.2265 62.0105 24.5012C61.4885 23.7748 61.1889 22.9465 61.1118 22.0164C61.0283 21.0099 61.1778 20.106 61.5604 19.3045C61.9546 18.4893 62.5292 17.8388 63.2843 17.3528C64.0521 16.8658 64.9201 16.5822 65.8884 16.5019C66.8822 16.4195 67.7915 16.5557 68.6163 16.9107C69.4538 17.2645 70.1341 17.8111 70.6572 18.5502C71.1793 19.2766 71.482 20.1431 71.5655 21.1496C71.6437 22.0924 71.4851 22.9651 71.0899 23.7675C70.6935 24.5573 70.112 25.202 69.3452 25.7017C68.5785 26.2015 67.7046 26.492 66.7236 26.5734ZM62.4686 21.9039C62.5278 22.6174 62.7601 23.2524 63.1654 23.8089C63.5707 24.3654 64.0802 24.785 64.6937 25.0676C65.3073 25.3503 65.9453 25.4641 66.6078 25.4092C67.2958 25.3521 67.926 25.1395 68.4984 24.7714C69.0708 24.4032 69.5116 23.9176 69.8208 23.3147C70.1417 22.698 70.2709 22.0138 70.2086 21.2621C70.1442 20.4849 69.9088 19.8117 69.5024 19.2425C69.1087 18.6722 68.5993 18.2526 67.974 17.9838C67.3605 17.7011 66.697 17.5894 65.9835 17.6485C65.2955 17.7056 64.6717 17.9177 64.112 18.2848C63.5524 18.6519 63.119 19.1496 62.8119 19.778C62.5165 20.3926 62.4021 21.1013 62.4686 21.9039ZM79.9945 16.1488L81.3276 16.4257L80.7504 19.2046C81.152 18.4654 81.7678 17.9208 82.5978 17.5709C83.4429 17.2111 84.2911 17.1196 85.1423 17.2964C85.3551 17.3406 85.5702 17.4049 85.7877 17.4893L84.9341 18.4871C84.8491 18.4564 84.7252 18.4241 84.5625 18.3903C84.0117 18.2759 83.436 18.313 82.8354 18.5017C82.2473 18.6929 81.727 19.0288 81.2747 19.5093C80.8249 19.9774 80.5272 20.5619 80.3816 21.2628L79.4066 25.9568L78.0172 25.6682L79.9945 16.1488ZM93.8483 19.4329L95.098 19.9734L91.2385 28.8971L89.9888 28.3566L93.8483 19.4329ZM94.5706 17.2799C94.6568 17.0804 94.8016 16.955 95.0049 16.9036C95.225 16.8456 95.4465 16.8648 95.6695 16.9612C95.8924 17.0577 96.0523 17.2034 96.149 17.3984C96.2508 17.5818 96.2585 17.7731 96.1723 17.9726C96.0911 18.1604 95.9404 18.2833 95.7203 18.3413C95.5119 18.4044 95.3022 18.3903 95.0909 18.2989C94.8797 18.2076 94.7199 18.0618 94.6114 17.8617C94.503 17.6616 94.4894 17.4676 94.5706 17.2799ZM100.842 34.8563C100.137 34.3058 99.6103 33.6194 99.2628 32.797C98.9254 31.9824 98.8062 31.1273 98.905 30.2315C99.014 29.3437 99.3594 28.5268 99.9414 27.7809C100.578 26.9644 101.314 26.3953 102.149 26.0736C102.984 25.752 103.829 25.6658 104.686 25.815C105.552 25.9722 106.343 26.3299 107.059 26.8883C107.754 27.4309 108.271 28.0775 108.61 28.8281C108.967 29.5765 109.102 30.3796 109.017 31.2372C108.942 32.1027 108.624 32.9572 108.063 33.8007L107.697 34.2694L100.745 28.8702C100.377 29.4259 100.173 30.0294 100.136 30.6808C100.105 31.3221 100.218 31.9367 100.473 32.5246C100.735 33.1025 101.094 33.5773 101.55 33.9491C102.084 34.3659 102.692 34.637 103.372 34.7625C104.06 34.8779 104.72 34.801 105.352 34.5317L105.842 35.6189C105.029 35.9743 104.177 36.0795 103.285 35.9347C102.402 35.7977 101.588 35.4382 100.842 34.8563ZM107.2 32.7869C107.574 32.2033 107.772 31.5959 107.794 30.9646C107.835 30.3312 107.725 29.7345 107.464 29.1746C107.204 28.6147 106.837 28.1499 106.363 27.7803C105.889 27.4107 105.354 27.1717 104.758 27.0631C104.161 26.9546 103.561 26.9969 102.956 27.19C102.359 27.373 101.829 27.7209 101.364 28.2337L107.2 32.7869ZM111.909 45.1525C111.178 44.1664 110.821 43.19 110.837 42.2236C110.871 41.2599 111.3 40.4646 112.124 39.838L112.889 40.8704C111.8 41.8049 111.721 42.9768 112.654 44.386C113.006 44.9046 113.455 45.264 114.001 45.4641C114.557 45.6566 115.046 45.5969 115.467 45.2849C115.888 44.9729 116.083 44.5905 116.049 44.1377C116.027 43.6773 115.803 43.0316 115.378 42.2007C114.774 41.0414 114.445 40.0921 114.39 39.3528C114.343 38.6238 114.669 38.0006 115.368 37.4831C116.036 36.9884 116.768 36.8598 117.564 37.0972C118.371 37.327 119.093 37.8734 119.733 38.7363C120.44 39.6917 120.783 40.6155 120.76 41.5077C120.744 42.4102 120.342 43.2094 119.552 43.9053L118.799 42.8883C119.295 42.4412 119.549 41.9032 119.56 41.2743C119.59 40.648 119.361 40.0062 118.874 39.3487C118.486 38.8248 118.024 38.4909 117.487 38.3471C116.959 38.2136 116.489 38.299 116.078 38.6034C115.675 38.9181 115.484 39.3145 115.504 39.7928C115.524 40.2711 115.746 40.9257 116.171 41.7566C116.585 42.5952 116.866 43.286 117.014 43.8289C117.169 44.3821 117.184 44.8642 117.059 45.2751C116.934 45.6861 116.64 46.0627 116.178 46.4052C115.51 46.8998 114.787 47.0298 114.009 46.795C113.24 46.5527 112.54 46.0052 111.909 45.1525Z'
                  fill='#FF1275'
                />
                <circle
                  cx='72.4989'
                  cy='72.5133'
                  r='70.3819'
                  transform='rotate(-0.904272 72.4989 72.5133)'
                  stroke='#FF1275'
                  strokeWidth='1.99867'
                />
              </svg>
            </div>

            {/* Left Content - Full Width */}
            <div className='text-left pt-24'>
              {/* Heading */}
              <h2
                className='font-aloevera mb-12'
                style={{
                  color: "#FF1275",
                  fontSize: "140px",
                  lineHeight: "0.9",
                  fontWeight: "100",
                  letterSpacing: "0.03em",
                }}
              >
                cola sublimé
              </h2>

              {/* CTA Button */}
              <button
                className='px-10 py-3 rounded-full text-xs font-semibold hover:opacity-70 transition uppercase tracking-widest font-aloevera'
                style={{
                  border: "none",
                  backgroundColor: "#FF1275",
                  color: "#500730",
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
        style={{ backgroundColor: "#500730" }}
      >
        <div className='relative max-w-7xl mx-auto px-8 lg:px-16 h-full min-h-96 flex items-center justify-between'>
          {/* Left Content */}
          <div className='text-center flex-1 z-10'>
            <h2
              className='font-aloevera mb-8'
              style={{
                color: "#FF1275",
                fontSize: "120px",
                lineHeight: "1.1",
                fontWeight: "100",
                letterSpacing: "0.02em",
              }}
            >
              13g
              <br />
              sugar
              <br />
              <span style={{ fontSize: "80px", fontStyle: "italic" }}>
                from dates
              </span>
            </h2>
          </div>

          {/* Right Image - Rotated and Mirrored */}
          <div className='absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none'>
            <div
              style={{
                width: "689px",
                height: "473px",
                position: "relative",
                transform: "translateX(100px) rotateY(180deg) rotate(330deg)",
                opacity: 1,
              }}
            >
              <img
                src='/images/hero3.png'
                alt='Sugar from dates'
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Soda Back to Its Senses Section */}
      <section
        className='relative w-full py-32 pb-0 overflow-visible'
        style={{ backgroundColor: "#500730" }}
      >
        <div className='relative max-w-7xl mx-auto px-8 lg:px-16 flex flex-col'>
          {/* Main Row - Heading and Ingredients */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-20'>
            {/* Left - Heading */}
            <div>
              <h2
                className='font-nineties'
                style={{
                  color: "#FF1275",
                  fontSize: "140px",
                  lineHeight: "1.1",
                  fontWeight: "100",
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
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
                  style={{
                    color: "#FF1275",
                    fontSize: "16px",
                    fontStyle: "italic",
                    fontWeight: "100",
                    letterSpacing: "0.05em",
                  }}
                >
                  ingredients
                </p>
                <p
                  style={{
                    color: "#FF1275",
                    fontSize: "13px",
                    fontWeight: "400",
                    letterSpacing: "0.08em",
                    lineHeight: "1.6",
                  }}
                  className='font-aloevera'
                >
                  Why it's there
                </p>
              </div>

              {/* Real Spices */}
              <div className='grid grid-cols-2 gap-4'>
                <p
                  style={{
                    color: "#FF1275",
                    fontSize: "16px",
                    fontStyle: "italic",
                    fontWeight: "100",
                    letterSpacing: "0.05em",
                  }}
                >
                  real spices
                </p>
                <p
                  style={{
                    color: "#FF1275",
                    fontSize: "13px",
                    fontWeight: "400",
                    letterSpacing: "0.08em",
                    lineHeight: "1.6",
                  }}
                  className='font-aloevera'
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
                  style={{
                    color: "#FF1275",
                    fontSize: "16px",
                    fontStyle: "italic",
                    fontWeight: "100",
                    letterSpacing: "0.05em",
                  }}
                >
                  dates
                </p>
                <p
                  style={{
                    color: "#FF1275",
                    fontSize: "13px",
                    fontWeight: "400",
                    letterSpacing: "0.08em",
                    lineHeight: "1.6",
                  }}
                  className='font-aloevera'
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
                  style={{
                    color: "#FF1275",
                    fontSize: "16px",
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
                  style={{
                    color: "#FF1275",
                    fontSize: "13px",
                    fontWeight: "400",
                    letterSpacing: "0.08em",
                    lineHeight: "1.6",
                  }}
                  className='font-aloevera'
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
        style={{ backgroundColor: "#350622" }}
      >
        <div className='relative max-w-7xl mx-auto px-8 lg:px-16'>
          {/* Comparison Grid - Similar to Reference Image */}
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* Column Headers */}
            <div className='col-span-1 lg:col-span-4'>
              <div className='grid grid-cols-4 gap-8 mb-8'>
                <div></div>
                <div
                  style={{
                    color: "#FF1275",
                    fontSize: "18px",
                    fontStyle: "italic",
                    letterSpacing: "0.05em",
                  }}
                  className='font-nineties'
                >
                  BIG SODA
                </div>
                <div
                  style={{
                    color: "#FF1275",
                    fontSize: "18px",
                    fontStyle: "italic",
                    letterSpacing: "0.05em",
                  }}
                  className='font-nineties'
                >
                  GUT SODA
                </div>
                <div
                  style={{
                    color: "#FF1275",
                    fontSize: "18px",
                    fontStyle: "italic",
                    letterSpacing: "0.05em",
                  }}
                  className='font-nineties'
                >
                  <img
                    src='/images/logo.png'
                    alt='UPON! Logo'
                    className='w-16 h-auto drop-shadow-lg'
                  />
                </div>
              </div>
            </div>

            {/* Sweetener Row */}
            <div
              style={{
                color: "#FF1275",
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "100",
                letterSpacing: "0.05em",
              }}
              className='font-nineties'
            >
              Sweetener
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              HF CORN SYRUP OR ASPARTAME
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              STEVIA + SUGAR + PREBIOTICS
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              DATE SYRUP + STEVIA
            </div>

            {/* Aftertaste Row */}
            <div
              style={{
                color: "#FF1275",
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "100",
                letterSpacing: "0.05em",
              }}
              className='font-nineties'
            >
              Aftertaste
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              CLOYING SUGAR CRASH
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              CHALKY, FAKE-SWEET
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              CLEAN, CRISP, & GONE
            </div>

            {/* The Talk Row */}
            <div
              style={{
                color: "#FF1275",
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "100",
                letterSpacing: "0.05em",
              }}
              className='font-nineties'
            >
              The talk
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              NOSTALGIA & JINGLES
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              SCIENCE PROJECT MEETS NSYNC
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              HONESTLY
            </div>

            {/* The Feels Row */}
            <div
              style={{
                color: "#FF1275",
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "100",
                letterSpacing: "0.05em",
              }}
              className='font-nineties'
            >
              The feels
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              HEAVY
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              CONFUSED
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              ALIVE, FIZZY, REAL
            </div>

            {/* What You're Buying Row */}
            <div
              style={{
                color: "#FF1275",
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "100",
                letterSpacing: "0.05em",
              }}
              className='font-nineties'
            >
              What you're buying
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              A FEELING FROM 1987
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              QUESTIONABLE GUT SCIENCE
            </div>
            <div
              style={{
                color: "#FF1275",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                lineHeight: "1.6",
              }}
              className='font-aloevera'
            >
              SODA, HOW IT OUGHT TO BE
            </div>
          </div>

          {/* CTA Button */}
          <div className='flex justify-center mt-16'>
            <button
              className='px-10 py-3 rounded-full text-xs font-semibold hover:opacity-70 transition uppercase tracking-widest font-aloevera'
              style={{
                border: "none",
                backgroundColor: "#FF1275",
                color: "#500730",
              }}
            >
              GET YOUR 12 PACK
            </button>
          </div>
        </div>
      </section>
      <section
        className='relative w-full py-32 overflow-visible'
        style={{ backgroundColor: "#500730" }}
      >
        <div className='relative max-w-7xl mx-auto px-8 lg:px-16'>
          {/* Heading */}
          <div className='text-center mb-16'>
            <h2
              className='font-nineties'
              style={{
                color: "#FF1275",
                fontSize: "120px",
                lineHeight: "1.1",
                fontWeight: "100",
                fontStyle: "italic",
                letterSpacing: "0.02em",
                textDecoration: "underline",
                textDecorationColor: "#FF1275",
                textDecorationThickness: "2px",
                textUnderlineOffset: "12px",
              }}
            >
              our
              <br />
              story
            </h2>
          </div>

          {/* Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
            {/* Left - Story Text */}
            <div
              className='space-y-3 font-aloevera tracking-widest text-xs md:text-sm'
              style={{ color: "#FF1275" }}
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
            </div>

            {/* Right - Image */}
            <div className='flex justify-center items-start'>
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
        <div className='relative py-24 px-8 flex items-center justify-between w-full min-h-96'>
          <div className='relative w-full px-16 mx-auto flex items-end justify-between gap-16'>
            {/* Left Content */}
            <div className='text-left z-20 flex items-end gap-8'>
              {/* Heading */}
              <h2
                className='font-aloevera'
                style={{
                  color: "#FF1275",
                  fontSize: "140px",
                  lineHeight: "0.9",
                  fontWeight: "100",
                  letterSpacing: "0.03em",
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
                className='px-8 py-2 rounded-full text-xs font-semibold hover:opacity-70 transition uppercase tracking-widest font-aloevera'
                style={{
                  border: "1px solid #FF1275",
                  backgroundColor: "transparent",
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
          className='absolute bottom-0 right-24 pointer-events-none z-10 flex items-end'
          style={{ width: "30%", zIndex: 11111111 }}
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
        style={{ backgroundColor: "#500730" }}
      >
        {/* Main Content */}
        <div className='relative w-full flex flex-col items-center justify-start pt-20 pb-20'>
          {/* Text Content - Centered with Tilt */}
          <div
            className='z-20 text-center max-w-4xl px-8 mb-20'
            style={{ transform: "skewY(-2deg)" }}
          >
            <p
              className='font-nineties italic'
              style={{
                color: "#FF1275",
                fontSize: "56px",
                lineHeight: "1.3",
                fontWeight: "700",
                letterSpacing: "0.02em",
              }}
            >
              REAL FRUIT. PLENTY OF FIZZ.
            </p>
            <p
              className='font-nineties italic mt-6'
              style={{
                color: "#FF1275",
                fontSize: "56px",
                lineHeight: "1.3",
                fontWeight: "700",
                letterSpacing: "0.02em",
              }}
            >
              YOU DRINK IT, YOU BURP.
            </p>
            <p
              className='font-nineties italic mt-6'
              style={{
                color: "#FF1275",
                fontSize: "56px",
                lineHeight: "1.3",
                fontWeight: "700",
                letterSpacing: "0.02em",
              }}
            >
              MAYBE YOU SMILE.
            </p>
            <p
              className='font-nineties italic mt-6'
              style={{
                color: "#FF1275",
                fontSize: "56px",
                lineHeight: "1.3",
                fontWeight: "700",
                letterSpacing: "0.02em",
              }}
            >
              THAT'S IT, THAT'S THE
            </p>
            <p
              className='font-nineties italic mt-6'
              style={{
                color: "#FF1275",
                fontSize: "64px",
                lineHeight: "1.3",
                fontWeight: "900",
                letterSpacing: "0.02em",
              }}
            >
              WHOLE BUSINESS PLAN.
            </p>
            <p
              className='font-nineties italic mt-12'
              style={{
                color: "#FF1275",
                fontSize: "36px",
                lineHeight: "1.3",
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
        className='relative w-full py-0 overflow-hidden'
        style={{ backgroundColor: "#500730" }}
      >
        {/* Main Content */}
        <div className='relative w-full flex flex-col items-start justify-start pt-24 pb-0'>
          <div className='max-w-6xl mx-auto px-8 lg:px-16 w-full'>
            {/* Heading */}
            <h2
              className='font-nineties italic'
              style={{
                color: "#FF1275",
                fontSize: "80px",
                lineHeight: "1.2",
                fontWeight: "600",
                letterSpacing: "0.02em",
                marginBottom: "48px",
              }}
            >
              frequently
              <br />
              asked
              <br />
              questions
            </h2>

            {/* FAQ Accordion */}
            <div className='space-y-0'>
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
                      className='font-aloevera'
                      style={{
                        fontSize: "16px",
                        fontStyle: "italic",
                        fontWeight: "700",
                        letterSpacing: "0.03em",
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
                      className='pb-6 font-aloevera'
                      style={{
                        color: "#FF1275",
                        fontSize: "14px",
                        fontWeight: "400",
                        letterSpacing: "0.03em",
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

        {/* Bottom Pattern */}
        <div
          className='w-full h-20 flex items-center mt-24'
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #FF1275 0px, #FF1275 2px, transparent 2px, transparent 12px)",
            opacity: 0.3,
          }}
        ></div>
      </section>

      {/* Footer Section */}
      <footer
        className='relative w-full py-0 overflow-hidden'
        style={{ backgroundColor: "#350622" }}
      >
        {/* Logo at Top */}
        <div className='w-full px-8 lg:px-16 pt-24 '>
          <img
            src='/images/logo.png'
            alt='UNPOP! Logo'
            className='w-24 h-auto drop-shadow-lg'
          />
        </div>

        {/* 5 Column Grid */}
        <div className='w-full px-8 lg:px-16 py-12'>
          <div className='grid grid-cols-5 gap-8'>
            {/* Column 1 - UNPOP! Links */}
            <div className='flex flex-col gap-4'>
              <p
                style={{
                  color: "#FF1275",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
                className='font-aloevera'
              >
                UNPOP!
              </p>
              <a
                href='#'
                style={{
                  color: "#FF1275",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-aloevera hover:opacity-70 transition'
              >
                Buy Unpop!
              </a>
              <a
                href='#'
                style={{
                  color: "#FF1275",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-aloevera hover:opacity-70 transition'
              >
                Our Story
              </a>
            </div>

            {/* Column 2 - SUPPORT Links */}
            <div className='flex flex-col gap-4'>
              <p
                style={{
                  color: "#FF1275",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
                className='font-aloevera'
              >
                SUPPORT
              </p>
              <a
                href='#'
                style={{
                  color: "#FF1275",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-aloevera hover:opacity-70 transition'
              >
                Contact Us
              </a>
              <a
                href='#'
                style={{
                  color: "#FF1275",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-aloevera hover:opacity-70 transition'
              >
                FAQ
              </a>
            </div>

            {/* Column 3 - MORE Links */}
            <div className='flex flex-col gap-4'>
              <p
                style={{
                  color: "#FF1275",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
                className='font-aloevera'
              >
                MORE
              </p>
              <a
                href='#'
                style={{
                  color: "#FF1275",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-aloevera hover:opacity-70 transition'
              >
                Terms of use
              </a>
              <a
                href='#'
                style={{
                  color: "#FF1275",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-aloevera hover:opacity-70 transition'
              >
                Sales Policy
              </a>
              <a
                href='#'
                style={{
                  color: "#FF1275",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
                className='font-aloevera hover:opacity-70 transition'
              >
                Privacy Policy
              </a>
            </div>

            {/* Column 4 - KEEP IN TOUCH */}
            <div className='flex flex-col gap-4'>
              <p
                style={{
                  color: "#FF1275",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
                className='font-aloevera'
              >
                KEEP IN TOUCH!
              </p>
              <div className='flex gap-2'>
                <input
                  type='email'
                  placeholder='Email address'
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #FF1275",
                    color: "#FF1275",
                    padding: "8px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    flex: 1,
                  }}
                  className='font-aloevera'
                />
                <button
                  style={{
                    border: "1px solid #FF1275",
                    backgroundColor: "transparent",
                    color: "#FF1275",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "700",
                    cursor: "pointer",
                    letterSpacing: "0.03em",
                  }}
                  className='font-aloevera hover:opacity-70 transition'
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Column 5 - Email and Social */}
            <div className='flex flex-col gap-4'>
              <p
                style={{
                  color: "#FF1275",
                  fontSize: "12px",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                }}
                className='font-aloevera'
              >
                hello@drinkunpop.com
              </p>

              {/* Social Icons */}
              <div className='flex gap-4'>
                {/* Instagram */}
                <a
                  href='#'
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "2px solid #FF1275",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                  className='hover:opacity-70 transition'
                >
                  <svg
                    width='16'
                    height='16'
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
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "2px solid #FF1275",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                  className='hover:opacity-70 transition'
                >
                  <svg
                    width='16'
                    height='16'
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
          className='w-full px-8 lg:px-16 py-6 border-t'
          style={{ borderColor: "#FF1275" }}
        >
          <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
            <p
              style={{
                color: "#FF1275",
                fontSize: "12px",
                fontWeight: "400",
                letterSpacing: "0.02em",
              }}
              className='font-aloevera'
            >
              2025 © UNPOP!
            </p>
            <p
              style={{
                color: "#FF1275",
                fontSize: "12px",
                fontWeight: "400",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
              className='font-aloevera'
            >
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
