import { actionTypes } from "../constants/actionTypes"


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export const auth = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.AUTH_ERROR:
        case actionTypes.LOGIN_FAIL:
        case actionTypes.LOGOUT_SUCCESS:
        case actionTypes.REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }

        case actionTypes.AUTOMATIC_LOGIN:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
            }

        case actionTypes.LOGIN_SUCCESS:
        case actionTypes.REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                isLoading: false
            }

        case actionTypes.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: payload
            }

        case actionTypes.USER_LOADING:
            return {
                ...state,
                isLoading: true
            }

        default:
            return state
    }
}
