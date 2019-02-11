import axios from 'axios';

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USER_FAIL';

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';

export const getUserList = () => dispatch => {
    dispatch ({ type: FETCH_USERS_START });
    axios
        .get('http://localhost:4000/api/users')
        .then(res => dispatch({
            type: FETCH_USERS_SUCCESS, payload: res.data
        })
        )
        .catch(err => dispatch({ type: FETCH_USERS_FAIL, payload: err }));
}

export const addUser = newUser => dispatch => {
    dispatch({ type: ADD_USER_START });
    axios
        .post('http://localhost:4000/api/users', newUser)
        .then(res => {
            dispatch({ type: ADD_USER_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: ADD_USER_FAIL, payload: err }));
}

export const deleteUser = userId => dispatch => {
    dispatch({ type: DELETE_USER_START });
    axios
        .delete(`http://localhost:4000/api/users/${userId}`)
        .then(res => dispatch({
            type: DELETE_USER_SUCCESS, payload: res.data
        }))
        .catch(err => dispatch({ type: DELETE_USER_FAIL, payload: err }));
}