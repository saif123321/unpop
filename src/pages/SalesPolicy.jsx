import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartModal from "../components/cart-modal";
import Footer from "../components/Footer";

export default function SalesPolicy() {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.title = 'Sales Policy | Direct Texas Allocation & Subscriptions';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Understand our direct shipping protocols, subscription cycles, and recurring fulfillment terms across our local Texas delivery network. Radical clarity.';

    // Open Graph tags
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://drinkunpop.com/sales-policy' },
      { property: 'og:title', content: 'Sales Policy | Direct Texas Allocation & Subscriptions' },
      { property: 'og:description', content: 'Understand our direct shipping protocols, subscription cycles, and fulfillment terms.' },
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
      { name: 'twitter:url', content: 'https://drinkunpop.com/sales-policy' },
      { name: 'twitter:title', content: 'Sales Policy | Direct Texas Allocation & Subscriptions' },
      { name: 'twitter:description', content: 'Understand our direct shipping protocols, subscription cycles, and fulfillment terms.' },
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
    canonicalLink.href = 'https://drinkunpop.com/sales-policy';
  }, []);

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

      {/* Sales Policy Content Section */}
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
            Sales Policy
          </h1>

          <div className='space-y-8 font-montserrat' style={{ color: "#FF1275" }}>
            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                1. Order Acceptance
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                UNPOP! reserves the right to refuse any order at its sole discretion. We will confirm your order by email after payment is received and processed. If we cannot process your order, we will notify you and refund any payments made.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                2. Pricing and Availability
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                All prices are subject to change without notice. Product availability is limited and subject to stock. We make every effort to provide accurate pricing and product information on our website. However, we do not warrant that product descriptions, prices, or other content is accurate, complete, reliable, or error-free.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                3. Bulk Orders and B2B Sales
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                For wholesale, bulk, and B2B inquiries, please contact us at hello@drinkunpop.com. We work with retailers, distributors, and businesses to bring UNPOP! to shelves. Pricing and terms for bulk orders are available upon request and subject to negotiation.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                4. Payment Terms
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                We accept various payment methods including credit cards and digital payment services. Payment must be received before order shipment. We reserve the right to cancel any order if payment is not received or if payment information proves to be invalid.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                5. Shipping and Delivery
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                Orders are shipped via carrier services and delivery times may vary. Shipping costs are calculated based on location and order size. We are not responsible for delays caused by shipping carriers or unforeseen circumstances. Customers are responsible for providing accurate shipping addresses.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                6. Returns and Refunds
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                Products must be returned within 30 days of purchase in original condition for a full refund. Items must be unopened and in sellable condition. Refunds will be issued to the original payment method within 5-7 business days of receipt and inspection of returned items.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                7. Distributor and Retailer Partnerships
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                UNPOP! is actively seeking distributors and retail partners. If you are interested in stocking UNPOP! products in your store or region, please reach out to us at hello@drinkunpop.com. We offer competitive wholesale pricing and marketing support for our partners.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                8. Limitation of Liability
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                UNPOP! shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the purchase, use, or inability to use our products or services, even if advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className='text-xl md:text-2xl font-bold mb-3' style={{ color: "#FF1275" }}>
                9. Contact Information
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                For questions regarding our Sales Policy or to place a wholesale order, please contact us at hello@drinkunpop.com
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
