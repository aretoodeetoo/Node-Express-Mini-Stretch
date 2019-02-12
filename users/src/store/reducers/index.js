import {
    FETCH_USERS_SUCCESS,
    ADD_USER_SUCCESS,
    DELETE_USER_SUCCESS
} from '../actions';

const initialState = {
    users: [],
    isAddingUser: false
}

const users = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS_SUCCESS:
        return{
            ...state,
            users: action.payload
        }
        case ADD_USER_SUCCESS:
        return{
            ...state,
            users: action.payload,
            isAddingUser: false,
            error: ''
        }
        case DELETE_USER_SUCCESS:
        return{
            ...state,
            users: action.payload,
            error: ''
        }
        default:
        return state;
    }
}

export default users;