import axios from 'axios';
import { viewQuestion } from './questions_actions';

export const ADD_THEME = 'ADD_THEME';
export const ADD_THEME_LOCALLY = 'ADD_THEME_LOCALLY';
export const VIEW_THEMES = 'VIEW_THEMES';
export const POPULATE_THEMES = 'POPULATE_THEMES';
export const VIEW_THEME = 'VIEW_THEME';
export const UPDATE_THEME = 'UPDATE_THEME';
export const REMOVE_THEME = 'REMOVE_THEME';
export const THEME_REQUEST_FAILED = 'THEME_REQUEST_FAILED';
export const REMOVE_THEME_LOCALLY = 'REMOVE_THEME_LOCALLY';

export function viewThemes() {
    return (dispatch) => {
        axios.get(`http://localhost:64803/api/Tema`)
            .then((response) => {
                console.log(response.data);
                dispatch(populateThemes(response.data));
            })
    }
}

export function populateThemes(themes) {
    return {
        type: POPULATE_THEMES,
        payload: themes
    }
}

export function viewTheme(theme, index) {
    return {
        type: VIEW_THEME,
        payload: theme,
        index: index
    }
}

export function addTheme(theme) {
    return (dispatch) => {

        axios.post(`http://localhost:64803/api/Tema`, JSON.stringify(theme), {
                headers: {
                    'Accept': 'application/json, text / javascript',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => {
                console.log(response.data);
                dispatch(viewThemes());
            })
            .catch(dispatch(themeRequestFailed()));
    };
}

export function addThemeLocally(theme) {
    return {
        type: ADD_THEME_LOCALLY,
        payload: theme
    }
}

export function updateTheme(theme, index) {
    return (dispatch) => {

        axios.put(`http://localhost:64803/api/Tema/${index}`, JSON.stringify(theme), {
                headers: {
                    'Accept': 'application/json, text / javascript',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => {
                console.log(response.data);
                dispatch(viewThemes());
            })
            .catch(dispatch(themeRequestFailed()));
    };
}

export function removeTheme(index) {
    return (dispatch) => {

        axios.delete(`http://localhost:64803/api/Tema/${index}`, {
                headers: {
                    'Accept': 'application/json, text / javascript',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => {
                dispatch(viewThemes());
            })
            .catch(dispatch(themeRequestFailed()));
    };
}

export function themeRequestFailed() {
    return {
        type: THEME_REQUEST_FAILED
    }
}