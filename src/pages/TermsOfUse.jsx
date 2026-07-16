import React, { useState, useEffect } from "react";
import CartModal from "../components/cart-modal";
import Footer from "../components/Footer";
import SiteHeader from "../components/SiteHeader";
import { useBuyNow } from "../hooks/useBuyNow";

export default function TermsOfUse() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { handleBuyNow } = useBuyNow();

  useEffect(() => {
    document.title = 'Terms of Use | The UnPop! Digital Platform Rules';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Review the legal guidelines, user responsibilities, and structural framework governing your interaction with the UnPop! web ecosystem. Zero fluff.';

    // Open Graph tags
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://drinkunpop.com/terms-of-use' },
      { property: 'og:title', content: 'Terms of Use | The UnPop! Digital Platform Rules' },
      { property: 'og:description', content: 'Review the legal guidelines and structural framework governing your interaction with UnPop!' },
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
      { name: 'twitter:url', content: 'https://drinkunpop.com/terms-of-use' },
      { name: 'twitter:title', content: 'Terms of Use | The UnPop! Digital Platform Rules' },
      { name: 'twitter:description', content: 'Review the legal guidelines and structural framework governing your interaction with UnPop!' },
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
    canonicalLink.href = 'https://drinkunpop.com/terms-of-use';
  }, []);

  return (
    <div
      className='relative min-h-screen overflow-x-hidden'
      style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)" }}
    >
      <SiteHeader />

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
