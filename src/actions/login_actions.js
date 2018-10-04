import { loginRequestSent } from '../actions/requester_handle_actions';
// import initAppData from '../helpers/init';

export const SUBMIT_CREDENTIALS = 'SUBMIT_CREDENTIALS';
export const CHECK_LOGIN_STATUS = 'CHECK_LOGIN_STATUS';
export const LOG_OUT = 'LOG_OUT';
export const LOGIN_REQUEST_SENT = 'LOGIN_REQUEST_SENT';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';

export function submitCredentials(username, password) {
    return dispatch => {
    //     dispatch(loginRequestSent())
    //     LoginManager.login(username, password, 'admin').then(() => { dispatch(checkLoginStatus('admin')); initAppData(dispatch); }).finally(() => dispatch(loginRequestSent())).catch(e => {
            // initAppData(dispatch);
            dispatch(checkLoginStatus('admin'));
            dispatch(loginRequestSent());
    //         dispatch(loginFailed(e));
    //     })
    }
}

export function checkLoginStatus(admin) {

    return {
        type: CHECK_LOGIN_STATUS,
        isLogged: true
    }

}

export function checkIfLogged(admin) {

    return dispatch => {
        dispatch(checkLoginStatus(admin))
    }

    // if (LoginManager.isAuthenticated(admin)) {
    //     return dispatch => {
    //         dispatch(checkLoginStatus(admin))
    //     }
    // } else
    //     return {
    //         type: CHECK_LOGIN_STATUS,
    //         isLogged: false
    //     }
}

export function logOut() {

    return dispatch => {
        // LoginManager.logout()
        dispatch(checkIfLogged(''));
    }

}

export function loginFailed(errormessage) {

    return {

        type: LOGIN_FAILED,
        error: errormessage
    }
}

export function clearError() {

    return {

        type: CLEAR_ERROR_MESSAGE
    }
}

