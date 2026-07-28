import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "../components/cart-modal";
import Footer from "../components/Footer";
import PdpBanner from "../components/pdp-banner";
import PdpSipSection from "../components/pdp-sip-section";
import PdpOurBenefits from "../components/pdp-our-benefits";
import PdpFansay from "../components/pdp-fansay";
import PdpFaq from "../components/pdp-faq";
import { assetUrl } from "../utils/assetUrl";
import { prepareCartForOpen } from "../utils/openCart";
import "../components/pdp.css";
import "../components/responsivepdp.css";

export default function Unpop12pkCase() {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openCart = () => {
    prepareCartForOpen();
    setIsCartOpen(true);
  };
  const handleBuyNow = openCart;

  useEffect(() => {
    document.title =
      "unPop! Sublime Cola 12oz | All-natural soda, sweetened with dates";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "unPop! Sublime Cola 12oz — all-natural soda sweetened with dates. A 12-pack case of botanical craft soft drinks with zero junk.";

    const ogTags = [
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://drinkunpop.com/unpop-12pk-case",
      },
      {
        property: "og:title",
        content:
          "unPop! Sublime Cola 12oz | All-natural soda, sweetened with dates",
      },
      {
        property: "og:description",
        content:
          "unPop! Sublime Cola 12oz — all-natural soda sweetened with dates. A 12-pack case of botanical craft soft drinks.",
      },
      {
        property: "og:image",
        content: "https://drinkunpop.com/assets/og-homepage-banner.jpg",
      },
    ];

    ogTags.forEach((tag) => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", tag.property);
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:url",
        content: "https://drinkunpop.com/unpop-12pk-case",
      },
      {
        name: "twitter:title",
        content:
          "unPop! Sublime Cola 12oz | All-natural soda, sweetened with dates",
      },
      {
        name: "twitter:description",
        content:
          "unPop! Sublime Cola 12oz — all-natural soda sweetened with dates. A 12-pack case of botanical craft soft drinks.",
      },
      {
        name: "twitter:image",
        content: "https://drinkunpop.com/assets/og-homepage-banner.jpg",
      },
    ];

    twitterTags.forEach((tag) => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = tag.name;
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = "https://drinkunpop.com/unpop-12pk-case";
  }, []);

  return (
    <div className="pdp-page">
      {/* Fixed Header — this page only */}
      <header className={`pdp-page__header${isMobileMenuOpen ? " is-menu-open" : ""}`}>
        <Link to="/" className="pdp-page__header-link pdp-page__header-link--desktop">
          Home
        </Link>

        <div className="pdp-page__header-logo">
          <img
            src={assetUrl("/images/logo.png")}
            alt="UnPop! Logo"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="pdp-page__header-actions">
          <Link to="/contact-us" className="pdp-page__header-link pdp-page__header-link--desktop">
            Contact Us
          </Link>
          <button
            className="pdp-page__header-buy"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
          <button
            type="button"
            className="pdp-page__header-menu"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="pdp-page__header-menu-bar" />
            <span className="pdp-page__header-menu-bar" />
            <span className="pdp-page__header-menu-bar" />
          </button>
        </div>

        <nav
          className={`pdp-page__header-mobile-nav${isMobileMenuOpen ? " is-open" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </nav>
      </header>

      <main className="pdp-page__main">
        <PdpBanner onAddToCart={openCart} />
        <PdpSipSection />
        <PdpFansay />
        <PdpOurBenefits />
        <PdpFaq />
      </main>

      <button
        onClick={openCart}
        className="p-3 rounded-full transition cursor-pointer"
        style={{
          border: "2px solid #FF1275",
          backgroundColor: "#410627",
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 10000,
        }}
        aria-label="Open cart"
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

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
