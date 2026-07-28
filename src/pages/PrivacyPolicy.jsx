import React, { useState, useEffect } from "react";
import CartModal from "../components/cart-modal";
import Footer from "../components/Footer";
import SiteHeader from "../components/SiteHeader";
import { prepareCartForOpen } from "../utils/openCart";

export default function PrivacyPolicy() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => {
    prepareCartForOpen();
    setIsCartOpen(true);
  };
  const handleBuyNow = openCart;

  useEffect(() => {
    document.title = 'Privacy Policy | Uncompromised Data Protection';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'How we protect your data. Read our transparent policies regarding payment security, encrypted shipping logistics, and strict data autonomy. No tracking hype.';

    // Open Graph tags
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://drinkunpop.com/privacy-policy' },
      { property: 'og:title', content: 'Privacy Policy | Uncompromised Data Protection' },
      { property: 'og:description', content: 'How we protect your data with transparency, security, and strict data autonomy.' },
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
      { name: 'twitter:url', content: 'https://drinkunpop.com/privacy-policy' },
      { name: 'twitter:title', content: 'Privacy Policy | Uncompromised Data Protection' },
      { name: 'twitter:description', content: 'How we protect your data with transparency, security, and strict data autonomy.' },
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
    canonicalLink.href = 'https://drinkunpop.com/privacy-policy';
  }, []);

  return (
    <div
      className='relative min-h-screen overflow-x-hidden'
      style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)" }}
    >
      <SiteHeader onBuyNow={handleBuyNow} />

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
              onClick={openCart}
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

            <Footer onCartClick={handleBuyNow} />


      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
