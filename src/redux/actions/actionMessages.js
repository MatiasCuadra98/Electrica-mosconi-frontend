import axios from "axios";
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    GET_ALL_MESSAGES_RECIVED,
    UPDATE_ACTIVE_MESSAGE_RECEIVED, 
    GET_MESSAGE_RECIVED_BY_ID, 
    DESACTIVATE_ALL_MESSAGES_RECEIVED,
    FILTER_BY_SOCIAL_MEDIA,
    FILTER_BY_STATE 
} from "../types";

// const URL = 'https://electrica_mosconi-server.onrender.com' || 'http://localhost:3000';
// const URL = 'http://electrica_mosconi-server.onrender.com' || 'http://localhost:3000';
const URL = 'http://localhost:3000';
//RUTAS MENSAJES
//RECIBIDOS:
//getAll: /message/received/
//getById: /message/received/:id
//cambiar active: /message/received/active/:id

//ENVIADOS:
//create mensaje enviado: /telegram/sendMessage

export const getAllMessagesReceivedAction = () => {
    try {
        return async (dispatch) => {
            const response = await axios.get(`${URL}/message/received`);
            const messages = response.data;   
            dispatch({type: GET_ALL_MESSAGES_RECIVED, payload: messages})
        }
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No podemos mostrar tus mensajes recibidos",
            "Ok"
          ); 
    }
};
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

export const deactivateAllMessagesReceivedAction = () => {
    return {
      type: 'DESACTIVATE_ALL_MESSAGES_RECEIVED',
    };
  };


//MENSAJES ENVIADOS:
export const createMessageSentAction = (input) => {
    return async (dispatch) => {
        const response = await axios.post(`${URL}/telegram/sendMessage`, input);
        dispatch({ type: CREATE_MESSAGE_SEND, })
        return response
}}