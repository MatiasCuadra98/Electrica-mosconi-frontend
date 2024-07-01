import axios from 'axios';
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    GET_BUSINESS_BY_ID,
} from '../types.js';

const URL = 'https://electrica_mosconi-server.onrender.com' || 'http://localhost:3000';
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
