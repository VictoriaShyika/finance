import { createContext } from "react";
import io from "socket.io-client";
import { WS_BASE } from "../config/config";
import { useDispatch } from "react-redux";
import { updateTickers } from "../actions/actions";

const WebSocketContext = createContext(null);

export { WebSocketContext };

const Socket = ({ children }) => {
  let socket;
  let ws;

  const dispatch = useDispatch();

  if (!socket) {
    socket = io.connect(WS_BASE);

    socket.emit("start");
    socket.on("ticker", (msg) => {
      const payload = [msg];
      dispatch(updateTickers(payload));
    });
  }
  ws = {
    socket: socket,
  };

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};

export default Socket;
