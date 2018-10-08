export const ADD_THEME = 'ADD_THEME';
export const VIEW_THEME = 'VIEW_THEME';
export const EDIT_THEME = 'EDIT_THEME';
export const UPDATE_THEME = 'UPDATE_THEME';
export const REMOVE_THEME = 'REMOVE_THEME';

export function viewTheme(theme, index) {
    return {
        type: VIEW_THEME,
        payload: theme,
        index: index
    }
}

export function addTheme(theme) {
    return {
        type: ADD_THEME,
        payload: theme
    };
}

export function editTheme(theme){
    return {
        type: EDIT_THEME,
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