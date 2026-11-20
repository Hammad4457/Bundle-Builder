import { DEFAULT_VARIANT } from "../constants";

export function getKey(productId, variantId) {
  return `${productId}:${variantId || DEFAULT_VARIANT}`;
}

export function getActiveVariant(product, activeVariants) {
  if (product.variants.length === 0) return DEFAULT_VARIANT;
  return activeVariants[product.id] || product.variants[0].id;
}

export function getQty(quantities, key) {
  return quantities[key] || 0;
}

export function getProductQty(product, quantities) {
  if (product.variants.length === 0) {
    return getQty(quantities, getKey(product.id));
  }
  return product.variants.reduce(
    (sum, variant) => sum + getQty(quantities, getKey(product.id, variant.id)),
    0,
  );
}

export function getSelectedCount(products, quantities) {
  return products.filter((product) => getProductQty(product, quantities) > 0)
    .length;
}

export function getReviewGroups(bundle, quantities) {
  const groups = bundle.reviewGroups.map((group) => {
    const lines = [];

    bundle.products
      .filter((product) => product.reviewGroup === group.id)
      .forEach((product) => {
        const variants =
          product.variants.length > 0 ? product.variants : [null];

        variants.forEach((variant) => {
          const key = getKey(product.id, variant?.id);
          const qty = getQty(quantities, key);
          if (qty > 0) {
            lines.push({ key, product, variant, qty });
          }
        });
      });

    return { ...group, lines };
  });

  return groups.filter((group) => group.lines.length > 0);
}

export function getTotals(bundle, quantities) {
  let total = 0;
  let oldTotal = 0;

  bundle.products.forEach((product) => {
    const qty = getProductQty(product, quantities);
    total += product.price * qty;
    oldTotal += (product.compareAtPrice || product.price) * qty;
  });

  total += bundle.shipping.price;

  return {
    total,
    oldTotal,
    savings: oldTotal - total,
    monthly: total / bundle.financing.months,
  };
}
