import { actionTypes } from "../constants/actionTypes"

//  Handles success messages
export const createMessage = message => {
    return {
        type: actionTypes.CREATE_MESSAGE,
        payload: message
    }
}

export const returnErrors = (message, status) => {
    return {
        type: actionTypes.GET_ERRORS,
        payload: { message, status }
    }
}
