import {
    GET_BUSINESS_BY_ID,
    UPDATE_BUSINESS,
    GET_ALL_USERS,
    GET_USER_BY_ID,
    UPDATE_USER, 
    FILTER_BY_SOCIAL_MEDIA,
    FILTER_BY_STATE,
    CLEAN_USER_BY_ID,
    GET_ALL_MESSAGES_RECIVED,
    GET_MESSAGE_RECIVED_BY_ID,
    UPDATE_ACTIVE_MESSAGE_RECEIVED,
    UPDATE_STATE_MESSAGE_RECEIVED,
    DESACTIVATE_ALL_MESSAGES_RECEIVED,
    GET_CONTACT_BY_ID,
    GET_CONTACT_BY_MESSAGE_RECEIVED,
    CREATE_MESSAGE_SEND,
    CLEAN_FILTERS
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
    //todos los mensajes recibidos (+ copia para filtros)
    messagesReceived: [],
    allMessagesReceived: [],
    //mensaje por id
    messageReceived: {},
          //**--CONTACTOS--**//
    //contacto por id // mensaje
    contact: {},

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
        case UPDATE_BUSINESS:
            return {
              ...state,
              user: {
                ...state.business,
                ...action.payload
              }
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

                return {
                    ...state,
                    user: action.payload,
                };
                case UPDATE_USER:
                    return {
                      ...state,
                      user: {
                        ...state.user,
                        ...action.payload
                      }
                    };
            case CLEAN_USER_BY_ID:
                return {
                    ...state,
                    user: {}
                }
//**REDUCER MENSAJES RECIBIDOS */
            case GET_ALL_MESSAGES_RECIVED:
                const messages = action.payload
                 const allMessagesFiltered = messages.filter(message => message.BusinessId === state.business.id)
                return {
                    ...state,
                    messagesReceived: allMessagesFiltered,
                    allMessagesReceived: allMessagesFiltered
                };
            case GET_MESSAGE_RECIVED_BY_ID:
                return {
                    ...state,
                    messageReceived: action.payload
                }
            case UPDATE_ACTIVE_MESSAGE_RECEIVED: 
                return {
                    ...state,
                };
            case UPDATE_STATE_MESSAGE_RECEIVED: 
                return {
                    ...state,
                };
            case DESACTIVATE_ALL_MESSAGES_RECEIVED:
                let desactiveMessages = state.allMessagesReceived.map(message => message.active = false)
                return {
                    ...state,
                    messagesReceived: desactiveMessages,
                    allMessagesReceived: desactiveMessages,
                }
    //MENSAJES ENVIADOS
    case CREATE_MESSAGE_SEND: 

    console.log('entro en el reducer, en case del input');

    return {
        ...state,
    };
    //REDUCER DE CONTACTOS
            case GET_CONTACT_BY_ID:
                return {
                    ...state,
                    contact: action.payload
                };
            case GET_CONTACT_BY_MESSAGE_RECEIVED:
                return {
                    ...state,
                    messageReceived: action.payload.message,
                    contact: action.payload.contact
                };
    //FILTROS:
    case FILTER_BY_SOCIAL_MEDIA:
     const allMsgsReceived = state.allMessagesReceived;
     console.log('todos los mensajes', allMsgsReceived);
     if ( action.payload === 'TODOS') {
        return {
             ...state,
             messagesReceived: allMsgsReceived,
             socialMediaFilter: action.payload
         }
    } else {
        const messagesFilteredBySocialMedia = allMsgsReceived.filter(message => message.SocialMedium.name === action.payload)
            return {
                ...state,
                messagesReceived: messagesFilteredBySocialMedia,
                socialMediaFilter: action.payload
            };
    };
    case FILTER_BY_STATE:
        const allMessagesReceived = state.allMessagesReceived;
        console.log('todos los mensajes', allMessagesReceived);
        if ( action.payload === 'TODOS' && state.socialMediaFilter === 'TODOS') {
           return {
                ...state,
                messagesReceived: allMessagesReceived,
                stateFilter: action.payload
            }
       } else if (action.payload === 'TODOS' && state.socialMediaFilter !== 'TODOS'){
        const msgsFiltered = allMessagesReceived.filter(message => message.SocialMedium.name === state.socialMediaFilter)
        return {
            ...state,
            messagesReceived: msgsFiltered,
            stateFilter: action.payload
        }
       } else if (action.payload !== 'TODOS' && state.socialMediaFilter !== 'TODOS'){
        const msgsFilteredSM = allMessagesReceived.filter(message => message.SocialMedium.name === state.socialMediaFilter)
        const msgsFilteredByState = msgsFilteredSM.filter(message => 
            message.state === action.payload)
        return {
            ...state,
            messagesReceived: msgsFilteredByState,
            stateFilter: action.payload
        }
       } else{
           const messagesFilteredByState = allMessagesReceived.filter(message => 
            message.state === action.payload)
           console.log('mensajes filtrados', messagesFilteredByState);
    
               return {
                   ...state,
                   messagesReceived: messagesFilteredByState,
                   stateFilter: action.payload
               };
       };


       case CLEAN_FILTERS: 
       return {
        ...state,
        stateFilter: 'TODOS',
        socialMediaFilter: 'TODOS'
       }
        
            default:
                return {
                    ...state
                };
}

};

export default rootReducer;