import axios from 'axios';

export const ADD_LEVEL = 'ADD_LEVEL';
export const VIEW_LEVEL = 'VIEW_LEVEL';
export const POPULATE_LEVELS = 'POPULATE_LEVELS';
export const VIEW_LEVELS = 'VIEW_LEVELS';
export const UPDATE_LEVEL = 'UPDATE_LEVEL';
export const REMOVE_LEVEL = 'REMOVE_LEVEL';

export function viewLevels() {
    return (dispatch) => {
        axios.get(`http://localhost:64803/api/Nivel`)
            .then((response) => {
                console.log(response.data);
                dispatch(populateLevels(response.data));
            })
    }
}

export function populateLevels(levels) {
    return {
        type: POPULATE_LEVELS,
        payload: levels
    }
}

export function viewLevel(level, index) {
    return {
        type: VIEW_LEVEL,
        payload: level,
        index: index
    }
}

export function addLevel(level) {
    return (dispatch) => {

        axios.post(`http://localhost:64803/api/Nivel`, JSON.stringify(level), {
                headers: {
                    'Accept': 'application/json, text / javascript',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => {
                console.log(response.data);
                dispatch(viewLevels());
            })
            // .catch(dispatch(themeRequestFailed()));
    };
}

export function updateLevel(level, index) {
    return (dispatch) => {

        axios.put(`http://localhost:64803/api/Nivel/${index}`, JSON.stringify(level), {
                headers: {
                    'Accept': 'application/json, text / javascript',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => {
                console.log(response.data);
                dispatch(viewLevels());
            })
            // .catch(dispatch(themeRequestFailed()));
    };
}

export function removeLevel(index) {
    return (dispatch) => {

        axios.delete(`http://localhost:64803/api/Nivel/${index}`, {
                headers: {
                    'Accept': 'application/json, text / javascript',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => {
                dispatch(viewLevels());
            })
            // .catch(dispatch(themeRequestFailed()));
    };
}