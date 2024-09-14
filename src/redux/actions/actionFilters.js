import axios from 'axios';
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    FILTER_BY_SOCIAL_MEDIA,
    FILTER_BY_STATE,
    CLEAN_FILTERS, 
    SEARCH_BY_CONTACT
} from '../types.js';


//const URL = 'http://localhost:3000';
const URL = 'https://electrica-mosconi-server.onrender.com';

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
};

export const cleanFiltersAction = () => {
    return {
      type: 'CLEAN_FILTERS',
    };
  };

export const searchByContactAction = (contact) => {  
    try {  
        return async (dispatch) => {
            const response = await axios.get(`${URL}/contact?name=${contact}`);
            const contacts = response.data;
            dispatch({type: SEARCH_BY_CONTACT, payload: contacts})            
        };   
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No hay mensajes asociados a ese contacto",
            "Ok"
          );
    }
};