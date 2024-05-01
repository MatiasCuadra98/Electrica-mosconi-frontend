import axios from "axios";
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import { GET_ALL_MESSAGES_RECIVED, GET_MESSAGE_RECIVED_BY_ID } from "../types";

export const getAllMessagesAction = () => {
    try {
        return async (dispatch) => {
            const response = await axios.get('ruta que trae todos los mensajes');
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



