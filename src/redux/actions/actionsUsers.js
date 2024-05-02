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
    return async (dispatch) => {
                try {
                const response = await axios.get('http://localhost:3000/getUser');
                const users = response.data; 
                //console.log(users);  
                dispatch({type: GET_ALL_USERS, payload: users})
                //console.log('entro en la accion y voy a reducer con payload: ', users);
            
            } catch (error) {
                console.log(error.message);
                sweetAlertsError(
                    "Intenta de nuevo",
                    "No podemos mostrar a los mienbros de tu equipo",
                    "Ok"
                  ); 
            }
        }
    };


export const getUserByIdAction = (userId) => {
    return async (dispatch) => {
            const response = await axios.get(`http://localhost:3000/getUser/${userId}`);
            const user = response.data; 
           // console.log('user: ', user);  
            dispatch({type: GET_USER_BY_ID, payload: user})
            //console.log('entro en la accion y voy al reducer con payload: ', user);
    }
};
