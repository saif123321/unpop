import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBuyNow } from "../hooks/useBuyNow";
import { assetUrl } from "../utils/assetUrl";
import "./site-header.css";

function HeaderLink({ href, className, onClick, children }) {
  if (href?.startsWith("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

/**
 * Shared site header.
 * Desktop: left link | logo | Contact Us + Buy Now
 * Mobile (≤767px): logo left | solid Buy Now + hamburger
 */
export default function SiteHeader({
  leftLinkHref = "/",
  leftLinkLabel = "Home",
  mobileLinks,
  onBuyNow,
}) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleBuyNow, isBuying, buyNowLabel } = useBuyNow();
  const buyNowAction = onBuyNow || handleBuyNow;

  const menuLinks =
    mobileLinks ||
    [
      { href: leftLinkHref, label: leftLinkLabel },
      { href: "/contact-us", label: "Contact Us" },
    ];

  return (
    <header
      className={`site-header${isMobileMenuOpen ? " is-menu-open" : ""}`}
    >
      <HeaderLink
        href={leftLinkHref}
        className="site-header__link site-header__link--desktop site-header__link--left"
      >
        {leftLinkLabel}
      </HeaderLink>

      <div className="site-header__logo">
        <img
          src={assetUrl("/images/logo.png")}
          alt="UnPop! Logo"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="site-header__actions">
        <HeaderLink
          href="/contact-us"
          className="site-header__link site-header__link--desktop"
        >
          Contact Us
        </HeaderLink>
        <button
          type="button"
          className="site-header__buy"
          onClick={buyNowAction}
          disabled={isBuying}
        >
          {buyNowLabel || "Buy Now"}
        </button>
        <button
          type="button"
          className="site-header__menu"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="site-header__menu-bar" />
          <span className="site-header__menu-bar" />
          <span className="site-header__menu-bar" />
        </button>
      </div>

      <nav
        className={`site-header__mobile-nav${isMobileMenuOpen ? " is-open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        {menuLinks.map((link) => (
          <HeaderLink
            key={`${link.href}-${link.label}`}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </HeaderLink>
        ))}
      </nav>
    </header>
  );
}
