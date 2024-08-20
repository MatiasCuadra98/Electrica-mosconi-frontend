import { CONNECT_SOCKET, DISCONNECT_SOCKET, NEW_MESSAGE_RECEIVED } from "../types";
import { io } from "socket.io-client"; // importo io de socket

export const connectSocket = () => (dispatch) => {
  // conexión del socket y despacho el socket como payload
  const socket = io("https://electrica-mosconi-server.onrender.com");  
  dispatch({
    type: CONNECT_SOCKET,
    payload: socket,
  });

  // manejo de eventos de socket aca
  socket.on("NEW_MESSAGE_RECEIVED", (message) => {
    // despacho la acción para actualizar el estado global con el mensaje nuevo
    dispatch({
        type: NEW_MESSAGE_RECEIVED,
        payload: message,
    });
});
};

export const disconnectSocket = () => (dispatch, getState) => {
  const { socket } = getState();
  if (socket) {
    socket.disconnect();
    dispatch({
      type: DISCONNECT_SOCKET,
    });
  }
};

export const newMessageReceived = (message) => ({
  type: NEW_MESSAGE_RECEIVED,
  payload: message,
});
