import { UPDATE_TICKERS } from "../actions/actions";

const initialState = {
  tickers: [],
};

export function reducer(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  switch (action.type) {
    case UPDATE_TICKERS:
      state.tickers = [...action.update[0]];
      break;

    default:
      break;
  }
  return state;
}
