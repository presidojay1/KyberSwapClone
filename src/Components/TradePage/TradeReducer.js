import tokens from "../Modal-Components/tokens";

// Define the initial state with default selected tokens
export const initialState = {
  token1: tokens[0], // Default to the first token in the list
  token2: tokens[1], // Default to the second token in the list
  isModalOpen: false,
  slippageOpen: false,
  slippageredopen: false,
  slippageRedText: false,
  slippageYellowOpen: false,
  slippageValue: 0.05,
  selectedTokenType: null, // To keep track of which token (token1 or token2) to update
};
export function tradeReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        selectedTokenType: action.payload, // token1 or token2
      };
    case "SLIPPAGE_OPEN":
      return {
        ...state,
        slippageOpen: !state.slippageOpen,
        slippageredopen: false,
        slippageRedText: false,
        slippageYellowOpen: false,
      };
    case "SLIPPAGE_VALUE":
      return {
        ...state,
        slippageValue: action.payload,
      };
    case "SLIPPAGE_REDOPEN":
      return {
        ...state,
        slippageredopen: !state.slippageredopen,
      };
    case "SLIPPAGE_CLOSES":
      return {
        ...state,
        slippageredopen: false,
        slippageRedText: false,
        slippageYellowOpen: false,
      };

    case "SLIPPAGE_REDTEXT":
      return {
        ...state,
        slippageRedText: !state.slippageRedText,
      };
    case "SLIPPAGE_YELLOWOPEN":
      return {
        ...state,
        slippageYellowOpen: !state.slippageYellowOpen,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        selectedTokenType: null,
      };
    case "SELECT_TOKEN":
      return {
        ...state,
        isModalOpen: false,
        [state.selectedTokenType]: action.payload, // Update token1 or token2
        selectedTokenType: null,
      };
    default:
      return state;
  }
}
