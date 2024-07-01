import axios from "axios";
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    GET_ALL_MESSAGES_RECIVED, 
    GET_MESSAGE_RECIVED_BY_ID, 
    FILTER_BY_SOCIAL_MEDIA,
    FILTER_BY_STATE 
} from "../types";

const URL = 'https://electrica_mosconi-server.onrender.com' || 'http://localhost:3000';

//RUTAS MENSAJES
//RECIBIDOS:
//getAll: /message/received/
//getById: /message/received/:id

export const getAllMessagesAction = () => {
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
}



