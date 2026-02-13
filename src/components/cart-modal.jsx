import React, { useState, useEffect } from "react";
import "./cart-modal.css";

export default function CartModal({ isOpen, onClose, onCheckout }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      const savedQuantity = localStorage.getItem("cartQuantity");
      if (savedQuantity) {
        setQuantity(parseInt(savedQuantity));
      }
    }
  }, [isOpen]);

  const product = {
    name: "UNPOP 12PK CASE",
    price: 26.99,
    image: "/images/cart-image.png",
  };

  const subtotal = (product.price * quantity).toFixed(2);
  const taxes = "0.00";

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
    localStorage.setItem("cartQuantity", value.toString());
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Cart Modal - Positioned below header on the right */}
      <div
        className="fixed top-16 right-6 md:right-16 bg-opacity-95 w-[500px] rounded-lg p-6 max-h-[85vh] overflow-y-auto"
        style={{ backgroundColor: "#240416", zIndex: "11111"}}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b" style={{ borderColor: "#FF1275" }}>
          <h2
            className="text-2xl font-montserrat tracking-widest uppercase font-bold"
            style={{ color: "#FF1275" }}
          > 
            CART
          </h2>
          <button
            onClick={onClose}
            className="text-3xl hover:opacity-70 transition-opacity"
            style={{ color: "#FF1275" }}
          >
            ×
          </button>
        </div>

        {/* Product Item */}
        <div className="flex gap-4 mb-8 items-start">
          {/* Product Image */}
          <div className="w-32 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3
                className="text-base font-montserrat tracking-wide uppercase font-semibold"
                style={{ color: "#FF1275" }}
              >
                {product.name}
              </h3>
              {/* Quantity Selector */}
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="cart-quantity-input w-16 px-2 py-1 border-2 text-center font-montserrat font-semibold rounded flex-shrink-0"
                style={{
                  borderColor: "#FF1275",
                  backgroundColor: "#300b21",
                  color: "#FF1275",
                }}
              />
            </div>
            <p
              className="text-lg font-montserrat font-semibold mb-4"
              style={{ color: "#FF1275" }}
            >
              ${product.price.toFixed(2)} USD
            </p>

            {/* Remove Link */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-xs font-montserrat tracking-widest uppercase font-semibold hover:opacity-70 transition-opacity"
                style={{ color: "#FF1275" }}
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-6" style={{ borderColor: "#FF1275" }}></div>

        {/* Pricing Summary */}
        <div className="space-y-3 mb-8">
          <div className="flex justify-between items-center">
            <p
              className="font-montserrat tracking-widest uppercase text-xs"
              style={{ color: "#FF1275" }}
            >
              SUBTOTAL
            </p>
            <p
              className="font-montserrat font-semibold text-base"
              style={{ color: "#FF1275" }}
            >
              ${subtotal} USD
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p
              className="font-montserrat tracking-widest uppercase text-xs"
              style={{ color: "#FF1275" }}
            >
              TAXES
            </p>
            <p
              className="font-montserrat font-semibold text-base"
              style={{ color: "#FF1275" }}
            >
              ${taxes} USD
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p
              className="font-montserrat tracking-widest uppercase text-xs"
              style={{ color: "#FF1275" }}
            >
              SHIPPING
            </p>
            <p
              className="font-montserrat tracking-widest uppercase text-xs"
              style={{ color: "#FF1275" }}
            >
              CALCULATED AT CHECKOUT
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-8" style={{ borderColor: "#FF1275" }}></div>

        {/* Checkout Button */}
        <button
          className="w-full py-3 rounded-full font-montserrat tracking-widest uppercase font-semibold text-sm transition-all duration-300 transform hover:scale-105"
          style={{
            border: "2px solid #FF1275",
            backgroundColor: "transparent",
            color: "#FF1275",
          }}
          onClick={onCheckout}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#FF1275";
            e.target.style.color = "#240416";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#FF1275";
          }}
        >
          CONTINUE TO CHECKOUT
        </button>
      </div>
    </>
  );
}
