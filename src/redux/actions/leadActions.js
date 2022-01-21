import { actionTypes } from "../constants/actionTypes"
import axios from 'axios'
import constants from "../constants/constants"
import { createMessage, returnErrors } from "./messages"
import { tokenConfig } from "./auth"

export const addLead = (lead) => async (dispatch, getState) => {
    await axios
        .post(`${constants.BASE_URI}/leads/`, lead, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: actionTypes.ADD_LEAD,
                payload: res.data
            })

            dispatch(createMessage({
                text: "Lead added"
            }))
        })
        .catch(e => dispatch(returnErrors(e.response.data, e.response.status)))
}

export const getLeads = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(`${constants.BASE_URI}/leads/`, tokenConfig(getState))

        dispatch({
            type: actionTypes.GET_LEADS,
            payload: res.data
        })

    } catch (e) {
        dispatch(returnErrors(e.response.data, e.response.status))
    }
}

export const deleteLead = (id) => async (dispatch, getState) => {
    await axios
        .delete(`${constants.BASE_URI}/leads/${id}/`, tokenConfig(getState))
        .then(() => {
            dispatch({
                type: actionTypes.DELETE_LEAD,
                payload: id
            })

            dispatch(createMessage({
                text: "Lead Deleted"
            }))
        })
        .catch(e => {
            dispatch(returnErrors(e.response.data, e.response.status))
        })
}
