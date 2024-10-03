import axios from 'axios';
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    CLEAN_USER_BY_ID,
    GET_ALL_USERS,
    GET_USER_BY_ID,
    UPDATE_USER,
    ADMI_LOGIN,
} from '../types.js';

const URL = 'https://electrica-mosconi-server.onrender.com';
//const URL = 'http://localhost:3000';
//RUTAS USER:
// getAll: /user
//getById: /user/:id
//crear: /user/create
//editar: /user/update/:id
//eliminar: /user/delete/:id


export const getAllUsersAction = () => {
    return async (dispatch) => {
                try {
                const response = await axios.get(`${URL}/user`);
                const users = response.data;  
                dispatch({type: GET_ALL_USERS, payload: users})
            } catch (error) {
                sweetAlertsError(
                    "Intenta de nuevo",
                    "No podemos mostrar a los miembros de tu equipo",
                    "Ok"
                  ); 
            }
        }
    };


export const getUserByIdAction = (userId) => {
    //console.log('2A- entro en getUserByIdAction con ID', userId);
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL}/user/${userId}`);
            const user = response.data;  
            dispatch({type: GET_USER_BY_ID, payload: user})
        } catch (error) {
            if(!userId) {
                sweetAlertsError(
                    "Intenta de nuevo",
                    "No encontramos el usuario solicitado",
                    "Ok"
                  ); 
            }
        }
    }
};

export const cleanUserByIdAction = () => {
        return {
            type: CLEAN_USER_BY_ID,
        }
};

export const updateUserAction = (userId, input) => {
    return async (dispatch) => {
        try {
            await axios.put(`${URL}/user/update//${userId}`, input);
            dispatch({type: UPDATE_USER, payload: input})
            sweetAlertsSuccessfully(
                `Felicitaciones ${input.name}!`,
                `tus datos se actualizaron corectamente: ${res.data.message}.Sigamos con los datos de la empresa`,
                 "Ok"
                )
        } catch (error) {
            sweetAlertsError(
                `${input.name},  intenta de nuevo...`,
                "No pudimos actualizar tus datos",
                "Ok"
            ); 
        }
    }
}
export const admiLoginAction = (boolean) => {
    return {
        type: ADMI_LOGIN,
        payload: boolean ,
    }
};