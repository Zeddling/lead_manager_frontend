import { actionTypes } from "../constants/actionTypes";

const initialState = {
    message: {},
    status: null
}

export const errors = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.GET_ERRORS:
            return {
                message: payload.message,
                status: payload.status
            }
    
        default:
            return state
    }
}
