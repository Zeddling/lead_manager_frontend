import { actionTypes } from "../constants/actionTypes";

const initialState = {}

export const message = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.CREATE_MESSAGE:
            return (state = payload)
    
        default:
            return state;
    }
}
