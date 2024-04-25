import axios from 'axios';
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/utils/alerts/alerts.jsx'
import {
    FILTER_BY_SOCIAL_MEDIA,
    FILTER_BY_STATE
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