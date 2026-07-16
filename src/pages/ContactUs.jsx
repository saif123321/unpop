import React, { useState, useEffect } from "react";
import CartModal from "../components/cart-modal";
import Footer from "../components/Footer";
import SiteHeader from "../components/SiteHeader";
import { useBuyNow } from "../hooks/useBuyNow";

export default function ContactUs() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { handleBuyNow } = useBuyNow();

  useEffect(() => {
    document.title = 'Contact UnPop! | Connect with Our Texas Craft Team';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Have questions about our botanical brewing process or your Texas doorstep delivery? Reach out to the UnPop! team directly. Zero noise, pure clarity.';

    // Open Graph tags
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://drinkunpop.com/contact-us' },
      { property: 'og:title', content: 'Contact UnPop! | Connect with Our Texas Craft Team' },
      { property: 'og:description', content: 'Have questions about our botanical brewing process or your Texas doorstep delivery? Reach out to the UnPop! team directly.' },
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
      { name: 'twitter:url', content: 'https://drinkunpop.com/contact-us' },
      { name: 'twitter:title', content: 'Contact UnPop! | Connect with Our Texas Craft Team' },
      { name: 'twitter:description', content: 'Have questions about our botanical brewing process or your Texas doorstep delivery? Reach out to the UnPop! team directly.' },
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
    canonicalLink.href = 'https://drinkunpop.com/contact-us';
  }, []);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    website: "",
    country: "",
    city: "",
    state: "",
    businessType: "",
    message: "",
    privacyPolicy: false,
  });
  
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Email validation regex
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  
  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.businessType.trim()) newErrors.businessType = "Business type is required";
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    if (!formData.privacyPolicy) {
      newErrors.privacyPolicy = "You must agree to the privacy policy";
    }
    
    return newErrors;
  };
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSuccess("Thank you! We'll be in touch soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      businessName: "",
      website: "",
      country: "",
      city: "",
      state: "",
      businessType: "",
      message: "",
      privacyPolicy: false,
    });
    setErrors({});
    setIsLoading(false);
    
    // Clear success message after 4 seconds
    setTimeout(() => setSuccess(""), 4000);
  };

  return (
    <div
      className='relative min-h-screen overflow-x-hidden'
      style={{ background: "linear-gradient(270deg, #3A0422 -99.24%, #3A0422 104.65%)" }}
    >
      <SiteHeader />

      {/* Ready to Stock Better Heading */}
      <section className='relative pt-32 sm:pt-40 md:pt-48 px-4 sm:px-8 md:px-16 lg:px-32'>
        <h1
          className='font-nineties-italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl'
          style={{
            color: "#FF1275",
            lineHeight: "1",
            fontWeight: "400",
            letterSpacing: "-0.02em",
          }}
        >
          Ready to<br />
          stock better?
        </h1>
      </section>

      {/* Contact Form Section */}
      <section className='relative min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-12 sm:py-16 md:py-20'>
        <div className='relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start'>
          {/* Left Side - Image */}
          <div className='flex flex-col justify-center gap-4'>
            <img
                src='/images/hero4.png'
                alt='Stock Better Hero Mirror'
                className='w-full h-auto max-w-md md:max-w-full'
                style={{ transform: 'scaleX(-1)' }}
              />
            <p
              className='text-lg font-nineties-italic tracking-wider mt-4'
              style={{ color: "#FF1275" }}
            >
              hello@drinkunpop.com
            </p>
          </div>

          {/* Right Side - Form and Mirrored Image */}
          <div className='flex flex-col gap-6'>
            <div>
              <h2
                className='text-3xl sm:text-4xl md:text-5xl font-broton mb-2'
                style={{ color: "#FF1275" }}
              >
                Let's upgrade
              </h2>
              <h2
                className='text-3xl sm:text-4xl md:text-5xl font-broton'
                style={{ color: "#FF1275" }}
              >
                your soda aisle
              </h2>
            </div>


            <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-[#240114] p-6 rounded-xl shadow-lg'>
              {/* Intro Text */}
              <p
                className='text-sm md:text-base font-montserrat font-bold uppercase tracking-wider mb-2'
                style={{ color: "#FF1275" }}
              >
                Connect with us to bring UNPOP! to your shelves.
              </p>
              
              {/* Success Message */}
              {success && (
                <div
                  className='p-3 rounded-lg font-montserrat text-sm font-bold'
                  style={{ backgroundColor: "#00FF00", color: "#000" }}
                >
                  {success}
                </div>
              )}

              {/* First Name & Last Name */}
              <div className='grid grid-cols-2 gap-3'>
                <div className='flex flex-col gap-2'>
                  <label className='text-xs font-montserrat uppercase tracking-wider' style={{ color: "#FF1275" }}>
                    FIRST NAME
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    placeholder='First name'
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isLoading}
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${errors.firstName ? "#FF0000" : "#FF1275"}`,
                      color: "#FF1275",
                      borderRadius: "50px",
                    }}
                    className='font-montserrat px-4 py-2.5 text-xs sm:text-sm placeholder-[#FF1275]/60'
                  />
                  {errors.firstName && (
                    <span style={{ color: "#FF0000" }} className='text-xs'>
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-xs font-montserrat uppercase tracking-wider' style={{ color: "#FF1275" }}>
                    LAST NAME
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    placeholder='Last name'
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isLoading}
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${errors.lastName ? "#FF0000" : "#FF1275"}`,
                      color: "#FF1275",
                      borderRadius: "50px",
                    }}
                    className='font-montserrat px-4 py-2.5 text-xs sm:text-sm placeholder-[#FF1275]/60'
                  />
                  {errors.lastName && (
                    <span style={{ color: "#FF0000" }} className='text-xs'>
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-montserrat uppercase tracking-wider' style={{ color: "#FF1275" }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='Email address'
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  style={{
                    backgroundColor: "transparent",
                    border: `1px solid ${errors.email ? "#FF0000" : "#FF1275"}`,
                    color: "#FF1275",
                    borderRadius: "50px",
                  }}
                  className='font-montserrat px-4 py-2.5 text-xs sm:text-sm placeholder-[#FF1275]/60'
                />
                {errors.email && (
                  <span style={{ color: "#FF0000" }} className='text-xs'>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Business Name & Website */}
              <div className='grid grid-cols-2 gap-3'>
                <div className='flex flex-col gap-2'>
                  <label className='text-xs font-montserrat uppercase tracking-wider' style={{ color: "#FF1275" }}>
                    BUSINESS NAME
                  </label>
                  <input
                    type='text'
                    name='businessName'
                    placeholder='Business name'
                    value={formData.businessName}
                    onChange={handleChange}
                    disabled={isLoading}
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${errors.businessName ? "#FF0000" : "#FF1275"}`,
                      color: "#FF1275",
                      borderRadius: "50px",
                    }}
                    className='font-montserrat px-4 py-2.5 text-xs sm:text-sm placeholder-[#FF1275]/60'
                  />
                  {errors.businessName && (
                    <span style={{ color: "#FF0000" }} className='text-xs'>
                      {errors.businessName}
                    </span>
                  )}
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-xs font-montserrat uppercase tracking-wider' style={{ color: "#FF1275" }}>
                    WEBSITE
                  </label>
                  <input
                    type='text'
                    name='website'
                    placeholder='Website'
                    value={formData.website}
                    onChange={handleChange}
                    disabled={isLoading}
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #FF1275",
                      color: "#FF1275",
                      borderRadius: "50px",
                    }}
                    className='font-montserrat px-4 py-2.5 text-xs sm:text-sm placeholder-[#FF1275]/60'
                  />
                </div>
              </div>

              {/* Country */}
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-montserrat uppercase tracking-wider' style={{ color: "#FF1275" }}>
                  COUNTRY
                </label>
                <input
                  type='text'
                  name='country'
                  placeholder='Country'
                  value={formData.country}
                  onChange={handleChange}
                  disabled={isLoading}
                  style={{
                    backgroundColor: "transparent",
                    border: `1px solid ${errors.country ? "#FF0000" : "#FF1275"}`,
                    color: "#FF1275",
                    borderRadius: "50px",
                  }}
                  className='font-montserrat px-4 py-2.5 text-xs sm:text-sm placeholder-[#FF1275]/60'
                />
                {errors.country && (
                  <span style={{ color: "#FF0000" }} className='text-xs'>
                    {errors.country}
                  </span>
                )}
              </div>

              {/* City & State */}
              <div className='grid grid-cols-2 gap-3'>
                <div className='flex flex-col gap-2'>
                  <label className='text-xs font-montserrat uppercase tracking-wider' style={{ color: "#FF1275" }}>
                    City
                  </label>
                  <input
                    type='text'
                    name='city'
                    placeholder='City'
                    value={formData.city}
                    onChange={handleChange}
                    disabled={isLoading}
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${errors.city ? "#FF0000" : "#FF1275"}`,
                      color: "#FF1275",
                      borderRadius: "50px",
                    }}
                    className='font-montserrat px-4 py-2.5 text-xs sm:text-sm placeholder-[#FF1275]/60'
                  />
                  {errors.city && (
                    <span style={{ color: "#FF0000" }} className='text-xs'>
                      {errors.city}
                    </span>
                  )}
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-xs font-montserrat uppercase tracking-wider' style={{ color: "#FF1275" }}>
                    State
                  </label>
                  <input
                    type='text'
                    name='state'
                    placeholder='State'
                    value={formData.state}
                    onChange={handleChange}
                    disabled={isLoading}
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${errors.state ? "#FF0000" : "#FF1275"}`,
                      color: "#FF1275",
                      borderRadius: "50px",
                    }}
                    className='font-montserrat px-4 py-2.5 text-xs sm:text-sm placeholder-[#FF1275]/60'
                  />
                  {errors.state && (
                    <span style={{ color: "#FF0000" }} className='text-xs'>
                      {errors.state}
                    </span>
                  )}
                </div>
              </div>

              {/* Business Type */}
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-montserrat uppercase tracking-wider' style={{ color: "#FF1275" }}>
                  BUSINESS TYPE
                </label>
                <input
                  type='text'
                  name='businessType'
                  placeholder='Wholesale,retail,distribution, etc.'
                  value={formData.businessType}
                  onChange={handleChange}
                  disabled={isLoading}
                  style={{
                    backgroundColor: "transparent",
                    border: `1px solid ${errors.businessType ? "#FF0000" : "#FF1275"}`,
                    color: "#FF1275",
                    borderRadius: "50px",
                  }}
                  className='font-montserrat px-4 py-2.5 text-xs sm:text-sm placeholder-[#FF1275]/60'
                />
                {errors.businessType && (
                  <span style={{ color: "#FF0000" }} className='text-xs'>
                    {errors.businessType}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-montserrat uppercase tracking-wider' style={{ color: "#FF1275" }}>
                  MESSAGE
                </label>
                <textarea
                  name='message'
                  placeholder='Tell us more about your store'
                  rows='5'
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  style={{
                    backgroundColor: "transparent",
                    border: `1px solid ${errors.message ? "#FF0000" : "#FF1275"}`,
                    color: "#FF1275",
                    borderRadius: "20px",
                  }}
                  className='font-montserrat px-4 py-2.5 text-xs sm:text-sm placeholder-[#FF1275]/60 resize-none'
                />
                {errors.message && (
                  <span style={{ color: "#FF0000" }} className='text-xs'>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Privacy Policy Note */}
              <div className='flex items-start gap-3'>
                <input
                  type='checkbox'
                  id='privacy-policy'
                  name='privacyPolicy'
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  disabled={isLoading}
                  style={{
                    width: "20px",
                    height: "20px",
                    minWidth: "20px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    borderColor: errors.privacyPolicy ? "#FF0000" : "#FF1275",
                  }}
                  className='mt-0.5 checkout-radio'
                />
                <div className='flex flex-col gap-1'>
                  <label
                    htmlFor='privacy-policy'
                    className='text-xs font-montserrat cursor-pointer'
                    style={{ color: "#FF1275" }}
                  >
                    I understand that UNPOP! may contact me regarding partnerships, opportunities and agrees to the{" "}
                    <a href='/privacy-policy' style={{ color: "#FF1275", textDecoration: "underline" }}>
                      Privacy policy
                    </a>
                  </label>
                  {errors.privacyPolicy && (
                    <span style={{ color: "#FF0000" }} className='text-xs'>
                      {errors.privacyPolicy}
                    </span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isLoading}
                style={{
                    border: "1px solid #FF1275",
                    borderRadius: "20px",
                    fontWeight: "700",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    letterSpacing: "0.03em",
                    opacity: isLoading ? 0.6 : 1,
                  }}
                  className='font-montserrat bg-[#ff127514] hover:bg-[#FF1275] text-[#FF1275] 
                hover:text-black transition px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm whitespace-nowrap w-full'
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
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

      {/* Footer Section */}
      
      <Footer onCartClick={handleBuyNow} />


      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
