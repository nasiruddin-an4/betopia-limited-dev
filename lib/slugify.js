/**
 * Generate a clean SEO-friendly slug from a title only.
 * Example: "Sabina Akter Interview" → "sabina-akter-interview"
 */
export function generateNewsSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "") // keep unicode letters, numbers, spaces, hyphens
    .replace(/\s+/g, "-") // spaces to hyphens
    .replace(/-+/g, "-") // collapse multiple hyphens
    .replace(/^-|-$/g, "") // trim leading/trailing hyphens
    .slice(0, 120); // limit length
}
