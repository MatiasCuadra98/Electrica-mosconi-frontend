import { io } from "socket.io-client";
import { ADD_NEW_MESSAGE_RECEIVED, CONNECT_SOCKET, DISCONNECT_SOCKET } from "../types";
//const URL = import.meta.env.VITE_API_URL;
const URL= "https://electrica-mosconi-server.onrender.com";
//const URL = 'http://localhost:3000';

const socketMiddleware = (store) => {
  let socket = null;

  return (next) => (action) => {
    switch (action.type) {
      case CONNECT_SOCKET:
        if (socket) {
          socket.disconnect();
        }
          socket = io(URL, {
            transports: ["websocket"],
          });
        
        // Conectar con el servidor WebSocket
        socket.on("connect", () => {
          console.log("Socket conectado:", socket.id);
        });

        socket.on("SE_EMITEN_OTRAS_COSAS", (mensaje) => {
          console.log("Se emiten otras cosas:", mensaje);
        });
        socket.on("NEW_MESSAGE_RECEIVED", (message) => {
          console.log("Nuevo mensaje recibido:", message); //==> no entra en este console!!!
          store.dispatch({
            type: ADD_NEW_MESSAGE_RECEIVED,
            payload: message,
          });
        });
        // socket.on("disconnect", () => {
          //   console.log("Socket desconectado");
          // });
        break;

      case DISCONNECT_SOCKET:
        if (socket) {
          socket.disconnect();
        }
        // socket = null;
        break;

      default:
        break;
    }

    return next(action);
  };
};

export default socketMiddleware;
