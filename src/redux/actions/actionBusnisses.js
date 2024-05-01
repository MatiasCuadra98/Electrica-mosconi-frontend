import axios from 'axios';
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    GET_BUSNISSES_BY_ID,
} from '../types.js';

export const getBusnissesByIdAction = (busnissesId, busnissesName) => {
    try {
        return async (dispatch) => {
            const response = await axios.get(`http://localhost:3000/getBusiness/${busnissesId}`);
            const busnisses = response.data;   
            dispatch({type: GET_BUSNISSES_BY_ID, payload: busnisses}) 
        }
    } catch (error) {
        sweetAlertsError(
            "Intenta de nuevo",
            `No podemos encontrar a ${busnissesName}`,
            "Ok"
          ); 
    }
}
