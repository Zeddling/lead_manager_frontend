import { auth } from './auth'
import { combineReducers } from "redux"
import { errors } from './errors'
import { leadReducers } from './leadReducer'
import { message } from './messages'

const reducers = combineReducers({
    auth,
    message,
    errors,
    leads: leadReducers,
})

export default reducers
