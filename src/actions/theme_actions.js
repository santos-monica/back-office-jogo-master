import axios from 'axios';

export const ADD_THEME = 'ADD_THEME';
export const ADD_THEME_LOCALLY = 'ADD_THEME_LOCALLY';
export const VIEW_THEMES = 'VIEW_THEMES';
export const POPULATE_THEMES = 'POPULATE_THEMES';
export const VIEW_THEME = 'VIEW_THEME';
export const UPDATE_THEME = 'UPDATE_THEME';
export const REMOVE_THEME = 'REMOVE_THEME';
export const THEME_REQUEST_FAILED = 'THEME_REQUEST_FAILED';

export function viewThemes(){
    return(dispatch) => {
        axios.get(`http://localhost:3000/api/tema`)
            .then((response) => {
                console.log(response.data);
                dispatch(populateThemes(response.data));
            })
    }
}

export function populateThemes(themes){
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
    return(dispatch) =>  {
        axios.post(`http://localhost:3000/api/tema`, { theme })
            .then((response) => {
                console.log(response.data);
                dispatch(addThemeLocally(response.data));
            })
            .catch(dispatch(themeRequestFailed()));
    };
}

export function addThemeLocally(theme){
    return {
        type: ADD_THEME_LOCALLY,
        payload: theme
    }
}

export function updateTheme(theme, index) {
    return {
        type: UPDATE_THEME,
        payload: theme,
        index: index
    }
}

export function removeTheme(index) {
    return {
        type: REMOVE_THEME,
        payload: index
    }
}

export function themeRequestFailed(){
    return {
        type: THEME_REQUEST_FAILED  
    }
}