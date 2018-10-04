import { MODAL_ADDQUESTION_TOOGLE } from '../actions/generic_modals_handler_actions';

const INITIAL_STATE = {
    ismodaladdquestionopen: false
}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case MODAL_ADDQUESTION_TOOGLE:
            state.ismodaladdquestionopen = !state.ismodaladdquestionopen;
            return { ...state }

        default:
            return state
    }
}

