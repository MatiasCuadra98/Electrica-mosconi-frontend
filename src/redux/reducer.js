import {
    GET_BUSINESS_BY_ID,
    GET_ALL_USERS,
    GET_USER_BY_ID, 
    FILTER_BY_SOCIAL_MEDIA,
    FILTER_BY_STATE
} from './types';

const initialState = {
    //**--BUSNISSES-- */
    //negocio por id
    business: {},
    //**--USERS--**//
    //todos los usuarios deun negocio(+ copia para filtros)
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
    case GET_BUSINESS_BY_ID:
        return {
            ...state,
            business: action.payload
        };
    //***--REDUCER DE USUARIOS-- */
//trae todos los usuarios de un negocio
        case GET_ALL_USERS:
            let allBusinessUsers = action.payload
            //console.log('id business: ', state.business.id);
            const usersFiltered = allBusinessUsers.filter(user => user.Business.id === state.business.id)
            //console.log('usersFiltered: ', usersFiltered);
            return {
                ...state,
                users: usersFiltered,
                allUsers: usersFiltered
            };
            case GET_USER_BY_ID:
                //let user1 = action.payload
                //console.log('entro al reducer con payload: ', user1);
                return {
                    ...state,
                    user: action.payload,
                };

    default:
        return {
            ...state
        };
}

};

export default rootReducer;