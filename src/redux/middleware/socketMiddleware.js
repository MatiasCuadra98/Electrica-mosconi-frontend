import { io } from "socket.io-client";
import { ADD_NEW_MESSAGE_RECEIVED, CONNECT_SOCKET, DISCONNECT_SOCKET } from "../types";

const socketMiddleware = (store) => {
  let socket = null;

  return (next) => (action) => {
    switch (action.type) {
      case CONNECT_SOCKET:
        if (socket) {
          socket.disconnect();
        }

        // Conectar con el servidor WebSocket
        socket = io("https://electrica-mosconi-server.onrender.com", {
          transports: ["websocket"],
        });

        socket.on("connect", () => {
          console.log("Socket conectado:", socket.id);
        });

        socket.on("NEW_MESSAGE_RECEIVED", (message) => {
          store.dispatch({
            type: ADD_NEW_MESSAGE_RECEIVED,
            payload: message,
          });
        });
        // socket.on("NEW_MESSAGE_RECEIVED", (message) => {
        //   store.dispatch({
        //     type: NEW_MESSAGE_RECEIVED,
        //     payload: message,
        //   });
        // });

        socket.on("disconnect", () => {
          console.log("Socket desconectado");
        });
        break;

      case DISCONNECT_SOCKET:
        if (socket) {
          socket.disconnect();
        }
        socket = null;
        break;

      default:
        break;
    }

    return next(action);
  };
};

export default socketMiddleware;
