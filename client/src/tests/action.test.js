import { updateTickers } from "../store/actions/actions";

describe(">>>A C T I O N --- Test Actions", () => {
  it("+++ action update data", () => {
    const update = updateTickers("update");
    expect(update).toEqual({ type: "UPDATE_TICKERS", update: "update" });
  });
  it("+++ action update data", () => {
    const update = updateTickers("some data");
    expect(update).toEqual({ type: "UPDATE_TICKERS", update: "some data" });
  });
});
