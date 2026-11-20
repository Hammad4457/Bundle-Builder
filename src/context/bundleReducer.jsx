import { ACTIONS } from "../constants";

export function bundleReducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_STEP:
      return {
        ...state,
        openStepId: state.openStepId === action.stepId ? null : action.stepId,
      };

    case ACTIONS.OPEN_STEP:
      return { ...state, openStepId: action.stepId };

    case ACTIONS.SELECT_VARIANT:
      return {
        ...state,
        activeVariants: {
          ...state.activeVariants,
          [action.productId]: action.variantId,
        },
      };

    case ACTIONS.SET_QUANTITY:
      return {
        ...state,
        quantities: { ...state.quantities, [action.key]: action.qty },
      };

    default:
      return state;
  }
}
