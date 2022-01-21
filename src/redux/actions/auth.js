import { actionTypes } from '../constants/actionTypes'
import axios from "axios";
import { returnErrors } from './messages'
import constants from '../constants/constants';

//  Check for token and load user
export const loadUser = () => (dispatch, getState) => {
    //  Set user loading
    dispatch({
        type: actionTypes.USER_LOADING
    })

    axios.get(`${constants.BASE_URI}/auth/user`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: actionTypes.USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status)
            )

            dispatch({
                type: actionTypes.AUTH_ERROR
            })
        })
}

export const login = (username, password) => (dispatch) => {

    // Request Body
    const body = JSON.stringify({
        username, password
    })

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    axios.post(`${constants.BASE_URI}/auth/login/`, body, config)
        .then(res => {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status)
            )

            dispatch({
                type: actionTypes.LOGIN_FAIL
            })
        })
}

export const logout = () => (dispatch, getState) => {

    axios.post(`${constants.BASE_URI}/auth/logout/`, null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: actionTypes.LOGOUT_SUCCESS,
            })
        }).catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status)
            )
        })
}

export const register = ({ username, email, password }) => (dispatch) => {

    // Request Body
    const body = JSON.stringify({
        username, email, password
    })

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    axios.post(`${constants.BASE_URI}/auth/register/`, body, config)
        .then(res => {
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status)
            )

            dispatch({
                type: actionTypes.REGISTER_FAIL
            })
        })
}

// Setup config with token - helper function
export const tokenConfig = (getState) => {
    // Get token from state
    const token = getState().auth.token

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    return config
}
