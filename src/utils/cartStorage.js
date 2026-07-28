const QUANTITY_KEY = "cartQuantity";
const VARIANT_KEY = "cartVariantId";
const EMPTY_KEY = "cartIsEmpty";

export function isCartEmpty() {
  return localStorage.getItem(EMPTY_KEY) === "true";
}

export function clearCartStorage() {
  localStorage.removeItem(QUANTITY_KEY);
  localStorage.removeItem(VARIANT_KEY);
  localStorage.setItem(EMPTY_KEY, "true");
  window.dispatchEvent(new Event("unpop:cart-cleared"));
}

export function seedCartStorage({ quantity = 1, variantId } = {}) {
  localStorage.removeItem(EMPTY_KEY);
  localStorage.setItem(QUANTITY_KEY, String(Math.max(1, quantity)));
  if (variantId) {
    localStorage.setItem(VARIANT_KEY, String(variantId));
  }
  window.dispatchEvent(new Event("unpop:cart-updated"));
}

export function getCartQuantity() {
  const value = parseInt(localStorage.getItem(QUANTITY_KEY), 10);
  return Number.isFinite(value) && value > 0 ? value : 1;
}

export function getCartVariantId() {
  return localStorage.getItem(VARIANT_KEY);
}

export function setCartQuantity(quantity) {
  localStorage.setItem(QUANTITY_KEY, String(Math.max(1, quantity)));
  localStorage.removeItem(EMPTY_KEY);
}

export function setCartVariantId(variantId) {
  localStorage.setItem(VARIANT_KEY, String(variantId));
  localStorage.removeItem(EMPTY_KEY);
}
