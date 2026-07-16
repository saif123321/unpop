import React, { useState, useEffect } from "react";
import "./checkout-page.css";
import { assetUrl } from "../utils/assetUrl";

export default function CheckoutPage({ onBack }) {
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        shippingMethod: "standard",
        cardNumber: "",
        expirationDate: "",
        cvc: "",
        billingZipCode: "",
        billingAddressSame: true,
    });

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const savedQuantity = localStorage.getItem("cartQuantity");
        if (savedQuantity) {
            setQuantity(parseInt(savedQuantity));
        }
    }, []);

    const product = {
        name: "UNPOP 12PK CASE",
        price: 26.99,
        image: assetUrl("/images/cart-image.png"),
    };

    const subtotal = (product.price * quantity).toFixed(2);
    const taxes = "0.00";
    const shipping = formData.shippingMethod === "express" ? "9.99" : "$3.00";
    const total = (
        parseFloat(subtotal) +
        parseFloat(taxes) +
        parseFloat(shipping === "$3.00" ? "3.00" : "9.99")
    ).toFixed(2);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleShippingChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            shippingMethod: e.target.value,
        }));
    };

    return (
        <div
            className="fixed inset-0 overflow-y-auto py-8 hide-scrollbar"
            style={{ backgroundColor: "#300b21", zIndex: "11111" }}
        >
            {/* Logo - Top Center */}
            <div className="fixed top-0 left-0 right-0 flex justify-center py-4 z-50" style={{ backgroundColor: "#300b21" }}>
                <a href="/">
                    <img
                        src={assetUrl("/images/logo.png")}
                        alt="Logo"
                        className="w-32 h-auto"
                    />
                </a>
            </div>

            {/* Main Content */}
            <div className="mx-auto px-6 md:px-16 mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Side - Form */}
                    <div>
                        {/* Customer Info */}
                        <div className="mb-12 bg-[#250416] p-6 rounded-3xl" >
                            <h3
                                className="font-montserrat tracking-widest uppercase text-md font-bold mb-4"
                                style={{ color: "#FF1275" }}
                            >
                                CUSTOMER INFO
                            </h3>
                            <label htmlFor="email-input" className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>EMAIL*</label>
                            <input
                                id="email-input"
                                type="email"
                                name="email"
                                placeholder="Enter Email address"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                style={{
                                    color: "#FF1275",
                                    border: "1px solid #FF1275",
                                }}
                            />
                        </div>

                        {/* Shipping Address */}
                        <div className="mb-12  bg-[#250416] p-6 rounded-3xl">
                            <h3
                                className="font-montserrat tracking-widest uppercase text-md font-bold mb-4"
                                style={{ color: "#FF1275" }}
                            >
                                SHIPPING ADDRESS
                            </h3>
                            <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>FULL NAME*</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 mb-4 rounded-full font-montserrat text-sm focus:outline-none"
                                style={{
                                    color: "#FF1275",
                                    border: "1px solid #FF1275",
                                    "::placeholder": { color: "#FF1275 " },
                                }}
                            />
                            <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>STREET ADDRESS*</label>
                            <input
                                type="text"
                                name="streetAddress"
                                placeholder="Street Address"
                                value={formData.streetAddress}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 mb-4 rounded-full font-montserrat text-sm focus:outline-none"
                                style={{
                                    color: "#FF1275",
                                    border: "1px solid #FF1275",
                                }}
                            />

                            <input
                                type="text"
                                name="streetAddress2"
                                placeholder="Apartment, suite, etc. (optional)"
                                className="w-full px-4 py-3 mb-4 rounded-full font-montserrat text-sm focus:outline-none"
                                style={{
                                    color: "#FF1275",
                                    border: "1px solid #FF1275",
                                }}
                            />

                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>CITY*</label>
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                        style={{
                                            color: "#FF1275",
                                            border: "1px solid #FF1275",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>STATE*</label>
                                    <input
                                        type="text"
                                        name="state"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                        style={{
                                            color: "#FF1275",
                                            border: "1px solid #FF1275",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>ZIP CODE*</label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        placeholder="Zip Code"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                        style={{
                                            color: "#FF1275",
                                            border: "1px solid #FF1275",
                                        }}
                                    />
                                </div>
                            </div>
                            <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>COUNTRY*</label>
                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                style={{
                                    color: "#FF1275",
                                    border: "1px solid #FF1275",
                                }}
                            />
                        </div>

                        {/* Shipping Method */}
                        <div className="mb-12 bg-[#250416] p-6 rounded-3xl">
                            <h3
                                className="font-montserrat tracking-widest uppercase text-sm font-semibold mb-6"
                                style={{ color: "#FF1275" }}
                            >
                                SHIPPING METHOD
                            </h3>

                            <div className="space-y-4">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="shippingMethod"
                                        value="standard"
                                        checked={formData.shippingMethod === "standard"}
                                        onChange={handleShippingChange}
                                        className="checkout-radio mr-3"
                                    />
                                    <span className="font-montserrat text-sm" style={{ color: "#FF1275" }}>
                                        Standard Shipping
                                    </span>
                                    <span className="ml-auto font-montserrat text-sm" style={{ color: "#FF1275" }}>
                                        $3.00
                                    </span>
                                </label>

                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="shippingMethod"
                                        value="express"
                                        checked={formData.shippingMethod === "express"}
                                        onChange={handleShippingChange}
                                        className="checkout-radio mr-3"
                                    />
                                    <span className="font-montserrat text-sm" style={{ color: "#FF1275" }}>
                                        Expedited Shipping
                                    </span>
                                    <span className="ml-auto font-montserrat text-sm" style={{ color: "#FF1275" }}>
                                        $9.99
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="mb-12 bg-[#250416] p-6 rounded-3xl">
                            <h3
                                className="font-montserrat tracking-widest uppercase text-sm font-semibold mb-6"
                                style={{ color: "#FF1275" }}
                            >
                                PAYMENT METHOD
                            </h3>

                            <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>CARD NUMBER*</label>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Enter card number"
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 mb-6 rounded-full font-montserrat text-sm focus:outline-none"
                                style={{
                                    color: "#FF1275",
                                    border: "1px solid #FF1275",
                                }}
                            />

                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div>
                                    <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>EXPIRATION DATE*</label>
                                    <input
                                        type="text"
                                        name="expirationDate"
                                        placeholder="Enter expiration date"
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                        style={{
                                            color: "#FF1275",
                                            border: "1px solid #FF1275",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>CVC/SECURITY*</label>
                                    <input
                                        type="text"
                                        name="cvc"
                                        placeholder="Enter CvC"
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                        style={{
                                            color: "#FF1275",
                                            border: "1px solid #FF1275",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>ZIP CODE*</label>
                                    <input
                                        type="text"
                                        name="billingZipCode"
                                        placeholder="Enter zip code"
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                        style={{
                                            color: "#FF1275",
                                            border: "1px solid #FF1275",
                                        }}
                                    />
                                </div>
                            </div>

                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="billingAddressSame"
                                    checked={formData.billingAddressSame}
                                    onChange={handleInputChange}
                                    className="checkout-radio mr-3 w-5 h-5"
                                />
                                <span className="font-montserrat text-sm" style={{ color: "#FF1275" }}>
                                    Billing address same as shipping
                                </span>
                            </label>
                        </div>
                        <div className="mb-12  bg-[#250416] p-6 rounded-3xl">
                            <h3
                                className="font-montserrat tracking-widest uppercase text-md font-bold mb-4"
                                style={{ color: "#FF1275" }}
                            >
                                BILLING ADDRESS
                            </h3>
                            <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>FULL NAME*</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 mb-4 rounded-full font-montserrat text-sm focus:outline-none"
                                style={{
                                    color: "#FF1275",
                                    border: "1px solid #FF1275",
                                    "::placeholder": { color: "#FF1275 " },
                                }}
                            />
                            <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>STREET ADDRESS*</label>
                            <input
                                type="text"
                                name="streetAddress"
                                placeholder="Street Address"
                                value={formData.streetAddress}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 mb-4 rounded-full font-montserrat text-sm focus:outline-none"
                                style={{
                                    color: "#FF1275",
                                    border: "1px solid #FF1275",
                                }}
                            />

                            <input
                                type="text"
                                name="streetAddress2"
                                placeholder="Apartment, suite, etc. (optional)"
                                className="w-full px-4 py-3 mb-4 rounded-full font-montserrat text-sm focus:outline-none"
                                style={{
                                    color: "#FF1275",
                                    border: "1px solid #FF1275",
                                }}
                            />

                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>CITY*</label>
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                        style={{
                                            color: "#FF1275",
                                            border: "1px solid #FF1275",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>STATE*</label>
                                    <input
                                        type="text"
                                        name="state"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                        style={{
                                            color: "#FF1275",
                                            border: "1px solid #FF1275",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>ZIP CODE*</label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        placeholder="Zip Code"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                        style={{
                                            color: "#FF1275",
                                            border: "1px solid #FF1275",
                                        }}
                                    />
                                </div>
                            </div>
                            <label className="block mb-2 text-xs font-montserrat tracking-widest" style={{ color: "#FF1275" }}>COUNTRY*</label>
                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-full font-montserrat text-sm focus:outline-none"
                                style={{
                                    color: "#FF1275",
                                    border: "1px solid #FF1275",
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Side - Order Summary + Image */}
                    <div className="sticky top-24 h-fit">
                        {/* Items in Order */}
                        <div className="mb-12 p-6 rounded-3xl" style={{ backgroundColor: "#250416" }}>
                            <h3
                                className="font-montserrat tracking-widest uppercase text-md font-bold mb-6"
                                style={{ color: "#FF1275" }}
                            >
                                ITEMS IN ORDER
                            </h3>

                            <div className="flex items-center gap-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-12 h-16 object-contain"
                                />
                                <div className="flex-1">
                                    <p
                                        className="font-montserrat text-sm font-semibold uppercase"
                                        style={{ color: "#FF1275" }}
                                    >
                                        {product.name}
                                    </p>
                                    <p
                                        className="font-montserrat text-xs"
                                        style={{ color: "#FF1275" }}
                                    >
                                        QUANTITY: {quantity}
                                    </p>
                                </div>
                                <p
                                    className="font-montserrat font-semibold"
                                    style={{ color: "#FF1275" }}
                                >
                                    ${product.price.toFixed(2)} USD
                                </p>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="mb-12 p-6 rounded-3xl" style={{ backgroundColor: "#250416" }}>
                            <h3
                                className="font-montserrat tracking-widest uppercase text-md font-bold mb-6"
                                style={{ color: "#FF1275" }}
                            >
                                ORDER SUMMARY
                            </h3>

                            <div className="space-y-1 mb-6">
                                <div className="flex justify-between">
                                    <p className="font-montserrat text-xs uppercase" style={{ color: "#FF1275" }}>
                                        SUBTOTAL
                                    </p>
                                    <p className="font-montserrat font-semibold" style={{ color: "#FF1275" }}>
                                        ${subtotal} USD
                                    </p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-montserrat text-xs uppercase" style={{ color: "#FF1275" }}>
                                        TAXES
                                    </p>
                                    <p className="font-montserrat font-semibold" style={{ color: "#FF1275" }}>
                                        ${taxes} USD
                                    </p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-montserrat text-xs uppercase" style={{ color: "#FF1275" }}>
                                        SHIPPING
                                    </p>
                                    <p className="font-montserrat font-semibold" style={{ color: "#FF1275" }}>
                                        ${shipping}
                                    </p>
                                </div>
                            </div>
                            <button
                                className="w-full py-3 rounded-full font-montserrat tracking-widest uppercase font-semibold text-sm transition-all duration-300"
                                style={{
                                    border: "2px solid #FF1275",
                                    backgroundColor: "transparent",
                                    color: "#FF1275",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#FF1275";
                                    e.target.style.color = "#1a0610";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "#FF1275";
                                }}
                            >
                                SUBMIT ORDER
                            </button>
                        </div>

                        {/* Hero Image - Bottom Right */}
                        <div className="mt-12">
                            <img
                                src={assetUrl("/images/hero5.png")}
                                alt="Hero"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <footer
                className='relative w-full py-0 overflow-hidden z-[100]'
                style={{ backgroundColor: "#250416" }}
            >
                {/* Logo at Top */}
                <div className='w-full px-8 lg:px-16 pt-4 '>
                    <img
                        src={assetUrl("/images/logo.png")}
                        alt='UNPOP! Logo'
                        className='w-24 h-auto drop-shadow-lg'
                    />
                </div>

                {/* 5 Column Grid */}
                <div className='w-full px-8 lg:px-16 py-12'>
                    <div className='grid grid-cols-5 gap-8'>
                        {/* Column 1 - UNPOP! Links */}
                        <div className='flex flex-col gap-2'>
                            <p
                                style={{
                                    color: "#FF1275",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                }}
                                className='font-montserrat'
                            >
                                POLICIES
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
                                className='font-montserrat hover:opacity-70 transition'
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
                                className='font-montserrat hover:opacity-70 transition'
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
                                className='font-montserrat hover:opacity-70 transition'
                            >
                                Privacy Policy
                            </a>
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
                            className='font-montserrat'
                        >
                            {new Date().getFullYear()} © UNPOP!
                        </p>
                        <p
                            style={{
                                color: "#FF1275",
                                fontSize: "12px",
                                fontWeight: "400",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                            className='font-montserrat'
                        >
                            ALL RIGHTS RESERVED
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
