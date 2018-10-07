import { MODAL_ADDQUESTION_TOOGLE, MODAL_ADDTHEME_TOOGLE } from '../actions/generic_modals_handler_actions';

const INITIAL_STATE = {
    ismodaladdquestionopen: false,
    ismodaladdthemeopen: false
}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case MODAL_ADDQUESTION_TOOGLE:
            state.ismodaladdquestionopen = !state.ismodaladdquestionopen;
            return { ...state }

        case MODAL_ADDTHEME_TOOGLE:
            state.ismodaladdthemeopen = !state.ismodaladdthemeopen;
            return { ...state }

        default:
            return state
    }
}

