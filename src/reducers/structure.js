import {
    ADD_THEME,
    ADD_THEME_LOCALLY,
    POPULATE_THEMES,
    THEME_REQUEST_FAILED
} from '../actions/theme_actions';
import { ADD_LEVEL, POPULATE_LEVELS, LEVELS_REQUEST_FAILED } from '../actions/level_actions';

const INITIAL_STATE = { 
    temas: [],
    nivel: [],
    themeRequestSucceeded: false,
    themeRequestFailed: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_THEME: {
            let temas = state.temas;
            temas.push(action.payload);
            return { ...state, temas: temas }
        }

        case ADD_THEME_LOCALLY: {
            let temas = state.temas;
            temas.push(action.payload);
            return { ...state, temas: temas }
        }
        
        case ADD_LEVEL: {
            let niveis = state.nivel;
            niveis.push(action.payload);
            return { ...state, nivel: niveis }
        }

        case POPULATE_THEMES: {
            let themes = action.payload;
            return { ...state, temas: themes }
        }

        case POPULATE_LEVELS: {
            let levels = action.payload;
            return { ...state, nivel: levels }
        }

        case THEME_REQUEST_FAILED: {
            return { ...state, themeRequestFailed: true, themeRequestSucceeded: false }
        }

        default:
            return { ...state }
        
    }
}