import { useState, useCallback } from "react";
import { getUnpopProduct } from "../shopifyProduct";
import { createCheckout } from "../createCheckout";

const STATUS = {
  IDLE: "idle",
  PROCESSING: "processing",
  CREATED: "created",
  COMPLETED: "completed",
};

const STATUS_LABELS = {
  [STATUS.PROCESSING]: "Processing...",
  [STATUS.CREATED]: "Created",
  [STATUS.COMPLETED]: "Completed",
};

function getDefaultVariant(product) {
  return (
    product.variants.find((variant) =>
      variant.title.toLowerCase().includes("12")
    ) || product.variants[0]
  );
}

function getSelectedVariant(product) {
  const savedVariantId = localStorage.getItem("cartVariantId");
  const savedVariant = product.variants.find(
    (variant) => variant.id === savedVariantId
  );

  return savedVariant || getDefaultVariant(product);
}

function getSelectedQuantity() {
  const savedQuantity = localStorage.getItem("cartQuantity");
  const quantity = parseInt(savedQuantity, 10);
  return Number.isFinite(quantity) && quantity > 0 ? quantity : 1;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function buyNowCheckout() {
  const product = await getUnpopProduct();
  const variant = getSelectedVariant(product);
  const quantity = getSelectedQuantity();

  if (!variant?.id) {
    throw new Error("No product variant available");
  }

  return createCheckout(variant.id, quantity);
}

export function useBuyNow() {
  const [status, setStatus] = useState(STATUS.IDLE);

  const isBuying = status !== STATUS.IDLE;
  const buyNowLabel = STATUS_LABELS[status] || null;

  const handleBuyNow = useCallback(async () => {
    if (status !== STATUS.IDLE) return;

    try {
      setStatus(STATUS.PROCESSING);
      await wait(300);

      const url = await buyNowCheckout();

      setStatus(STATUS.CREATED);
      await wait(400);

      setStatus(STATUS.COMPLETED);
      await wait(500);

      setStatus(STATUS.IDLE);
      await wait(200);

      window.location.href = url;
    } catch (error) {
      console.error("Buy Now failed:", error);
      setStatus(STATUS.IDLE);
    }
  }, [status]);

  return { handleBuyNow, isBuying, buyNowLabel };
}
