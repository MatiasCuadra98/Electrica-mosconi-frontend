import axios from "axios";
import {
    //sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    GET_ALL_MESSAGES_RECIVED,
    UPDATE_ACTIVE_MESSAGE_RECEIVED, 
    GET_MESSAGE_RECIVED_BY_ID,
    UPDATE_STATE_MESSAGE_RECEIVED,
    //DESACTIVATE_ALL_MESSAGES_RECEIVED,
    //FILTER_BY_SOCIAL_MEDIA,
    //FILTER_BY_STATE,
    CREATE_MESSAGE_SEND,
    NEW_MESSAGE_RECEIVED 
} from "../types";

//const URL = import.meta.env.VITE_API_URL;

const URL = 'https://electrica-mosconi-server.onrender.com';
//const URL = 'http://localhost:3000';
//RUTAS MENSAJES
//RECIBIDOS:
//getAll: /message/received/
//getById: /message/received/:id
//cambiar active: /message/received/active/:id

export const getAllMessagesReceivedAction = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`${URL}/message/received`);
            const messages = response.data;
            //console.log('cantidad de mensajes en action getALL', messages.length);
            
            dispatch({ type: GET_ALL_MESSAGES_RECIVED, payload: messages });
            
            const { socket } = getState();  // socket desde el estado global
            
            // esucha nuevos mensajes a través del socket
            if (socket) {
                socket.on("NEW_MESSAGE_RECEIVED", (newMessage) => {
                    // Despacha una acción para manejar el nuevo mensaje recibido
                    dispatch({
                        type: NEW_MESSAGE_RECEIVED,
                        payload: newMessage
                    });
                });
            }
            
        } catch (error) {
            sweetAlertsError(
                "Intenta de nuevo",
                "No podemos mostrar tus mensajes recibidos",
                "Ok"
            );
        }
    }
};
//ENVIADOS:
//create mensaje enviado: /telegram/sendMessage

// export const getAllMessagesReceivedAction = () => {
//     try {
//         return async (dispatch) => {
//             const response = await axios.get(`${URL}/message/received`);
//             const messages = response.data;   
//             dispatch({type: GET_ALL_MESSAGES_RECIVED, payload: messages})
//         }
//     } catch (error) {
//         sweetAlertsError(
//             "Intenta de nuevo",
//             "No podemos mostrar tus mensajes recibidos",
//             "Ok"
//           ); 
//     }
// };

export const getMessageReceivedByIdAction = (messageId) => {
    try {
        return async (dispatch) => {
            const response = await axios.get(`${URL}/message/received/${messageId}`);
            const message = response.data;
            dispatch({type: GET_MESSAGE_RECIVED_BY_ID, payload: message})
        }
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            `No podemos mostrar el mensaje con ID ${messageId}`,
            "Ok"
          );  
    }
}
export const updateActiveMessageReceivedAction = (messageId) => {
    try {
        return async (dispatch) => {
            const response = await axios.put(`${URL}/message/received/active/${messageId}`)
            dispatch({ type: UPDATE_ACTIVE_MESSAGE_RECEIVED, })
            return response
          } 
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No podemos activar/desactivar el mensaje seleccionado",
            "Ok"
          );  
    }

}

export const updateStateMessageReceivedAction = (messageId) => {
    try {
        return async (dispatch) => {
            const response = await axios.put(`${URL}/message/received/state/${messageId}`)
            dispatch({ type: UPDATE_STATE_MESSAGE_RECEIVED, })
            return response
          } 
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No podemos cambiar el estado del mensaje seleccionado",
            "Ok"
          );  
    }

}

export const deactivateAllMessagesReceivedAction = () => {
    return {
      type: 'DESACTIVATE_ALL_MESSAGES_RECEIVED',
    };
  };


//MENSAJES ENVIADOS:

// export const createMessageSentAction = (input) => {
//     return async (dispatch) => {
//         const response = await axios.post(`${URL}/telegram/sendMessage`, input);
//         dispatch({ type: CREATE_MESSAGE_SEND, })
//         return response
// }}

export const createMessageSentAction = (input) => {
    console.log('entro en la action del input', input);
    return async (dispatch, getState) => {
        const { socket } = getState();  // obtenemos el socket desde el estado global

    try {
            const response = await axios.post(`${URL}/telegram/sendMessage`, input);
            console.log('respuesta de la action', response.data);
            const message = response.data;

           
            console.log('envio la action al reducer');
            // despacho al reducer y emitimos un evento de socket con el nuevo mensaje
            dispatch({ type: CREATE_MESSAGE_SEND, payload: message });
            if (socket) {
                socket.emit("NEW_MESSAGE_SENT", message);
            }
    } catch (error) {
        console.log('error de action', error);
        sweetAlertsError(
            "Intenta de nuevo",
            "No podemos enviar tu respuesta",
            "Ok"
          );
    }

}}

