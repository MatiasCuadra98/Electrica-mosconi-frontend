import { io } from "socket.io-client";
import { ADD_NEW_MESSAGE_RECEIVED, CONNECT_SOCKET, DISCONNECT_SOCKET } from "../types";
import { sweetAlertsError, sweetAlertsWarning } from "../../components/utils/alerts/alerts";

//const URL = import.meta.env.VITE_API_URL;
const URL= "https://electrica-mosconi-server.onrender.com";

export const connectSocket = () => (dispatch) => {
    try {
        // conexión del socket y despacho el socket como payload
        const socket = io(URL); 
        console.log('action me conecto con socket', socket);
        dispatch({
          type: CONNECT_SOCKET,
          payload: socket,
        });
        
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No pudimos entablar la conexión",
            "Ok"
          ); 
    }
};

export const disconnectSocket = () => (dispatch) => {
    try {
        socket.disconnect();
        console.log('desconexion socket por action');
        
        dispatch({
          type: DISCONNECT_SOCKET,
        });
        
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No pudimos detener la conexión",
            "Ok"
          ); 
    }
    };

export const addNewMessageReceivedAction = (message) => {
    try {
        console.log('entro a la action de socket con payload', message);
        
        sweetAlertsWarning(
            "Atención",
            "Has recibido un nuevo mensaje",
            "OK"
        )
        return {
            type: ADD_NEW_MESSAGE_RECEIVED,
            payload: message
        }     
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No podemos agregar el nuevo mensaje",
            "Ok"
          );
    }
}