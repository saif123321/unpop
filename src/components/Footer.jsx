import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer({ onCartClick }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubscribe = async () => {
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setSuccess("Successfully subscribed!");
    setEmail("");
    setIsLoading(false);

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <footer
      id="contact"
      className="relative w-full py-0 overflow-hidden z-[100]"
      style={{ backgroundColor: "#350622" }}
    >
      {/* Logo at Top */}
      <div className="w-full px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 md:pt-24">
        <img
          src="/images/logo.png"
          alt="UNPOP! Logo"
          className="w-16 sm:w-20 md:w-24 h-auto drop-shadow-lg"
        />
      </div>

      {/* 5 Column Grid */}
      <div className="w-full px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-8">
          {/* Column 1 - UNPOP! Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <p
              style={{
                color: "#FF1275",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
              className="font-montserrat text-xs sm:text-sm"
            >
              UNPOP!
            </p>
            <button
              onClick={onCartClick}
              style={{
                color: "#FF1275",
                fontWeight: "400",
                letterSpacing: "0.02em",
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              className="font-montserrat text-justify hover:opacity-70 transition text-sm sm:text-base"
            >
              Buy Unpop!
            </button>
            <a
              href="/#our-story"
              style={{
                color: "#FF1275",
                fontWeight: "400",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
              className="font-montserrat hover:opacity-70 transition text-sm sm:text-base"
            >
              Our Story
            </a>
          </div>

          {/* Column 2 - SUPPORT Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <p
              style={{
                color: "#FF1275",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
              className="font-montserrat text-xs sm:text-sm"
            >
              SUPPORT
            </p>
            <a
              href="/contact-us"
              style={{
                color: "#FF1275",
                fontWeight: "400",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
              className="font-montserrat hover:opacity-70 transition text-sm sm:text-base"
            >
              Contact Us
            </a>
            <a
              href="/#faqs-section"
              style={{
                color: "#FF1275",
                fontWeight: "400",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
              className="font-montserrat hover:opacity-70 transition text-sm sm:text-base"
            >
              FAQ
            </a>
          </div>

          {/* Column 3 - MORE Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <p
              style={{
                color: "#FF1275",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
              className="font-montserrat text-xs sm:text-sm"
            >
              MORE
            </p>
            <a
              href="/terms-of-use"
              style={{
                color: "#FF1275",
                fontWeight: "400",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
              className="font-montserrat hover:opacity-70 transition text-sm sm:text-base"
            >
              Terms of use
            </a>
            <a
              href="/sales-policy"
              style={{
                color: "#FF1275",
                fontWeight: "400",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
              className="font-montserrat hover:opacity-70 transition text-sm sm:text-base"
            >
              Sales Policy
            </a>
            <a
              href="/privacy-policy"
              style={{
                color: "#FF1275",
                fontWeight: "400",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
              className="font-montserrat hover:opacity-70 transition text-sm sm:text-base"
            >
              Privacy Policy
            </a>
          </div>

          {/* Column 4 - KEEP IN TOUCH */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-1">
            <p
              style={{
                color: "#FF1275",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
              className="font-montserrat text-xs sm:text-sm"
            >
              KEEP IN TOUCH!
            </p>
            <div className="flex flex-col gap-2 w-full">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                style={{
                  backgroundColor: "transparent",
                  border: `1px solid ${error ? "#FF0000" : "#FF1275"}`,
                  color: "#FF1275",
                  borderRadius: "20px",
                  cursor: "pointer",
                  letterSpacing: "0.03em",
                }}
                className="font-montserrat px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm w-full"
              />
              {error && (
                <p
                  style={{ color: "#FF0000", fontSize: "12px" }}
                  className="font-montserrat"
                >
                  {error}
                </p>
              )}
              {success && (
                <p
                  style={{ color: "#00FF00", fontSize: "12px" }}
                  className="font-montserrat"
                >
                  {success}
                </p>
              )}
              <button
                onClick={handleSubscribe}
                disabled={isLoading}
                style={{
                  border: "1px solid #FF1275",
                  borderRadius: "20px",
                  fontWeight: "700",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  letterSpacing: "0.03em",
                  opacity: isLoading ? 0.6 : 1,
                }}
                className="font-montserrat bg-[#ff127514]  hover:bg-[#FF1275] text-[#FF1275] 
                hover:text-black transition px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm whitespace-nowrap w-full"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </div>

          {/* Column 5 - Email and Social */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-1">
            <p
              style={{
                color: "#FF1275",
                fontWeight: "400",
                letterSpacing: "0.02em",
              }}
              className="font-montserrat text-xs sm:text-sm"
            >
              hello@drinkunpop.com
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/drinkunpop"
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
                className="hover:opacity-70 transition sm:w-8 sm:h-8"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="#FF1275"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="4" stroke="#FF1275" strokeWidth="2" />
                  <circle cx="18.5" cy="5.5" r="1" fill="#FF1275" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@drinkunpop"
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
                className="hover:opacity-70 transition sm:w-8 sm:h-8"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 22 22"
                  fill="#FF1275"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_18_55)">
                    <path
                      d="M11.1909 0.0178701C12.3614 0 13.523 0.00893503 14.6845 0C14.756 1.36706 15.2474 2.76092 16.2481 3.72591C17.2489 4.71769 18.6606 5.17338 20.0366 5.32528V8.92609C18.7499 8.88142 17.4544 8.61337 16.2839 8.0594C15.7746 7.82708 15.301 7.53223 14.8364 7.22844C14.8275 9.83747 14.8453 12.4465 14.8185 15.0466C14.747 16.2975 14.336 17.5395 13.6123 18.567C12.4418 20.2825 10.4136 21.3994 8.3317 21.4351C7.05399 21.5066 5.77628 21.1581 4.68621 20.5148C2.88133 19.4516 1.61256 17.5037 1.42493 15.4129C1.40706 14.9662 1.39812 14.5194 1.41599 14.0816C1.57682 12.3839 2.41671 10.7578 3.72123 9.64983C5.20444 8.36319 7.27737 7.74667 9.21627 8.113C9.23414 9.43539 9.18053 10.7578 9.18053 12.0802C8.29596 11.7942 7.2595 11.8747 6.48215 12.4108C5.91924 12.7771 5.49036 13.34 5.26699 13.9744C5.07935 14.4301 5.13296 14.9304 5.1419 15.4129C5.35634 16.8783 6.76807 18.1113 8.26916 17.9773C9.26988 17.9683 10.2259 17.3876 10.7442 16.5387C10.9139 16.2439 11.1016 15.9401 11.1105 15.5916C11.1998 13.9923 11.1641 12.4018 11.173 10.8024C11.182 7.20163 11.1641 3.60975 11.1909 0.0178701Z"
                      fill="#FF1275"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_18_55">
                      <rect width="21.4441" height="21.4441" fill="#FF1275" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/drinkunpop"
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
                className="hover:opacity-70 transition sm:w-8 sm:h-8"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="#FF1275"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div
        className="w-full px-4 sm:px-8 md:px-16 py-4 sm:py-6 border-t"
        style={{ borderColor: "#FF1275" }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p
            style={{
              color: "#FF1275",
              fontWeight: "400",
              letterSpacing: "0.02em",
            }}
            className="font-montserrat text-xs sm:text-sm"
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
            className="font-montserrat text-xs sm:text-sm"
          >
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
