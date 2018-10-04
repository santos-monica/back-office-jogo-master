import { LOGIN_REQUEST_SENT } from '../actions/requester_handle_actions';

const INITIAL_STATE = {
    loginRequestSent: false,
}

export default function (state = INITIAL_STATE, action) {

    switch(action.type){

        case LOGIN_REQUEST_SENT:
            state.loginRequestSent = !state.loginRequestSent
            return {...state}

        default:
            return {...state}


    }


}