import { useSelector } from "react-redux";
import { CardElem } from "../../common/card";
import { LayoutContentElem } from "../../common/layout-content";

export const TickersList = () => {
  const tickers = useSelector((state) => state.tickers);

  return (
    <LayoutContentElem>
      {tickers.map((ticker, index) => (
        <CardElem key={index} ticker={ticker} />
      ))}
    </LayoutContentElem>
  );
};
