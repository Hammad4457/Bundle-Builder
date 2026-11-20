import { useReducer } from "react";
import bundle from "../data/bundle.json";
import { ACTIONS, STORAGE_KEY } from "../constants";
import { bundleReducer } from "./bundleReducer";
import { BundleContext } from "./useBundle";
import { getReviewGroups, getTotals } from "../utils/cart";

function getStartState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : bundle.initialState;
}

export function BundleProvider({ children }) {
  const [state, dispatch] = useReducer(bundleReducer, null, getStartState);

  const toggleStep = (stepId) =>
    dispatch({ type: ACTIONS.TOGGLE_STEP, stepId });
  const openStep = (stepId) => dispatch({ type: ACTIONS.OPEN_STEP, stepId });
  const selectVariant = (productId, variantId) =>
    dispatch({ type: ACTIONS.SELECT_VARIANT, productId, variantId });
  const setQuantity = (key, qty) =>
    dispatch({ type: ACTIONS.SET_QUANTITY, key, qty });

  const saveSystem = () =>
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  const reviewGroups = getReviewGroups(bundle, state.quantities);
  const totals = getTotals(bundle, state.quantities);

  const value = {
    bundle,
    state,
    reviewGroups,
    totals,
    toggleStep,
    openStep,
    selectVariant,
    setQuantity,
    saveSystem,
  };

  return (
    <BundleContext.Provider value={value}>{children}</BundleContext.Provider>
  );
}
