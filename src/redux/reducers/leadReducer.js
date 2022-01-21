import { actionTypes } from "../constants/actionTypes";


const initialState = {
    leads: [],
    lead: {}
}


//  For GET_LEADS action
export const leadReducers = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.ADD_LEAD:
            return {...state, leads: [...state.leads, payload]}

        case actionTypes.GET_LEADS:
            return {...state, leads: payload}
        
        case actionTypes.DELETE_LEAD:
            return {
                ...state, 
                leads: state.leads.filter(lead => lead.id !== payload)
            }

        default:
            return state
    }
}

