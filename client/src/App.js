import "./App.css";
import { Provider } from "react-redux";
import WebSocketProvider from "./store/WebSoket/WebSoket";
import store from "./store/store";
import { TickersList } from "./module/tickers-list";

const App = () => {
  return (
    <Provider store={store}>
      <WebSocketProvider>
        <TickersList />
      </WebSocketProvider>
    </Provider>
  );
};

export default App;
