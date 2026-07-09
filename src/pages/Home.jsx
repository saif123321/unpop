import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Scroll3DSection from "../components/scroll-3d-section";
import CartModal from "../components/cart-modal";
import Footer from "../components/Footer";
import { useBuyNow } from "../hooks/useBuyNow";

export default function Home() {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { handleBuyNow, isBuying, buyNowLabel } = useBuyNow();

  useEffect(() => {
    document.title = 'UnPop! | Radically Honest Botanical Craft Soft Drinks';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Reject wellness fatigue and pseudo-medical hype. Experience an elite, low-sugar craft soda brewed with whole organic dates and real botanical barks.';

    // Open Graph tags
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://drinkunpop.com/' },
      { property: 'og:title', content: 'UNPOP | Craft Soda Redefined' },
      { property: 'og:description', content: 'Real spices, wellness-focused flavors, and zero junk. Experience the new sound of craft soda.' },
      { property: 'og:image', content: 'https://drinkunpop.com/assets/og-homepage-banner.jpg' },
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    // Twitter tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://drinkunpop.com/' },
      { name: 'twitter:title', content: 'UNPOP | Craft Soda Redefined' },
      { name: 'twitter:description', content: 'Real spices, wellness-focused flavors, and zero junk. Experience the new sound of craft soda.' },
      { name: 'twitter:image', content: 'https://drinkunpop.com/assets/og-homepage-banner.jpg' },
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = tag.name;
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://drinkunpop.com/';
  }, []);

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
      style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)" }}>
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
            href='/contact-us'
            className='hover:opacity-70 transition-opacity duration-300 cursor-pointer text-[0.65rem] sm:text-xs md:text-sm lg:text-base'
            style={{ color: "#FF1275" }}
          >
            Contact Us
          </a>
          <button
            className='px-2 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full text-[0.6rem] sm:text-xs md:text-sm font-semibold 
            bg-[#ff127514] hover:bg-[#FF1275] hover:text-black transition-all duration-300 font-montserrat cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed'
            style={{
              border: "1px solid #FF1275",
            }}
            onClick={handleBuyNow}
            disabled={isBuying}
          >
            {buyNowLabel || "Buy Now"}
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
                onClick={handleBuyNow}
                disabled={isBuying}
                className='px-6 sm:px-8 py-2 sm:py-3 rounded-full text-[0.7rem] sm:text-xs 
                md:text-sm font-semibold bg-[#ff127514]  hover:bg-[#FF1275] text-[#FF1275] 
                hover:text-black transition uppercase tracking-widest font-montserrat 
                whitespace-nowrap cursor-pointer md:z-[10000] disabled:opacity-50 disabled:cursor-not-allowed'
                style={{
                  border: `1px solid #FF1275`,
                  position: "relative",
                  pointerEvents: "auto"
                }}
              >
                {buyNowLabel || "Buy now"}
              </button>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className='p-3 rounded-full transition cursor-pointer'
              style={{
                border: '2px solid #FF1275',
                backgroundColor: '#410627',
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                zIndex: 10000,
                pointerEvents: "auto"
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
                onClick={handleBuyNow}
                disabled={isBuying}
                className='px-4 md:px-8 py-2 md:py-3 md:z-[10000] rounded-full text-xs md:text-sm font-semibold 
                transition uppercase tracking-widest
                bg-[#ff127514]  hover:bg-[#FF1275] text-[#FF1275] 
                hover:text-black
                font-montserrat cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                style={{
                  border: `2px solid #FF1275`,
                  position: "relative",
                }}
              >
                {buyNowLabel || "BUY a 12 PACK TODAY NOW"}
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
                fontSize: "clamp(4.5rem, 6vw, 8rem)",
              }}
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
                onClick={handleBuyNow}
                disabled={isBuying}
                className='px-6 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm 
                font-semibold bg-[#ff127514]  hover:bg-[#FF1275] text-[#FF1275] 
                hover:text-black transition uppercase tracking-widest 
                font-montserrat mt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                style={{
                  border: `2px solid #FF1275`,
                  position: "relative",
                  // zIndex: 10000
                }}
              >
                {buyNowLabel || "Grab a 12 pack"}
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
              <svg width="146" height="146" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.631 91.5596C52.8039 91.5596 50.3594 91.1439 48.2973 90.3124C46.2353 89.4809 44.6388 88.3002 43.508 86.7703C42.3772 85.2071 41.8118 83.3779 41.8118 81.2826C41.8118 79.2205 42.3439 77.4744 43.4082 76.0442C44.5058 74.5808 46.0856 73.4833 48.1477 72.7516C50.2097 71.9866 52.7042 71.6041 55.631 71.6041C58.5578 71.6041 61.0522 71.9866 63.1143 72.7516C65.2096 73.4833 66.806 74.5808 67.9036 76.0442C69.0011 77.5076 69.5499 79.2537 69.5499 81.2826C69.5499 83.3779 68.9845 85.2071 67.8537 86.7703C66.7229 88.3002 65.1098 89.4809 63.0145 90.3124C60.9192 91.1439 58.458 91.5596 55.631 91.5596ZM55.631 87.5186C58.4247 87.5186 60.6032 86.9532 62.1664 85.8224C63.7628 84.6584 64.561 83.0952 64.561 81.1329C64.561 79.2039 63.7628 77.6906 62.1664 76.593C60.6032 75.4622 58.4247 74.8968 55.631 74.8968C52.8705 74.8968 50.7086 75.4622 49.1454 76.593C47.5823 77.6906 46.8007 79.2039 46.8007 81.1329C46.8007 83.0952 47.5823 84.6584 49.1454 85.8224C50.7086 86.9532 52.8705 87.5186 55.631 87.5186ZM55.631 71.1053C58.0589 71.1053 59.9547 70.6064 61.3183 69.6086C62.7152 68.6108 63.4136 67.2472 63.4136 65.5177C63.4136 63.755 62.6985 62.3747 61.2684 61.377C59.8382 60.3792 57.9591 59.8803 55.631 59.8803C53.3028 59.8803 51.4403 60.3792 50.0434 61.377C48.6798 62.3747 47.998 63.755 47.998 65.5177C47.998 67.2472 48.6632 68.6108 49.9935 69.6086C51.3572 70.6064 53.2363 71.1053 55.631 71.1053ZM55.631 74.2981C52.9702 74.2981 50.7086 73.9489 48.8461 73.2505C46.9836 72.5188 45.5534 71.4877 44.5557 70.1574C43.5579 68.7937 43.059 67.1807 43.059 65.3182C43.059 63.3559 43.5745 61.6763 44.6056 60.2794C45.6699 58.8493 47.1499 57.7517 49.0457 56.9868C50.9414 56.2218 53.1365 55.8393 55.631 55.8393C58.1587 55.8393 60.3704 56.2218 62.2662 56.9868C64.1619 57.7517 65.642 58.8493 66.7063 60.2794C67.7706 61.6763 68.3027 63.3559 68.3027 65.3182C68.3027 67.1807 67.8038 68.7937 66.806 70.1574C65.8083 71.4877 64.3615 72.5188 62.4657 73.2505C60.5699 73.9489 58.2917 74.2981 55.631 74.2981ZM88.3856 91.5596C85.6584 91.5596 83.2138 90.8612 81.052 89.4643C78.9234 88.0674 77.2272 86.0386 75.9633 83.3779C74.7328 80.7172 74.1175 77.491 74.1175 73.6995C74.1175 69.9079 74.7328 66.6818 75.9633 64.0211C77.2272 61.3603 78.9234 59.3315 81.052 57.9346C83.2138 56.5378 85.6584 55.8393 88.3856 55.8393C91.0796 55.8393 93.5075 56.5378 95.6694 57.9346C97.8312 59.3315 99.5274 61.3603 100.758 64.0211C101.989 66.6818 102.604 69.9079 102.604 73.6995C102.604 77.491 101.989 80.7172 100.758 83.3779C99.5274 86.0386 97.8312 88.0674 95.6694 89.4643C93.5075 90.8612 91.0796 91.5596 88.3856 91.5596ZM88.3856 87.1195C90.2149 87.1195 91.8113 86.6206 93.175 85.6229C94.5718 84.6251 95.6528 83.1284 96.4177 81.1329C97.2159 79.1373 97.6151 76.6595 97.6151 73.6995C97.6151 70.7394 97.2159 68.2616 96.4177 66.2661C95.6528 64.2705 94.5718 62.7738 93.175 61.7761C91.8113 60.7783 90.2149 60.2794 88.3856 60.2794C86.5564 60.2794 84.9433 60.7783 83.5464 61.7761C82.1495 62.7738 81.052 64.2705 80.2538 66.2661C79.4888 68.2616 79.1063 70.7394 79.1063 73.6995C79.1063 76.6595 79.4888 79.1373 80.2538 81.1329C81.052 83.1284 82.1495 84.6251 83.5464 85.6229C84.9433 86.6206 86.5564 87.1195 88.3856 87.1195Z" fill="#FF1275" />
                <path d="M29.9922 54.3409C29.6089 55.2093 29.1108 55.9557 28.4979 56.5802C27.879 57.1889 27.1868 57.6552 26.4214 57.9788C25.6499 58.2868 24.8389 58.4346 23.9882 58.4223C23.1376 58.41 22.289 58.217 21.4423 57.8433C20.5955 57.4695 19.881 56.9725 19.2988 56.3524C18.7165 55.7322 18.287 55.0303 18.0103 54.2466C17.7228 53.4582 17.6008 52.6327 17.6444 51.7699C17.6771 50.9024 17.8875 50.029 18.2757 49.1497C18.6877 48.2162 19.2267 47.4359 19.8926 46.8089C20.5476 46.1771 21.3073 45.7343 22.1716 45.4803L22.8543 47.4158C22.2271 47.6319 21.6924 47.9471 21.2501 48.3614C20.7969 48.771 20.4386 49.2743 20.175 49.8714C19.9115 50.4684 19.7672 51.0597 19.7422 51.6453C19.722 52.2201 19.8095 52.771 20.0048 53.2982C20.2049 53.8146 20.5037 54.2837 20.9012 54.7055C21.3034 55.1166 21.7976 55.4514 22.3838 55.7102C22.97 55.9689 23.5504 56.1084 24.1252 56.1286C24.7047 56.138 25.2526 56.0426 25.769 55.8425C26.2901 55.6316 26.7562 55.325 27.1672 54.9227C27.583 54.5096 27.9227 54.0046 28.1862 53.4075C28.4498 52.8105 28.5856 52.209 28.5937 51.6029C28.5909 50.9921 28.4526 50.3798 28.1788 49.7661L30.0852 48.9733C30.4691 49.7783 30.6538 50.6381 30.6393 51.5526C30.6247 52.467 30.409 53.3965 29.9922 54.3409ZM33.5018 45.8689L28.6891 33.0822L30.3042 31.4754L43.0786 36.3409L41.3626 38.0482L30.0221 33.4883L30.6782 32.8356L35.1926 44.1867L33.5018 45.8689ZM33.2977 42.0046L32.4589 40.2782L37.2284 35.533L38.9505 36.3807L33.2977 42.0046ZM47.4874 32.7637L42.2603 21.4542L44.3606 20.4834L48.7663 30.0157L54.6796 27.2827L55.501 29.0599L47.4874 32.7637ZM66.7605 26.9851C65.7899 27.0521 64.8851 26.954 64.0462 26.6908C63.2074 26.4275 62.4665 26.0327 61.8235 25.5061C61.1798 24.9678 60.6656 24.3253 60.281 23.5788C59.8956 22.8204 59.671 21.9795 59.6073 21.0562C59.5436 20.1328 59.6508 19.275 59.9292 18.4827C60.2067 17.6785 60.6277 16.9715 61.1922 16.3616C61.7558 15.7399 62.435 15.241 63.2298 14.865C64.0245 14.489 64.9013 14.2679 65.8601 14.2017C66.8308 14.1347 67.7297 14.2332 68.5567 14.4973C69.3955 14.7605 70.1369 15.1613 70.7806 15.6996C71.4236 16.2261 71.9377 16.8686 72.3231 17.627C72.7077 18.3736 72.9319 19.2085 72.9956 20.1318C73.0594 21.0552 72.9525 21.9189 72.675 22.7231C72.3974 23.5272 71.9764 24.2343 71.412 24.8442C70.8475 25.454 70.1679 25.947 69.3731 26.323C68.5902 26.6982 67.7194 26.9189 66.7605 26.9851ZM66.603 24.9621C67.2304 24.9188 67.8031 24.7722 68.3211 24.5223C68.8391 24.2725 69.2799 23.9387 69.6436 23.5211C70.0064 23.0917 70.2764 22.6092 70.4535 22.0736C70.6417 21.5254 70.7137 20.9317 70.6695 20.2924C70.6254 19.6532 70.4729 19.0809 70.212 18.5756C69.9622 18.0576 69.6284 17.6168 69.2108 17.2531C68.7924 16.8776 68.3095 16.6017 67.7621 16.4254C67.2147 16.2491 66.6273 16.1826 65.9999 16.2259C65.3725 16.2693 64.7998 16.4158 64.2818 16.6657C63.7757 16.9147 63.3353 17.2544 62.9606 17.6846C62.5969 18.1023 62.321 18.5852 62.1329 19.1334C61.9557 19.669 61.8893 20.2563 61.9334 20.8956C61.9767 21.523 62.1233 22.0957 62.3731 22.6136C62.6348 23.1308 62.9749 23.5771 63.3933 23.9526C63.8109 24.3163 64.2934 24.5863 64.8408 24.7626C65.3882 24.9389 65.9756 25.0054 66.603 24.9621ZM79.912 26.5432L83.8968 14.7386L88.7367 16.3724C90.3106 16.9037 91.4164 17.6902 92.0541 18.7321C92.703 19.7777 92.8055 20.9582 92.3615 22.2735C92.0692 23.1392 91.6145 23.8185 90.9973 24.3115C90.3838 24.7932 89.6435 25.0755 88.7764 25.1586C87.9244 25.2341 86.9756 25.0954 85.93 24.7425L82.2874 23.5129L83.6014 22.8481L82.1042 27.2833L79.912 26.5432ZM87.6356 29.1504L86.0966 23.8595L88.4406 24.6507L89.9965 29.9474L87.6356 29.1504ZM83.5217 23.0842L82.8965 21.7085L86.4379 22.9039C87.4048 23.2303 88.2001 23.2671 88.824 23.0143C89.4591 22.7653 89.9018 22.2698 90.1523 21.5278C90.4066 20.7746 90.3547 20.1121 89.9966 19.5404C89.6498 18.9724 88.993 18.5253 88.0262 18.1989L84.4848 17.0035L85.8272 16.2544L83.5217 23.0842ZM95.9747 32.476L103.203 22.3278L105.087 23.6701L97.8594 33.8183L95.9747 32.476ZM103.741 38.5828L113.522 30.8641L119.156 38.0036L117.633 39.2055L113.432 33.8823L106.698 39.1972L111.053 44.7159L109.53 45.9178L103.741 38.5828ZM109.284 36.9293L110.779 35.7495L114.616 40.6116L113.121 41.7914L109.284 36.9293ZM114.27 55.2235C113.962 54.3005 113.796 53.3738 113.774 52.4432C113.762 51.5089 113.882 50.7246 114.133 50.0904L116.092 50.2809C115.878 50.8776 115.764 51.5662 115.749 52.3467C115.734 53.1272 115.849 53.8832 116.093 54.6148C116.3 55.2339 116.535 55.7122 116.797 56.0498C117.06 56.3874 117.334 56.6086 117.62 56.7136C117.916 56.8148 118.211 56.8165 118.503 56.7189C118.863 56.5986 119.107 56.3734 119.235 56.0431C119.373 55.7091 119.435 55.3132 119.42 54.8555C119.42 54.4052 119.391 53.908 119.335 53.364C119.282 52.8312 119.244 52.2871 119.222 51.7318C119.214 51.1839 119.259 50.6624 119.356 50.167C119.468 49.6792 119.684 49.2382 120.003 48.8441C120.321 48.4499 120.796 48.1477 121.426 47.9373C122.068 47.7232 122.71 47.6966 123.351 47.8577C124.008 48.0263 124.61 48.4069 125.158 48.9995C125.722 49.5997 126.183 50.44 126.544 51.5205C126.781 52.2296 126.926 52.9631 126.978 53.721C127.031 54.479 126.975 55.1732 126.81 55.8036L124.874 55.6806C125.013 55.0464 125.061 54.4235 125.02 53.8119C124.989 53.1965 124.888 52.63 124.715 52.1122C124.512 51.5044 124.274 51.0336 124 50.6998C123.729 50.3772 123.446 50.1653 123.15 50.0641C122.857 49.9742 122.558 49.98 122.255 50.0814C121.894 50.2016 121.643 50.4231 121.501 50.7459C121.373 51.0761 121.315 51.4645 121.327 51.911C121.342 52.3688 121.372 52.8716 121.417 53.4194C121.474 53.9635 121.512 54.5075 121.531 55.0516C121.553 55.6069 121.514 56.1266 121.413 56.6107C121.316 57.1061 121.106 57.5452 120.783 57.928C120.464 58.3221 119.996 58.6225 119.376 58.8292C118.746 59.0395 118.103 59.0604 117.446 58.8919C116.804 58.7308 116.202 58.3502 115.639 57.75C115.087 57.1462 114.631 56.304 114.27 55.2235Z" fill="#FF1275" />
                <path d="M114.281 89.0248C114.658 88.1537 115.151 87.4037 115.76 86.7749C116.374 86.1617 117.063 85.6905 117.826 85.3614C118.595 85.0479 119.405 84.8942 120.256 84.9004C121.107 84.9066 121.957 85.0935 122.806 85.4611C123.655 85.8288 124.373 86.3206 124.96 86.9366C125.547 87.5526 125.981 88.2514 126.264 89.033C126.557 89.8193 126.685 90.644 126.647 91.507C126.621 92.3748 126.417 93.2497 126.035 94.1317C125.63 95.0682 125.096 95.8523 124.435 96.4841C123.784 97.1205 123.028 97.5689 122.165 97.8291L121.469 95.8984C122.094 95.6779 122.627 95.3589 123.066 94.9413C123.516 94.5285 123.871 94.0226 124.13 93.4237C124.39 92.8248 124.53 92.2325 124.55 91.6467C124.567 91.0718 124.475 90.5215 124.276 89.9957C124.072 89.4808 123.77 89.0139 123.37 88.5949C122.964 88.1868 122.468 87.8554 121.88 87.6009C121.292 87.3464 120.71 87.2111 120.135 87.195C119.556 87.1898 119.009 87.2891 118.494 87.4929C117.974 87.7076 117.51 88.0175 117.102 88.4227C116.689 88.8388 116.353 89.3463 116.094 89.9452C115.835 90.5441 115.703 91.1466 115.7 91.7527C115.707 92.3634 115.849 92.9747 116.128 93.5865L114.227 94.3929C113.837 93.5907 113.646 92.7323 113.654 91.8177C113.662 90.9032 113.871 89.9722 114.281 89.0248ZM110.83 97.5257L115.841 110.236L114.251 111.868L101.402 107.201L103.092 105.467L114.502 109.851L113.856 110.514L109.166 99.2338L110.83 97.5257ZM111.094 101.386L111.96 103.1L107.264 107.918L105.529 107.097L111.094 101.386ZM97.0528 110.856L102.52 122.052L100.441 123.067L95.8327 113.631L89.9791 116.489L89.12 114.73L97.0528 110.856ZM77.9084 117.073C78.8771 116.982 79.7841 117.057 80.6293 117.299C81.4745 117.541 82.2251 117.917 82.8811 118.428C83.5383 118.95 84.0684 119.579 84.4717 120.315C84.8761 121.064 85.1217 121.899 85.2087 122.82C85.2957 123.742 85.2101 124.602 84.9518 125.401C84.6946 126.212 84.2916 126.929 83.7426 127.553C83.1948 128.189 82.5284 128.705 81.7434 129.101C80.9584 129.497 80.0874 129.74 79.1306 129.83C78.1619 129.922 77.2608 129.846 76.4274 129.603C75.5822 129.361 74.831 128.979 74.1739 128.457C73.5179 127.946 72.9877 127.317 72.5833 126.569C72.1801 125.832 71.9349 125.003 71.848 124.082C71.761 123.16 71.8461 122.294 72.1032 121.483C72.3604 120.672 72.7635 119.955 73.3124 119.331C73.8614 118.707 74.5283 118.197 75.3133 117.801C76.0865 117.406 76.9516 117.164 77.9084 117.073ZM78.1168 119.092C77.4907 119.151 76.9219 119.312 76.4104 119.575C75.8989 119.838 75.4666 120.182 75.1136 120.609C74.7616 121.047 74.5039 121.537 74.3403 122.076C74.1661 122.629 74.109 123.225 74.1693 123.862C74.2295 124.5 74.3964 125.069 74.6699 125.567C74.9327 126.079 75.2774 126.511 75.7041 126.864C76.1318 127.229 76.6215 127.493 77.1732 127.655C77.7249 127.817 78.3138 127.869 78.9399 127.81C79.566 127.751 80.1348 127.59 80.6463 127.327C81.146 127.065 81.5777 126.715 81.9415 126.275C82.2945 125.849 82.5581 125.359 82.7324 124.806C82.896 124.266 82.9477 123.677 82.8874 123.039C82.8283 122.413 82.6674 121.845 82.4045 121.333C82.1299 120.823 81.7787 120.385 81.351 120.02C80.9243 119.667 80.4352 119.409 79.8835 119.247C79.3318 119.084 78.7429 119.033 78.1168 119.092ZM64.7661 117.855L61.1397 129.774L56.2527 128.288C54.6634 127.804 53.5343 127.051 52.8655 126.029C52.1852 125.004 52.0472 123.827 52.4513 122.499C52.7172 121.625 53.1512 120.932 53.7533 120.42C54.3519 119.92 55.0833 119.616 55.9475 119.507C56.7969 119.405 57.7495 119.515 58.8052 119.837L62.4833 120.956L61.19 121.66L62.5525 117.181L64.7661 117.855ZM56.9673 115.482L58.6654 120.724L56.2985 120.004L54.5834 114.757L56.9673 115.482ZM61.2625 121.421L61.9289 122.778L58.3531 121.69C57.3768 121.393 56.5807 121.38 55.9648 121.651C55.3375 121.919 54.9099 122.428 54.6819 123.177C54.4505 123.938 54.5224 124.598 54.8976 125.159C55.2614 125.716 55.9314 126.143 56.9077 126.44L60.4836 127.528L59.1644 128.318L61.2625 121.421ZM48.5243 112.413L41.6416 122.799L39.7129 121.521L46.5956 111.135L48.5243 112.413ZM40.5471 106.578L31.0889 114.688L25.1687 107.784L26.6414 106.521L31.0556 111.669L37.5682 106.085L32.9918 100.748L34.4646 99.4847L40.5471 106.578ZM35.0763 108.456L33.6305 109.695L29.5987 104.993L31.0445 103.754L35.0763 108.456ZM29.306 90.3928C29.6588 91.2996 29.8694 92.2171 29.9377 93.1455C29.995 94.0781 29.9138 94.8673 29.6939 95.513L27.7282 95.4185C27.9124 94.812 27.9928 94.1187 27.9693 93.3384C27.9458 92.5581 27.7942 91.8086 27.5145 91.0898C27.2779 90.4816 27.0201 90.0154 26.7411 89.691C26.4621 89.3667 26.1776 89.1591 25.8876 89.0682C25.5865 88.9816 25.2922 88.9943 25.0047 89.1061C24.6509 89.2438 24.4184 89.4807 24.3072 89.8168C24.185 90.1572 24.1427 90.5556 24.1803 91.0121C24.2024 91.4618 24.2551 91.957 24.3381 92.4977C24.4168 93.0272 24.4811 93.5688 24.531 94.1224C24.5655 94.6692 24.5462 95.1923 24.4732 95.6918C24.3848 96.1846 24.1911 96.6356 23.8919 97.0448C23.5928 97.454 23.1336 97.7791 22.5144 98.0201C21.884 98.2653 21.2445 98.3232 20.5957 98.1937C19.9315 98.0574 19.3112 97.7067 18.7348 97.1416C18.1431 96.5697 17.6406 95.7529 17.2276 94.6913C16.9565 93.9947 16.7761 93.2691 16.6862 92.5147C16.5964 91.7602 16.6184 91.0641 16.7522 90.4264L18.6922 90.4546C18.5847 91.0948 18.5667 91.7193 18.6381 92.3282C18.6984 92.9413 18.8275 93.5022 19.0255 94.0109C19.2578 94.608 19.519 95.0666 19.8091 95.3867C20.0948 95.6957 20.3882 95.8934 20.6893 95.98C20.986 96.0555 21.2837 96.0352 21.5823 95.919C21.9361 95.7814 22.1763 95.5478 22.3028 95.2185C22.414 94.8824 22.4529 94.4917 22.4197 94.0462C22.3821 93.5898 22.3273 93.089 22.2553 92.5441C22.1723 92.0035 22.108 91.4619 22.0624 90.9194C22.0126 90.3658 22.0263 89.8448 22.1036 89.3564C22.1767 88.8569 22.3649 88.408 22.6683 88.0099C22.9675 87.6006 23.4211 87.2777 24.0293 87.041C24.6486 86.8001 25.2903 86.7478 25.9545 86.884C26.6033 87.0136 27.2236 87.3643 27.8153 87.9361C28.396 88.5123 28.8929 89.3312 29.306 90.3928Z" fill="#FF1275" />
                <circle cx="72.5851" cy="72.5851" r="71.6195" stroke="#FF1275" stroke-width="1.93123" />
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
                onClick={handleBuyNow}
                disabled={isBuying}
                className='px-6 sm:px-10 py-2 sm:py-3 rounded-full text-xs sm:text-sm 
                bg-[#41062718]  hover:bg-[#FF1275] text-[#FF1275] 
                hover:text-black transition uppercase tracking-widest font-montserrat cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                style={{
                  border: "1px solid #FF1275",
                  // backgroundColor: "#41062718",
                  // color: "#FF1275",
                  fontWeight: "600",
                  position: "relative",
                  zIndex: 10000
                }}
              >
                {buyNowLabel || "TRY UNPOP NOW"}
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
        style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)" }}>

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
            <span style={{
              fontSize: "clamp(2rem, 10vw, 6rem)", fontWeight: "400", textTransform: "uppercase", fontFamily: 'Montserrat', wordSpacing: "0.9em", color: "#FF1275",
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
                  CARDAMOM,
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
        style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)" }}>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16'>
          {/* Comparison Grid - Similar to Reference Image */}
          <div className='hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8'>
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

          {/* Mobile/Tablet Version - Scrollable with Sticky Left Column */}
          <div className='lg:hidden overflow-x-auto pb-4'>
            <table className='w-full border-collapse'>
              <tbody>
                {/* Header Row */}
                <tr>
                  <td className='sticky left-0 bg-gradient-to-r from-[#3A0422] to-transparent pr-4 py-4 min-w-[130px]'></td>
                  <td className='px-2 md:px-4 py-4 min-w-[140px] text-center'>
                    <div
                      className='text-sm md:text-base font-nineties'
                      style={{
                        color: "#FF1275",
                        fontStyle: "italic",
                        letterSpacing: "0.05em",
                      }}
                    >
                      BIG SODA
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 min-w-[140px] text-center'>
                    <div
                      className='text-sm md:text-base font-nineties'
                      style={{
                        color: "#FF1275",
                        fontStyle: "italic",
                        letterSpacing: "0.05em",
                      }}
                    >
                      GUT SODA
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 min-w-[140px] text-center'>
                    <div
                      className='text-sm md:text-base font-nineties'
                      style={{
                        color: "#FF1275",
                        fontStyle: "italic",
                        letterSpacing: "0.05em",
                      }}
                    >
                      <img
                        src='/images/logo.png'
                        alt='UNPOP Logo'
                        className='w-10 sm:w-12 h-auto drop-shadow-lg mx-auto'
                      />
                    </div>
                  </td>
                </tr>

                {/* Sweetener Row */}
                <tr>
                  <td className='sticky left-0 bg-gradient-to-r from-[#3A0422] to-transparent pr-4 py-4 bg-[#3A0422]'>
                    <div
                      className='text-sm md:text-base font-nineties'
                      style={{
                        color: "#FF1275",
                        fontStyle: "italic",
                        fontWeight: "100",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Sweetener
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "300",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      HF CORN SYRUP OR ASPARTAME
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "300",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      STEVIA + SUGAR + PREBIOTICS
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "500",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      DATE SYRUP + STEVIA
                    </div>
                  </td>
                </tr>

                {/* Aftertaste Row */}
                <tr>
                  <td className='sticky left-0 bg-gradient-to-r from-[#3A0422] to-transparent pr-4 py-4 bg-[#3A0422]'>
                    <div
                      className='text-sm md:text-base font-nineties'
                      style={{
                        color: "#FF1275",
                        fontStyle: "italic",
                        fontWeight: "100",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Aftertaste
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "300",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      CLOYING SUGAR CRASH
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "300",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      CHALKY, FAKE-SWEET
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "500",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      CLEAN, CRISP, & GONE
                    </div>
                  </td>
                </tr>

                {/* The Talk Row */}
                <tr>
                  <td className='sticky left-0 bg-gradient-to-r from-[#3A0422] to-transparent pr-4 py-4 bg-[#3A0422]'>
                    <div
                      className='text-sm md:text-base font-nineties'
                      style={{
                        color: "#FF1275",
                        fontStyle: "italic",
                        fontWeight: "100",
                        letterSpacing: "0.05em",
                      }}
                    >
                      The talk
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "300",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      NOSTALGIA & JINGLES
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "300",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      SCIENCE PROJECT MEETS NSYNC
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "500",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      HONESTLY
                    </div>
                  </td>
                </tr>

                {/* The Feels Row */}
                <tr>
                  <td className='sticky left-0 bg-gradient-to-r from-[#3A0422] to-transparent pr-4 py-4 bg-[#3A0422]'>
                    <div
                      className='text-sm md:text-base font-nineties'
                      style={{
                        color: "#FF1275",
                        fontStyle: "italic",
                        fontWeight: "100",
                        letterSpacing: "0.05em",
                      }}
                    >
                      The feels
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "300",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      HEAVY
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "300",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      CONFUSED
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "500",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      ALIVE, FIZZY, REAL
                    </div>
                  </td>
                </tr>

                {/* What You're Buying Row */}
                <tr>
                  <td className='sticky left-0 bg-gradient-to-r from-[#3A0422] to-transparent pr-4 py-4 bg-[#3A0422]'>
                    <div
                      className='text-sm md:text-base font-nineties'
                      style={{
                        color: "#FF1275",
                        fontStyle: "italic",
                        fontWeight: "100",
                        letterSpacing: "0.05em",
                      }}
                    >
                      What you're buying
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "300",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      A FEELING FROM 1987
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "300",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      QUESTIONABLE GUT SCIENCE
                    </div>
                  </td>
                  <td className='px-2 md:px-4 py-4 align-top'>
                    <div
                      className='text-xs md:text-sm font-montserrat'
                      style={{
                        color: "#FF1275",
                        fontWeight: "500",
                        letterSpacing: "0.08em",
                        lineHeight: "1.6",
                      }}
                    >
                      SODA, HOW IT OUGHT TO BE
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

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
        </div>

      </section>


      <section id="our-story"
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
              style={{ color: "#FF1275", letterSpacing: "0.2em" }}
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
              <p>YOU'RE IN THE RIGHT PLACE.</p>
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
        style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)" }}>

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
              <a href="/contact-us" target="_blank" rel="noopener noreferrer"
                className='px-6 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-semibold 
                bg-[#ff127514]  hover:bg-[#FF1275] text-[#FF1275] 
                hover:text-black transition uppercase tracking-widest font-montserrat'
                style={{
                  border: "1px solid #FF1275",
                  // backgroundColor: "#ff12750c",
                  // color: "#FF1275",
                  whiteSpace: "nowrap",
                }}
              >
                BE A MEMBER
              </a>
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
      <section id="faqs-section"
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
                  onMouseEnter={() => setOpenFaqIndex(index)}
                  onMouseLeave={() => setOpenFaqIndex(null)}
                >
                  {/* Question Button */}
                  <button
                    className='w-full py-6 flex items-center justify-between hover:opacity-70 transition-opacity text-left'
                    style={{ color: "#FF1275" }}
                  >
                    <span
                      className='font-nineties-italic'
                      style={{
                        fontSize: "20px",
                        letterSpacing: "0.02em",
                        color: "#FF1275",
                        fontWeight: "600"
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

      <Footer onCartClick={handleBuyNow} />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => { setIsCartOpen(false); navigate("/checkout"); }}
      />
    </div>
  );
}
