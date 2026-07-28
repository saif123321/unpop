import React, { useState, useEffect } from "react";
import "./cart-modal.css";
import { getUnpopProduct } from "../shopifyProduct";
import { createCheckout } from "../createCheckout";
import { assetUrl } from "../utils/assetUrl";
import {
  clearCartStorage,
  getCartQuantity,
  getCartVariantId,
  isCartEmpty,
  setCartQuantity,
  setCartVariantId,
} from "../utils/cartStorage";

const CART_PRODUCT_IMAGE = assetUrl("/images/cart-product.png");

export default function CartModal({ isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [variantId, setVariantId] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getUnpopProduct();
        setProduct(data);

        if (isCartEmpty()) {
          setIsEmpty(true);
          setVariantId(null);
          setQuantity(1);
          return;
        }

        const savedVariantId = getCartVariantId();
        const savedVariant = data.variants.find(
          (variant) => String(variant.id) === String(savedVariantId)
        );
        const defaultVariant =
          savedVariant ||
          data.variants.find((variant) =>
            variant.title.toLowerCase().includes("12")
          ) ||
          data.variants.find((variant) =>
            variant.title.toLowerCase().includes("6")
          ) ||
          data.variants[0];

        setVariantId(defaultVariant?.id ? String(defaultVariant.id) : null);
        setQuantity(getCartQuantity());
        setIsEmpty(false);
      } catch (error) {
        console.error("Failed to load cart product:", error);
      }
    }

    loadProduct();
  }, []);

  useEffect(() => {
    if (!product?.variants?.length) return;

    const syncFromStorage = () => {
      if (isCartEmpty()) {
        setIsEmpty(true);
        setQuantity(1);
        setVariantId(null);
        return;
      }

      const savedVariantId = getCartVariantId();
      const defaultVariant =
        product.variants.find((variant) =>
          variant.title.toLowerCase().includes("12")
        ) ||
        product.variants.find((variant) =>
          variant.title.toLowerCase().includes("6")
        ) ||
        product.variants[0];

      const savedVariant = product.variants.find(
        (variant) => String(variant.id) === String(savedVariantId)
      );

      setQuantity(getCartQuantity());
      setVariantId(
        savedVariant
          ? String(savedVariant.id)
          : defaultVariant?.id
            ? String(defaultVariant.id)
            : null
      );
      setIsEmpty(false);
    };

    if (isOpen) {
      syncFromStorage();
    }

    window.addEventListener("unpop:cart-updated", syncFromStorage);
    window.addEventListener("unpop:cart-cleared", syncFromStorage);

    return () => {
      window.removeEventListener("unpop:cart-updated", syncFromStorage);
      window.removeEventListener("unpop:cart-cleared", syncFromStorage);
    };
  }, [isOpen, product]);

  const selectedVariant = product?.variants?.find(
    (variant) => String(variant.id) === String(variantId)
  );

  const handleVariantSelect = (newVariantId) => {
    const id = String(newVariantId);
    setVariantId(id);
    setCartVariantId(id);
  };

  const getPackLabel = (variant) => {
    if (variant.cans >= 2) {
      return `${variant.cans} Pack`;
    }

    const title = variant.title.toLowerCase();
    if (title.includes("12")) return "12 Pack";
    if (title.includes("6")) return "6 Pack";
    return variant.title;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsLoading(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCheckout = async () => {
    if (isLoading || isEmpty || !variantId) return;

    setIsLoading(true);
    try {
      const url = await createCheckout(variantId, quantity);
      setIsLoading(false);
      window.location.href = url;
    } catch (error) {
      console.error("Checkout failed:", error);
      setIsLoading(false);
    }
  };

  const handleRemoveItem = () => {
    setIsLoading(false);
    clearCartStorage();
    setIsEmpty(true);
    setQuantity(1);
    setVariantId(null);
  };

  const unitPrice = Number(selectedVariant?.price || 0);
  const subtotal = isEmpty ? "0.00" : (unitPrice * quantity).toFixed(2);

  const handleQuantityChange = (nextQuantity) => {
    const value = Math.max(1, nextQuantity);
    setQuantity(value);
    setCartQuantity(value);
  };

  const packCanCount =
    selectedVariant?.cans ||
    (selectedVariant
      ? Number(getPackLabel(selectedVariant).match(/\d+/)?.[0])
      : null);

  const packMetaLabel = packCanCount
    ? `${packCanCount} oz cans`
    : "12 oz cans";

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-modal-backdrop" onClick={onClose} aria-hidden="true" />

      <div
        className="cart-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Your cart"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-modal__top">
          <div className="cart-modal__header">
            <h2 className="cart-modal__title">Cart</h2>
            <button
              type="button"
              className="cart-modal__close"
              onClick={onClose}
              aria-label="Close cart"
            >
              <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path
                  d="M7 7L21 21M21 7L7 21"
                  stroke="#F11275"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {isEmpty ? (
            <div className="cart-modal__empty">
              <p className="cart-modal__empty-text">Your cart is empty</p>
              <button
                type="button"
                className="cart-modal__empty-btn"
                onClick={onClose}
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="cart-modal__item">
              <div className="cart-modal__image">
                <img
                  src={CART_PRODUCT_IMAGE}
                  alt={product?.title || "UnPop! Sublime Cola"}
                />
              </div>

              <div className="cart-product-details">
                <div className="cart-product-details__info">
                  <h3 className="cart-product-details__title">
                    unPop! Sublime Cola
                  </h3>
                  <p className="cart-product-details__meta">12oz cans</p>
                </div>

                {product?.variants?.length > 1 && (
                  <div
                    className="cart-pack__options"
                    role="radiogroup"
                    aria-label={product.optionName || "Package type"}
                  >
                    {product.variants.map((variant) => {
                      const isSelected =
                        String(variant.id) === String(variantId);

                      return (
                        <button
                          key={variant.id}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          className={`cart-pack__option${isSelected ? " is-selected" : ""}`}
                          onClick={() => handleVariantSelect(variant.id)}
                        >
                          {getPackLabel(variant)}
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="cart-product-details__footer">
                  <div
                    className="cart-quantity-input"
                    role="group"
                    aria-label="Quantity"
                  >
                    <button
                      type="button"
                      className={`cart-quantity-input__btn${quantity <= 1 ? " cart-quantity-input__btn--delete" : ""}`}
                      onClick={() =>
                        quantity <= 1
                          ? handleRemoveItem()
                          : handleQuantityChange(quantity - 1)
                      }
                      aria-label={
                        quantity <= 1 ? "Remove item" : "Decrease quantity"
                      }
                    >
                      {quantity <= 1 ? (
                        <svg
                          className="cart-quantity-input__trash"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M17.9043 5.17427C15.0226 4.88869 12.1235 4.74158 9.23316 4.74158C7.5197 4.74158 5.80624 4.82812 4.09278 5.00119L2.32739 5.17427"
                            stroke="currentColor"
                            strokeWidth="1.29808"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.08746 4.30084L7.27785 3.16719C7.41631 2.34508 7.52016 1.73065 8.98266 1.73065H11.25C12.7125 1.73065 12.825 2.37969 12.9548 3.17584L13.1452 4.30084"
                            stroke="currentColor"
                            strokeWidth="1.29808"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.0441 7.91016L15.4816 16.6246C15.3864 17.9832 15.3085 19.039 12.8941 19.039H7.33835C4.92393 19.039 4.84605 17.9832 4.75085 16.6246L4.18835 7.91016"
                            stroke="currentColor"
                            strokeWidth="1.29808"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.67078 14.2788H11.5525"
                            stroke="currentColor"
                            strokeWidth="1.29808"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.95197 10.8172H12.2789"
                            stroke="currentColor"
                            strokeWidth="1.29808"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <span className="cart-quantity-input__minus" />
                      )}
                    </button>
                    <div className="cart-quantity-input__value" aria-live="polite">
                      {quantity}
                    </div>
                    <button
                      type="button"
                      className="cart-quantity-input__btn"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <span className="cart-quantity-input__plus-h" />
                      <span className="cart-quantity-input__plus-v" />
                    </button>
                  </div>

                  <div className="cart-product-details__price-block">
                    <p className="cart-product-details__price">
                      ${unitPrice.toFixed(2)} USD
                    </p>
                    <p className="cart-product-details__price-note">each pack</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="cart-modal__footer">
          <div className="cart-modal__summary">
            <div className="cart-modal__subtotal">
              <p className="cart-modal__subtotal-label">SUBTOTAL</p>
              <p className="cart-modal__subtotal-value">${subtotal} USD</p>
            </div>

            <button
              type="button"
              disabled={isLoading || isEmpty || !variantId}
              className="cart-modal__checkout"
              onClick={handleCheckout}
            >
              {isLoading ? "Processing..." : "Go to Checkout"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
