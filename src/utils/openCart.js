import { isCartEmpty, seedCartStorage } from "./cartStorage";

/**
 * Shared cart open behavior for Buy Now + cart icon.
 * After cart is cleared, both re-add the default product then open.
 */
export function prepareCartForOpen() {
  if (isCartEmpty()) {
    seedCartStorage({ quantity: 1 });
  }
}
