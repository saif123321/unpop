import React, { useEffect, useMemo, useState } from "react";
import { getUnpopSublimeColaProduct } from "../shopifyProduct-unpop-12pk";
import { createCheckout } from "../createCheckout";
import { assetUrl } from "../utils/assetUrl";
import { seedCartStorage } from "../utils/cartStorage";
import "./pdp.css";
import "./responsivepdp.css";

const FALLBACK_THUMBS = [
  assetUrl("/images/pdp/thumb-1.png"),
  assetUrl("/images/pdp/thumb-2.png"),
  assetUrl("/images/pdp/thumb-3.png"),
  assetUrl("/images/pdp/thumb-4.png"),
  assetUrl("/images/pdp/thumb-5.png"),
];

const TRUST_ITEMS = [
  {
    icon: assetUrl("/images/pdp/icon-shipping.svg"),
    label: "Fast Shipping on Orders $50+",
  },
  {
    icon: assetUrl("/images/pdp/icon-lab.svg"),
    label: "Lab Tested\nfor Quality",
  },
  {
    icon: assetUrl("/images/pdp/icon-secure.svg"),
    label: "Secure\nCheckout",
  },
];

function formatUsd(amount) {
  return `$${Number(amount).toFixed(2)} USD`;
}

function getDisplayTitle(title = "") {
  if (title.toLowerCase().includes("sublime cola")) {
    return "UnPop! Sublime Cola";
  }
  return title.split("|")[0].trim() || title;
}

function getBestValueVariantId(variants = []) {
  if (variants.length < 2) return null;
  return [...variants].sort((a, b) => a.perCan - b.perCan)[0]?.id ?? null;
}

export default function PdpBanner({ onAddToCart }) {
  const [product, setProduct] = useState(null);
  const [variantId, setVariantId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadProduct() {
      try {
        const data = await getUnpopSublimeColaProduct();
        if (!mounted) return;

        const savedVariantId = localStorage.getItem("cartVariantId");
        const savedVariant = data.variants.find(
          (variant) => variant.id === savedVariantId
        );
        const defaultVariant =
          savedVariant ||
          data.variants.find((variant) => variant.cans === 12) ||
          data.variants.find((variant) =>
            variant.title.toLowerCase().includes("12")
          ) ||
          data.variants.find((variant) => variant.cans === 6) ||
          data.variants.find((variant) =>
            variant.title.toLowerCase().includes("6")
          ) ||
          data.variants[0];

        const savedQuantity = parseInt(localStorage.getItem("cartQuantity"), 10);

        setProduct(data);
        setVariantId(defaultVariant?.id ? String(defaultVariant.id) : null);
        setQuantity(
          Number.isFinite(savedQuantity) && savedQuantity > 0 ? savedQuantity : 1
        );
      } catch (error) {
        console.error("Failed to load PDP product:", error);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    loadProduct();
    return () => {
      mounted = false;
    };
  }, []);

  const galleryImages = useMemo(() => {
    // if (!product) return FALLBACK_THUMBS;
    // const shopifyImages = product.images?.filter(Boolean) || [];
    // if (shopifyImages.length >= 5) return shopifyImages.slice(0, 5);
    // if (shopifyImages.length > 0) {
    //   return [...shopifyImages, ...FALLBACK_THUMBS].slice(0, 5);
    // }
    return [
      assetUrl("/images/pdp/can-main.png"),
      ...FALLBACK_THUMBS.slice(1),
    ];
    // return [
    //   product.image || assetUrl("/images/pdp/can-main.png"),
    //   ...FALLBACK_THUMBS.slice(1),
    // ];
  }, [product]);

  const bestValueId = getBestValueVariantId(product?.variants);

  const handleVariantSelect = (id) => {
    const nextId = String(id);
    setVariantId(nextId);
    localStorage.setItem("cartVariantId", nextId);
  };

  const handleQuantityChange = (next) => {
    const value = Math.max(1, next);
    setQuantity(value);
    localStorage.setItem("cartQuantity", String(value));
  };

  const handleAddToCart = async () => {
    if (!variantId || isAdding) return;

    seedCartStorage({ quantity, variantId });

    if (typeof onAddToCart === "function") {
      onAddToCart();
      return;
    }

    try {
      setIsAdding(true);
      const url = await createCheckout(variantId, quantity);
      window.location.href = url;
    } catch (error) {
      console.error("Add to cart failed:", error);
    } finally {
      setIsAdding(false);
    }
  };

  if (isLoading) {
    return (
      <section id="pdp-banner" className="pdp-banner pdp-banner__status">
        <p className="pdp-banner__status-text">Loading product...</p>
      </section>
    );
  }

  if (!product) {
    return (
      <section id="pdp-banner" className="pdp-banner pdp-banner__status">
        <p className="pdp-banner__status-text pdp-banner__status-text--error">
          Unable to load product.
        </p>
      </section>
    );
  }

  return (
    <section id="pdp-banner" className="pdp-banner">
      <div className="pdp-banner__layout">
        {/* Left — Product imagery */}
        <div className="pdp-banner__gallery">
          <video
            className="pdp-banner__gallery-video"
            src={assetUrl("/images/pdp/pdp-banner-video-bg.mp4")}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="pdp-banner__gallery-overlay" aria-hidden="true" />
          <img
            src={assetUrl("/images/pdp/bubble-bg.svg")}
            alt=""
            aria-hidden="true"
            className="pdp-banner__gallery-bubbles"
          />

          <div className="pdp-banner__gallery-inner">
            <div className="pdp-banner__main-image-wrap">
              <img
                src={galleryImages[activeImage] || assetUrl("/images/pdp/can-main.png")}
                alt={product.title}
                className="pdp-banner__main-image"
              />
            </div>

            <div className="pdp-banner__thumbs">
              {galleryImages.map((src, index) => (
                <button
                  key={`${src}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`pdp-banner__thumb${activeImage === index ? " is-active" : ""}`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Product details */}
        <div className="pdp-banner__details">
          <div className="pdp-banner__details-inner">
            <div className="pdp-banner__header">
              <div className="pdp-banner__rating-row">
                <div className="pdp-banner__stars">
                  <img
                    src={assetUrl("/images/pdp/stars.svg")}
                    alt="5 star rating"
                    className="pdp-banner__stars-img"
                  />
                  <a href="#reviews" className="pdp-banner__reviews">
                    {product.reviewCount} Reviews
                  </a>
                </div>
                <h1 className="pdp-banner__title">
                  {getDisplayTitle(product.title)}
                </h1>
              </div>
              {product.summaryHtml ? (
                <div
                  className="pdp-banner__short-desc"
                  dangerouslySetInnerHTML={{ __html: product.summaryHtml }}
                />
              ) : (
                <p className="pdp-banner__short-desc">{product.shortDescription}</p>
              )}
            </div>

            <hr className="pdp-banner__divider" />

            <div className="pdp-banner__pack">
              <ol className="pdp-banner__pack-label">
                <li>Choose Pack Size</li>
              </ol>

              <div className="pdp-banner__pack-options">
                {product.variants.map((variant) => {
                  const isSelected = String(variant.id) === String(variantId);
                  const isBestValue = String(variant.id) === String(bestValueId);
                  const packLabel =
                    variant.cans >= 2
                      ? `${variant.cans} Pack`
                      : variant.title;

                  return (
                    <div
                      key={String(variant.id)}
                      className={`pdp-banner__pack-card-wrap${isBestValue ? " has-badge" : ""}`}
                    >
                      {isBestValue && (
                        <div className="pdp-banner__best-value">Best Value</div>
                      )}
                      <button
                        type="button"
                        onClick={() => handleVariantSelect(variant.id)}
                        className={`pdp-banner__pack-card${isSelected ? " is-selected" : ""}`}
                        aria-pressed={isSelected}
                      >
                        <div className="pdp-banner__pack-card-body">
                          <span className="pdp-banner__radio" aria-hidden="true">
                            {isSelected ? (
                              <span className="pdp-banner__radio-dot" />
                            ) : null}
                          </span>
                          <div className="pdp-banner__pack-info">
                            <p className="pdp-banner__pack-name">{packLabel}</p>
                            <div className="pdp-banner__pack-pricing">
                              <p className="pdp-banner__pack-price">
                                {formatUsd(variant.price)}
                              </p>
                              <p className="pdp-banner__pack-per-can">
                                ${Number(variant.perCan).toFixed(2)} per can
                              </p>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pdp-banner__purchase">
              <div className="pdp-banner__purchase-row">
                <div className="pdp-banner__qty">
                  <button
                    type="button"
                    className="pdp-banner__qty-btn"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    <span className="pdp-banner__qty-minus" />
                  </button>
                  <div className="pdp-banner__qty-value">{quantity}</div>
                  <button
                    type="button"
                    className="pdp-banner__qty-btn"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <span className="pdp-banner__qty-plus-h" />
                    <span className="pdp-banner__qty-plus-v" />
                  </button>
                </div>

                <button
                  type="button"
                  className="pdp-banner__atc"
                  onClick={handleAddToCart}
                  disabled={isAdding || !variantId}
                >
                  {isAdding ? "Adding..." : "Add to Cart"}
                </button>
              </div>

              <div className="pdp-banner__shop-pay">
                <p className="pdp-banner__shop-pay-text">
                  Pay over time for orders over $35.00 with
                </p>
                <img
                  src={assetUrl("/images/pdp/shop-pay.svg")}
                  alt="Shop Pay"
                  className="pdp-banner__shop-pay-logo"
                />
              </div>
            </div>

            <div className="pdp-banner__trust">
              <hr className="pdp-banner__divider" />
              <div className="pdp-banner__trust-row">
                {TRUST_ITEMS.map((item) => (
                  <div key={item.label} className="pdp-banner__trust-item">
                    <img
                      src={item.icon}
                      alt=""
                      className="pdp-banner__trust-icon"
                    />
                    <p className="pdp-banner__trust-label">{item.label}</p>
                  </div>
                ))}
              </div>
              <hr className="pdp-banner__divider" />
            </div>

            <div className="pdp-banner__description">
              <p className="pdp-banner__description-title">Product Description</p>
              {product.descriptionHtml ? (
                <div
                  className="pdp-banner__description-html"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              ) : product.descriptionBullets?.length > 0 ? (
                <ul className="pdp-banner__description-list">
                  {product.descriptionBullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
