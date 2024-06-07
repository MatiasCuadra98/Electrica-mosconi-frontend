import axios from 'axios';
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    GET_BUSINESS_BY_ID,
    UPDATE_BUSINESS
} from '../types.js';

export const getBusinessByIdAction = (businessId, businessName) => {
    try {
        return async (dispatch) => {
            const response = await axios.get(`http://localhost:3000/getBusiness/${businessId}`);
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
            await axios.put(`http://localhost:3000/updateBusiness/${busnisessId}`, input);
            dispatch({type: UPDATE_BUSINESS, payload: input})
            sweetAlertsSuccessfully(
                `Felicitaciones!`,
                `Los datos de ${input.name} se actualizaron corectamente: ${res.data.message}.Sigamos con la palataforma de redes sociales`,
                 "Ok"
                )
        } catch (error) {
            sweetAlertsError(
                'Intenta de nuevo...',
                `No pudimos actualizar los datos de ${input.name}`,
                "Ok"
            ); 
        }
    }
}
