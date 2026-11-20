export const STORAGE_KEY = "bundle-builder";

export const DEFAULT_VARIANT = "default";

export const ACTIONS = {
  TOGGLE_STEP: "TOGGLE_STEP",
  OPEN_STEP: "OPEN_STEP",
  SELECT_VARIANT: "SELECT_VARIANT",
  SET_QUANTITY: "SET_QUANTITY",
};

export const TEXT = {
  stepLabel: (step, total) => `Step ${step} of ${total}`,
  selected: (count) => `${count} selected`,
  next: (title) => `Next: ${title}`,
  learnMore: "Learn More",
  review: "Review",
  reviewTitle: "Your security system",
  reviewSubtitle:
    "Review your personalized protection system designed to keep what matters most safe.",
  checkout: "Checkout",
  saveForLater: "Save my system for later",
};
