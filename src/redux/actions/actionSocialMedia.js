import axios from 'axios';
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    GET_ALL_SOCIAL_MEDIA_BY_BUSINESS, 
    UPDATE_SOCIAL_MEDIA
} from '../types.js';

const URL = 'https://electrica-mosconi-server.onrender.com';

export const getAllSocialMediaByBusinessAction = () => {
    return async (dispatch) => {
                try {
                const response = await axios.get(`${URL}/socialMedia/active`);
                const socialMedia = response.data; 
                //console.log('array en action', socialMedia);
                 
                dispatch({type: GET_ALL_SOCIAL_MEDIA_BY_BUSINESS, payload: socialMedia})
            } catch (error) {
                console.log(error.message);
                 
            }
        }
    };

    export const updateSocialMediaAction = (socialMediaId, input) => {
        return async(dispatch) => {
            try {
                await axios.put(`${URL}/socialMedia/active/${socialMediaId}`, input);
                dispatch({type: UPDATE_SOCIAL_MEDIA})  
            } catch (error) {
                console.log(error.message);
                
            }
        }
    }
