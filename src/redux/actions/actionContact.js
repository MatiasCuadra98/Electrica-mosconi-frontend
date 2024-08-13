import axios from "axios";
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
GET_CONTACT_BY_ID,
GET_CONTACT_BY_MESSAGE_RECEIVED
} from "../types";
// const URL = 'https://electrica_mosconi-server.onrender.com' || 'http://localhost:3000';
// const URL = 'http://electrica_mosconi-server.onrender.com' || 'http://localhost:3000';
const URL = 'http://localhost:3000';
//RUTAS CONTACTOS: 
///getById : /contact/:id

export const getContactByIdAction = (contactId) => {
    try {
        return async (dispatch) => {
            const response = await axios.get(`${URL}/contact/${contactId}`);
            const contact = response.data;
            dispatch({type: GET_CONTACT_BY_ID, payload: contact})
        }
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            `No podemos mostrar al contacto con ID ${contactId}`,
            "Ok"
          );  
    }
};
export const getContactByMessageReceivedAction = (messageId) => {
    //console.log('entro en la action con mensaje Id', messageId);
    try {
        return async (dispatch) => {
            //console.log('entro en la ruta de mensaje por id');
            const res = await axios.get(`${URL}/message/received/${messageId}`);
            //console.log('dataMensaje', res);
            const message = res.data
            const contactId = message.Contact.id;
            const response = await axios.get(`${URL}/contact/${contactId}`);
            const contact = response.data;
            dispatch({type: GET_CONTACT_BY_MESSAGE_RECEIVED, payload: {message, contact}})
        }
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            `No podemos mostrar el contacto asociado al mensaje con ID ${messageId}`,
            "Ok"
          );  
    }
}