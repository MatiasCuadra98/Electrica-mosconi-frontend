import axios from 'axios';
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    GET_BUSINESS_BY_ID,
    LOGIN_BUSINESS,
    UPDATE_BUSINESS
} from '../types.js';

const URL = 'https://electrica-mosconi-server.onrender.com';
//const URL = 'http://localhost:3000';
//RUTAS BUSINESS:
//get by Id: /business/:id
//create : /business/create
//updape: /business/update/:id

export const getBusinessByIdAction = (businessId, businessName) => {
    try {
        return async (dispatch) => {
            const response = await axios.get(`${URL}/business/${businessId}`);
            const business = response.data;   
            dispatch({type: GET_BUSINESS_BY_ID, payload: business}) 
        }
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            `No podemos encontrar a ${businessName}`,
            "Ok"
          ); 
    }
}

export const updateBusnisessAction = (busnisessId, input) => {
    return async (dispatch) => {
        try {
            await axios.put(`${URL}/business/update/${busnisessId}`, input);
            dispatch({type: UPDATE_BUSINESS})
        } catch (error) {
            console.log(error.message);
        }
    }
};

export const loginBusinessAction = (input) => {
    return async (dispatch) => {
        try {
            const business = await axios.post(`${URL}/business/login`, input);
            dispatch({type: LOGIN_BUSINESS, payload: business})
            //getBusinessByIdAction(busnisessId, input.businessname)
        } catch (error) {
            sweetAlertsError(
                `${input.businessName} no puede acceder a OneInbox`,
                "comprueba que el nombre y la contraseña sean los correctos",
                "Ok"
            );    
        }
    }
}
