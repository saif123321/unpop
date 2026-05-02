import React, { useState, useEffect } from "react";
import "./cart-modal.css";
import { getUnpopProduct } from "../shopifyProduct";
import { createCheckout } from "../createCheckout";

export default function CartModal({ isOpen, onClose, onCheckout }) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const savedQuantity = localStorage.getItem("cartQuantity");
      if (savedQuantity) {
        setQuantity(parseInt(savedQuantity));
      }
    }
  }, [isOpen]);

  const [product, setProduct] = useState(null);
  const [variantId, setVariantId] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      const data = await getUnpopProduct();
      setProduct(data);
      setVariantId(data.variantId);
    }

    loadProduct();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const subtotal = product ? (product.price * quantity).toFixed(2) : "0.00";
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
        className="fixed top-0 sm:top-20 md:top-24 right-0 sm:right-4 md:right-6 lg:right-16 bg-opacity-95 w-screen sm:w-96 md:w-[450px] lg:w-[500px] h-dvh sm:h-auto sm:max-h-none max-h-dvh sm:rounded-lg overflow-hidden flex flex-col"
        style={{ backgroundColor: "#240416", zIndex: "111111111" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-0 pb-4 sm:pb-6 border-b p-4 sm:p-6 flex-shrink-0" style={{ borderColor: "#FF1275" }}>
          <h2
            className="text-lg sm:text-xl md:text-2xl font-montserrat tracking-widest uppercase font-bold"
            style={{ color: "#FF1275" }}
          >
            CART
          </h2>
          <button
            onClick={onClose}
            className="text-2xl sm:text-3xl hover:opacity-70 transition-opacity"
            style={{ color: "#FF1275" }}
          >
            ×
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Product Item */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 items-start">
            {/* Product Image */}
            <div className="w-24 sm:w-28 md:w-32 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                <h3
                  className="text-sm sm:text-base font-montserrat tracking-wide uppercase font-semibold"
                  style={{ color: "#FF1275" }}
                >
                  {product?.title}
                </h3>
                {/* Quantity Selector */}
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="cart-quantity-input w-16 px-2 py-1 border-2 text-center font-montserrat font-semibold rounded flex-shrink-0 text-xs sm:text-sm"
                  style={{
                    borderColor: "#FF1275",
                    backgroundColor: "#300b21",
                    color: "#FF1275",
                  }}
                />
              </div>
              <p
                className="text-base sm:text-lg font-montserrat font-semibold mb-4"
                style={{ color: "#FF1275" }}
              >
                ${Number(product?.price || 0).toFixed(2)}  USD
              </p>

              {/* Remove Link */}
              <div className="flex justify-start sm:justify-end">
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
          {/* <div className="border-t mb-6" style={{ borderColor: "#FF1275" }}></div> */}
        </div>

        {/* Sticky Footer - Pricing Summary and Checkout Button */}
        <div className="flex-shrink-0 border-t p-4 sm:p-6" style={{ backgroundColor: "#240416", borderColor: "#FF1275" }}>
          {/* Pricing Summary */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <div className="flex justify-between items-center">
              <p
                className="font-montserrat tracking-widest uppercase text-xs sm:text-sm"
                style={{ color: "#FF1275" }}
              >
                SUBTOTAL
              </p>
              <p
                className="font-montserrat font-semibold text-sm sm:text-base"
                style={{ color: "#FF1275" }}
              >
                ${subtotal} USD
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p
                className="font-montserrat tracking-widest uppercase text-xs sm:text-sm"
                style={{ color: "#FF1275" }}
              >
                TAXES
              </p>
              <p
                className="font-montserrat font-semibold text-sm sm:text-base"
                style={{ color: "#FF1275" }}
              >
                ${taxes} USD
              </p>
            </div>

            <div className="flex justify-between items-center gap-2">
              <p
                className="font-montserrat tracking-widest uppercase text-xs sm:text-sm"
                style={{ color: "#FF1275" }}
              >
                SHIPPING
              </p>
              <p
                className="font-montserrat tracking-widest uppercase text-xs sm:text-sm text-right"
                style={{ color: "#FF1275" }}
              >
                CALCULATED AT CHECKOUT
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t mb-4 sm:mb-6" style={{ borderColor: "#FF1275" }}></div>

          {/* Checkout Button */}
          <button
            disabled={isLoading}
            className="w-full py-2 sm:py-3 rounded-full font-montserrat tracking-widest uppercase font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              border: "2px solid #FF1275",
              backgroundColor: "transparent",
              color: "#FF1275",
            }}
            onClick={async () => {
              setIsLoading(true);
              const url = await createCheckout(variantId, quantity);
              window.location.href = url;
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = "#FF1275";
                e.target.style.color = "#240416";
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#FF1275";
              }
            }}
          >
            {isLoading ? "PROCESSING..." : "CONTINUE TO CHECKOUT"}
          </button>
        </div>
      </div>
    </>
  );
}
