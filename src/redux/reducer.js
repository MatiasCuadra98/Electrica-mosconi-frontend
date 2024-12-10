import {
    GET_BUSINESS_BY_ID,
    UPDATE_BUSINESS,
    GET_ALL_USERS,
    GET_USER_BY_ID,
    UPDATE_USER, 
    FILTER_BY_SOCIAL_MEDIA,
    FILTER_BY_STATE,
    SEARCH_BY_CONTACT,
    CLEAN_USER_BY_ID,
    GET_ALL_MESSAGES_RECIVED,
    GET_MESSAGE_RECIVED_BY_ID,
    UPDATE_STATE_TO_READ_MESSAGE_RECEIVED,
    UPDATE_STATE_TO_ANSWERED_MESSAGE_RECEIVED,
    DESACTIVATE_ALL_MESSAGES_RECEIVED,
    GET_CONTACT_BY_ID,
    GET_CONTACT_BY_MESSAGE_RECEIVED,
    CREATE_MESSAGE_SEND,
    GET_ALL_MESSAGES_SENT,
    CLEAN_FILTERS,
    ADD_NEW_MESSAGE_RECEIVED,
    ADD_NEW_MESSAGE_SENT, //socket
    CONNECT_SOCKET,//socket
    DISCONNECT_SOCKET,//socket
    SET_ACTIVE_MESSAGE,
    SET_UPLOAD_FILE,
    ADMI_LOGIN,
    GET_ALL_SOCIAL_MEDIA_BY_BUSINESS,
    UPDATE_SOCIAL_MEDIA,
    FILTER_BY_USER, 
    GET_USER_BY_ADMI,
    LOGIN_BUSINESS, 
    LOGOUT_BUSINESS,
    AUTH_BUSINESS_BY_ALL_SOCIAL_MEDIA
} from './types';

const initialState = {
    //**--BUSNISSES-- */
    //negocio por id
    business: {},
    businessLogin: false,
    //todos los usuarios deun negocio(+ copia para filtros)
    users: [],
    allUsers: [],
    //usuario por id
    user: {},
    userByAdmi: {},
    //admi login-logout
    admiLogin: false, 
      //**--MENSAJES--**//
    //todos los mensajes recibidos (+ copia para filtros)
    messagesReceived: [],
    allMessagesReceived: [],
    //mensaje por id
    messageReceived: {},
    messageActive: '',
    //mensajes enviados
    messagesSent: [],
          //**--CONTACTOS--**//
    //contacto por id // mensaje
    contact: {},
    //searchContacts
    //contacts: [],
    //**--REDES SOCIALES--* *//
    socialMedia: [],

    //**--ESTADOS PARA CONTADOR DE MENSAJES-- */
    // deben modificarse segun seleccion de filtros y search => asignarle el action.payload
    socialMediaFilter: 'TODOS',
    stateFilter: 'TODOS',
    userFilter: 'TODOS',
    inputContact: '',

        //**--SOCKET--**//
    socket: null,
    //para carga de imagen y archivos
    uploadedFile: ''

}

const rootReducer = (state = initialState, action) => {
switch (action.type) {
    //***--REDUCER DE NEGOCIOS-- */
    case GET_BUSINESS_BY_ID:
        return {
            ...state,
            business: action.payload
        };
    case UPDATE_BUSINESS:
        return {
            ...state,
        };
    case LOGIN_BUSINESS:
        //console.log('entro en el reducer del login con payload', action.payload);
        
        return {
            ...state,
            business: action.payload,
            businessLogin: true
        };
    case LOGOUT_BUSINESS:
        return {
            ...state,
            busines: {},
            businessLogin: false
        };
    case AUTH_BUSINESS_BY_ALL_SOCIAL_MEDIA:
        return {
            ...state
        };
    //***--REDUCER DE USUARIOS-- */
    case GET_ALL_USERS:
        console.log('entro al reducer de getAllUser con payload:', action.payload);
        let allBusinessUsers = action.payload
        //console.log('payload', allBusinessUsers);
        console.log('business Id', state.business.id);
        let businessId = state.business.id || sessionStorage.getItem('businessId'); 
        
        const usersFiltered = allBusinessUsers.filter(user => user.BusinessId === businessId)
        console.log('usuarios filtrados por business en getAllUsers', usersFiltered);
        return {
            ...state,
            users: usersFiltered,
            allUsers: usersFiltered
        };
    case GET_USER_BY_ID:
        //console.log('3A - entro al reducer de GET_USER_BY_ID', action.payload);
        return {
            ...state,
            user: action.payload,
        };
    case UPDATE_USER:
        return {
            ...state,
        };
    case CLEAN_USER_BY_ID:
        return {
            ...state,
            user: {}
        }
        case GET_USER_BY_ADMI:
        //console.log('3A - entro al reducer de GET_USER_BY_ID', action.payload);
        return {
            ...state,
            userByAdmi: action.payload,
        };
//**login logout Administrador **/
    case ADMI_LOGIN:      
    return {
        ...state,
        admiLogin : action.payload   
    };
//**REDUCER MENSAJES RECIBIDOS */
    case GET_ALL_MESSAGES_RECIVED:
        
        const messages = action.payload
        let business_Id = state.business.id || sessionStorage.getItem('businessId')
        const allMessagesFiltered = messages.filter(message => message.BusinessId === business_Id) 
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
    case SET_ACTIVE_MESSAGE:
        return {
            ...state,
            messageActive: action.payload
        };
//update estados
    case UPDATE_STATE_TO_READ_MESSAGE_RECEIVED: 
        console.log('update to read: entro al reducer con payload', action.payload);
        return {
            ...state,
            messagesReceived: state.messagesReceived.map(message =>
                (action.payload !== null && message && message.id === action.payload.id)
                    ? { ...message, state: action.payload.state }
                    : message
            ),
            allMessagesReceived: state.allMessagesReceived.map(message =>
                (action.payload !== null && message && message.id === action.payload.id)
                    ? { ...message, state: action.payload.state }
                    : message
            ),
    };
    case UPDATE_STATE_TO_ANSWERED_MESSAGE_RECEIVED:  
        return {
            ...state,
             messagesReceived: state.messagesReceived.map(message =>
               (action.payload !== null && message && message.id === action.payload.id)
                    ? { ...message, state: action.payload.state }
                    : message
            ),
            allMessagesReceived: state.allMessagesReceived.map(message =>
                (action.payload !== null && message && message.id === action.payload.id)
                    ? { ...message, state: action.payload.state }
                    : message
            ),

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
    //console.log('entro en el reducer, envio el objeto al back');
    return {
        ...state,
    };
    case GET_ALL_MESSAGES_SENT:
        const messagesSent = action.payload
        const allMessagesSentFiltered = messagesSent.filter(message => message.BusinessId === state.business.id) 
        return {
            ...state,
            messagesSent: allMessagesSentFiltered,
        };
    case SET_UPLOAD_FILE:
        console.log('entro al reducer setUploadFile con payload:', action.payload);
        
        return {
            ...state,
            uploadedFile: action.payload
        };
    
    
//CONTACTOS
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
        const payload = action.payload === 'Facebook' ? 'Messenger' : action.payload 
        //console.log('payload: ', payload);
        
        if ( payload === 'TODOS') {
            return {
                ...state,
                messagesReceived: allMsgsReceived,
                socialMediaFilter: payload
            }
        } else {
            const messagesFilteredBySocialMedia = allMsgsReceived.filter(message => message.SocialMedium && message.SocialMedium.name === payload)
            return {
                ...state,
                messagesReceived: messagesFilteredBySocialMedia,
                socialMediaFilter: payload
            };
        };
    case FILTER_BY_STATE:
        const allMessagesReceived = state.allMessagesReceived;
        if ( action.payload === 'TODOS' && state.socialMediaFilter === 'TODOS') {
           return {
                ...state,
                messagesReceived: allMessagesReceived,
                stateFilter: action.payload
            }
        } else if (action.payload === 'TODOS' && state.socialMediaFilter !== 'TODOS'){
            const msgsFiltered = allMessagesReceived.filter(message => message.SocialMedium && message.SocialMedium.name === state.socialMediaFilter)
            return {
                ...state,
                messagesReceived: msgsFiltered,
                stateFilter: action.payload
            }
        } else if (action.payload !== 'TODOS' && state.socialMediaFilter !== 'TODOS'){
            const msgsFilteredSM = allMessagesReceived.filter(message => message.SocialMedium && message.SocialMedium.name === state.socialMediaFilter)
            const msgsFilteredByState = msgsFilteredSM.filter(message => message.state === action.payload)
            return {
                ...state,
                messagesReceived: msgsFilteredByState,
                stateFilter: action.payload
            }
       } else {
            const messagesFilteredByState = allMessagesReceived.filter(message => message.state === action.payload)
                return {
                   ...state,
                   messagesReceived: messagesFilteredByState,
                   stateFilter: action.payload
                };
        };
    case SEARCH_BY_CONTACT:
        const AllMessagesR = state.allMessagesReceived
        //console.log('entro al reducer con payload', action.payload);
        const contactsFiltered = action.payload.filter(contact => contact.businessId === state.business.id) 
        //console.log('contactos en search', contactsFiltered);
        const messagesBySearch = AllMessagesR.filter(message => contactsFiltered.some(contact => contact.id === message.ContactId));
        return {
            ...state,
            messagesReceived: messagesBySearch, 
        };
    case CLEAN_FILTERS: 
        return {
            ...state,
            stateFilter: 'TODOS',
            socialMediaFilter: 'TODOS',
            //contacts: []
        }

        case FILTER_BY_USER:
            const allMsgsRecd = state.allMessagesReceived;
            if ( action.payload === 'TODOS') {
                return {
                    ...state,
                    messagesReceived: allMsgsRecd,
                    userFilter: action.payload
                }
            } else {
                const messagesFilteredByUser = allMsgsRecd.filter(message => message.Contact && message.Contact.MsgSent && message.Contact.MsgSent.User && message.Contact.MsgSents.Users.id === action.payload)
                return {
                    ...state,
                    messagesReceived: messagesFilteredByUser,
                    userFilter: action.payload
                };
            };

// CASOS PARA socket
    case CONNECT_SOCKET:
        return {
            ...state,
            socket: action.payload,
        };
  
    case DISCONNECT_SOCKET:
        return {
            ...state,
            socket: null,
        };

    case ADD_NEW_MESSAGE_RECEIVED:
        return {
            ...state,
            messagesReceived: [...state.messagesReceived, action.payload],
            allMessagesReceived: [...state.allMessagesReceived, action.payload]
        };
    case ADD_NEW_MESSAGE_SENT:        
        return {
            ...state,
            messagesSent: [...state.messagesSent, action.payload]
        };
    //** REDUCER DE REDES SOCIALES */
        case GET_ALL_SOCIAL_MEDIA_BY_BUSINESS:
            let allSocialMedia = action.payload
            //console.log('redes sociales desde el reducer', allSocialMedia);
            
//esta parte del codigo debera descomentarse cuando la actualizacion del token de Meli cambie la red social activa en lugar de crear una nueva
            //const socialMediaFiltered = state.business && allSocialMedia.filter(sm => sm.Businesses.length && sm.Businesses[0].id === state.business.id)
            //const socialMediaActive = socialMediaFiltered.map(sma => 
            const socialMediaActive = allSocialMedia.map(sma => 
                sma.SocialMedia.length > 0 && sma.SocialMedia[0].name === 'Messenger' ? 
                {
                    ...sma,
                    SocialMedia: [{
                        ...sma.SocialMedia[0],
                        name: 'Facebook'
                    }, ...sma.SocialMedia.slice(1)]
                  } 
                : sma
            )
            //const socialMediaNotNull = socialMediaActive.filter(smf => smf.dataUser !== 'null')

            return {
                ...state,
                socialMedia: socialMediaActive
            };

            case UPDATE_SOCIAL_MEDIA:
        return {
            ...state,
        };

    default:
        return {
            ...state
        };
}
}

export default rootReducer