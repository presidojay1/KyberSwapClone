// src/dropdownReducer.js
import tokens from "../Modal-Components/tokens";
export const initialState = {
  trade: false,
  about: false,
  dao: false,
  box: false,
  belowbox: false,
  languageBox: false,
  selectedToken: tokens[2],
  isModalOpen: false,
};

export function dropdownReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_TRADE":
      return { ...state, trade: !state.trade, about: false, dao: false };
    case "TOGGLE_ABOUT":
      return { ...state, about: !state.about, trade: false, dao: false };
    case "TOGGLE_DAO":
      return { ...state, dao: !state.dao, trade: false, about: false };
    case "TOGGLE_BOX":
      return { ...state, box: !state.box, languageBox: true };
    case "TOGGLE_BELOWON":
      return { ...state, languageBox: true, box: false };
    case "TOGGLE_BELOWOFF":
      return { ...state, languageBox: false, box: true };
    case "TOGGLE_BOX_BELOW":
      return { ...state, box: false, belowbox: !state.belowbox };
    case "SELECT_TOKEN":
      return { ...state, selectedToken: action.payload };
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };
    case "CLOSE_ALL":
      return initialState;
    default:
      return state;
  }
}
