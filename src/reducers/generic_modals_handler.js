import { MODAL_ADDQUESTION_TOOGLE, MODAL_ADDTHEME_TOOGLE, MODAL_ADDLEVEL_TOOGLE, EDIT_THEME, EDIT_LEVEL } from '../actions/generic_modals_handler_actions';

const INITIAL_STATE = {
    ismodaladdquestionopen: false,
    ismodaladdthemeopen: false,
    ismodaladdlevelopen: false,
    themeSelected: {},
    levelSelected: {}
}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case MODAL_ADDQUESTION_TOOGLE:
            state.ismodaladdquestionopen = !state.ismodaladdquestionopen;
            return { ...state, themeSelected: {} }

        case MODAL_ADDTHEME_TOOGLE:
            state.ismodaladdthemeopen = !state.ismodaladdthemeopen;
            return { ...state, themeSelected: {} }

        case MODAL_ADDLEVEL_TOOGLE:
            state.ismodaladdlevelopen = !state.ismodaladdlevelopen;
            return { ...state, levelSelected: {} }

        case EDIT_THEME: {
            let selected = action.payload;
            return { ...state, themeSelected: selected };
        }

        case EDIT_LEVEL: {
            let selected = action.payload;
            return { ...state, levelSelected: selected };
        }

        default:
            return state
    }
}

