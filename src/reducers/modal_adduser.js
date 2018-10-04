import { MODAL_ADD_USER_OPEN, MODAL_ADD_USER_CLOSE, REQUEST_SUCCEEDED, REQUEST_FAILED } from '../actions/modal_addUser_actions';

const INITIAL_STATE = {

    requestSucceeded: false,
    requestFailed: false,
    isModalOpen: false

}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case MODAL_ADD_USER_OPEN:
            return { ...state, isModalOpen: !state.isModalOpen };

        case MODAL_ADD_USER_CLOSE:
            return { INITIAL_STATE };

        case REQUEST_SUCCEEDED:
            return { ...state, requestSucceeded: !state.requestSucceeded };

        case REQUEST_FAILED:
            return { ...state, requestFailed: !state.requestFailed };
                
        default:
            return state;

    }
}