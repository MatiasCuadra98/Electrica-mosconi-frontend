import axios from 'axios';
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    GET_ALL_USERS,
    GET_USER_BY_ID,
    FILTER_BY_SOCIAL_MEDIA,
    FILTER_BY_STATE
} from '../types.js';
//USER
export const getAllUsersAction = () => {
    try {
        return async (dispatch) => {
            const response = await axios.get('ruta que trae todos los user');
            const users = response.data;   
            dispatch({type: GET_ALL_USERS, payload: users})
        }
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No podemos mostrar a los mienbros de tu equipo",
            "Ok"
          ); 
    }
}

export const getUserByIdAction = (id) => {
    try {
        return async (dispatch) => {
            const response = await axios.get('ruta que trae todos los user/${id}');
            const user = response.data;   
            dispatch({type: GET_USER_BY_ID, payload: users})
        }
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            "No podemos mostrar ese miembro de tu equipo",
            "Ok"
          ); 
    }
}
