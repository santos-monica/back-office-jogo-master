export const ADD_LEVEL = 'ADD_LEVEL';
export const VIEW_LEVEL = 'VIEW_LEVEL';
export const UPDATE_LEVEL = 'UPDATE_LEVEL';
export const REMOVE_LEVEL = 'REMOVE_LEVEL';

export function viewLevel(level, index) {
    return {
        type: VIEW_LEVEL,
        payload: level,
        index: index
    }
}

export function addLevel(level) {
    return {
        type: ADD_LEVEL,
        payload: level
    };
}

export function updateLevel(level, index) {
    return {
        type: UPDATE_LEVEL,
        payload: level,
        index: index
    }
}

export function removeLevel(index) {
    return {
        type: REMOVE_LEVEL,
        payload: index
    }
}