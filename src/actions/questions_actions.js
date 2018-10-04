export const ADD_QUESTION = 'ADD_QUESTION';
export const VIEW_QUESTION = 'VIEW_QUESTION';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

export function viewQuestion(question, index) {
    return {
        type: VIEW_QUESTION,
        payload: question,
        index: index
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        payload: question
    };
}

export function updateQuestion(question, index) {
    return {
        type: UPDATE_QUESTION,
        payload: question,
        index: index
    }
}

export function removeQuestion(index) {
    return {
        type: REMOVE_QUESTION,
        payload: index
    }
}