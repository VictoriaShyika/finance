export const UPDATE_TICKERS = "UPDATE_TICKERS";

export function updateTickers(update) {
  return {
    type: UPDATE_TICKERS,
    update,
  };
}
