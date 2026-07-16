/**
 * Prefix public asset paths with Vite `base` (e.g. `/new-demo/`).
 * Pass root-absolute paths like `/images/foo.png`.
 */
export function assetUrl(path = "") {
  if (!path) return "";
  // Absolute http(s) or data URLs — leave unchanged
  if (/^(https?:|data:|blob:)/i.test(path)) return path;

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = String(path).replace(/^\/+/, "");

  return `${normalizedBase}${normalizedPath}`;
}
