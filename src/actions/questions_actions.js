import axios from 'axios';

export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_LOCALLY = 'ADD_QUESTION_LOCALLY';
export const VIEW_QUESTION = 'VIEW_QUESTION';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const QUESTION_REQUEST_FAILED = 'QUESTION_REQUEST_FAILED';
export const QUESTION_REQUEST_SUCCEEDED = 'QUESTION_REQUEST_SUCCEEDED';

export function viewQuestion(question, index) {
    return {
        type: VIEW_QUESTION,
        payload: question,
        index: index
    }
}

export function addQuestion(question) {
    return(dispatch) =>  {
        axios.post(`http://localhost:3000/api/pergunta`, { question })
            .then((response) => {
                console.log(response.data);
                dispatch(addQuestionLocally(response.data));
            })
            .catch(dispatch(questionRequestFailed()));
    };
}

export function addQuestionLocally(question) {
    return {
        type: ADD_QUESTION,
        payload: question
    };
}

export function questionRequestFailed(){
    return {
        type: QUESTION_REQUEST_FAILED
    }
}

export function questionRequestSucceeded(){
    return {
        type: QUESTION_REQUEST_SUCCEEDED
    }
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

