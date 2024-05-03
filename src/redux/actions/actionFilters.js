import axios from 'axios';
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    FILTER_BY_SOCIAL_MEDIA,
    FILTER_BY_STATE, 
    SEARCH_BY_CONTACT
} from '../types.js';

export const filterBySocialMediaAction = (socialMedia) => {
    try {
        return {
            type: FILTER_BY_SOCIAL_MEDIA,
            payload: socialMedia
        }     
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No podemos mostrar tu selección",
            "Ok"
          );
    }
}

export const filterByStateAction = (state) => {
    try {
        return {
            type: FILTER_BY_STATE,
            payload: state
        }     
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No podemos mostrar tu selección",
            "Ok"
          );
    }
}

export const searchByContactAction = (contact) => {
    try {  
        return async (dispatch) => {
            const response = await axios.get('ruta que trae un contacto con por nombre y sus mensajes asociados');
            const messages = response.data;
            dispatch({type: SEARCH_BY_CONTACT, payload: messages})
        };   
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No hay mensajes de ese contacto",
            "Ok"
          );
    }
};