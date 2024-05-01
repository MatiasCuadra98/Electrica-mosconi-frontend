import {
    GET_BUSNISSES_BY_ID,
    GET_ALL_USERS,
    GET_USER_BY_ID, 
    FILTER_BY_SOCIAL_MEDIA,
    FILTER_BY_STATE
} from './types';

const initialState = {
    //**--BUSNISSES-- */
    //negocio por id
    busnisses: {},
    //**--USERS--**//
    //todos los usuarios (+ copia para filtros)
    users: [],
    allUsers: [],
    //usuario por id
    user: {},
      //**--MENSAJES--**//
    //todos los mensajes (+ copia para filtros)
    messages: [],
    allMessages: [],
    //mensaje por id
    message: {},

    //**--ESTADOS PARA CONTADOR DE MENSAJES-- */
    // deben modificarse segun seleccion de filtros y search => asignarle el action.payload
    socialMediaFilter: 'TODOS',
    stateFilter: 'TODOS',
    inputContact: '',

}

const rootReducer = (state = initialState, action) => {
switch (action.type) {
    //***--REDUCER DE NEGOCIOS-- */
//trae un negocio por id//
    case GET_BUSNISSES_BY_ID:
        return {
            ...state,
            busnisses: action.payload
        };
//***--REDUCER DE USUARIOS-- */
//trae todos los usuarios- members//
    case GET_ALL_USERS:
        return {
            ...state,
            users: action.payload,
            allUsers: action.payload,
        };
    default:
        return {
            ...state
        };
}

};

export default rootReducer;