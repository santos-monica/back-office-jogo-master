import { LOG_OUT, CHECK_LOGIN_STATUS, LOGIN_FAILED, CLEAR_ERROR_MESSAGE } from '../actions/login_actions'

const INITIAL_STATE = {
    isLogged: '',
    loginFailedMessage: ''
}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case CHECK_LOGIN_STATUS:

            state.isLogged = action.isLogged
            return { ...state }

        case LOG_OUT:
            state.isLogged = false
            return { ...state }

        case LOGIN_FAILED:
            return { ...state, loginFailedMessage: action.error }

        case CLEAR_ERROR_MESSAGE:
            return { ...state, loginFailedMessage: '' }

        default:
            return state
    }
}

