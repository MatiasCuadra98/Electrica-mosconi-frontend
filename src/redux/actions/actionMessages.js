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
    CREATE_MESSAGE_SEND,
    NEW_MESSAGE_RECEIVED,
    GET_ALL_MESSAGES_SENT,
    SET_ACTIVE_MESSAGE,
    SET_UPLOAD_FILE
} from "../types";


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
            dispatch({ type: GET_ALL_MESSAGES_RECIVED, payload: messages });
            
            const { socket } = getState();  // socket desde el estado global
            // esucha nuevos mensajes a través del socket
            if (socket) {
                socket.on("NEW_MESSAGE_RECEIVED", (newMessage) => {
                    dispatch({
                        type: NEW_MESSAGE_RECEIVED,
                        payload: newMessage
                    });
                });
            }
            
        } catch (error) {
            console.log(error);
            if(error.response.status !== 400) {
                sweetAlertsError(
                    "Intenta de nuevo",
                    "No podemos mostrar tus mensajes recibidos",
                    "Ok"
                );
            }
        }
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

export const setActiveMessageAction = (messageId) => {
    return {
        type: SET_ACTIVE_MESSAGE,
        payload: messageId
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

export const createMessageSentAction = (input) => {
    return async (dispatch) => {
    try {
            const response = await axios.post(`${URL}/messageSend`, input);
            const message = response.data;
            dispatch({ type: CREATE_MESSAGE_SEND, payload: message });
    } catch (error) {
        console.log('error de action', error);
        sweetAlertsError(
            "Intenta de nuevo",
            "No podemos enviar tu respuesta",
            "Ok"
          );
    }

}}

export const getAllMessagesSentAction = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL}/message/sent`);
            const messages = response.data;
            dispatch({ type: GET_ALL_MESSAGES_SENT, payload: messages });           
        } catch (error) {
            console.log('messageSent', error);
            }        
    }
};

export const setUploadFileAction = (file) => {
    console.log('entro en la action setUploadFile con data:', file);
    
    return {
        type: SET_UPLOAD_FILE,
        payload: file    
    }
}