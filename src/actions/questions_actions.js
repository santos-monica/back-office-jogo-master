import axios from 'axios';

export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_LOCALLY = 'ADD_QUESTION_LOCALLY';
export const VIEW_QUESTION = 'VIEW_QUESTION';
export const VIEW_QUESTIONS = 'VIEW_QUESTIONS';
export const POPULATE_QUESTIONS = 'POPULATE_QUESTIONS';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const QUESTION_REQUEST_FAILED = 'QUESTION_REQUEST_FAILED';
export const QUESTION_REQUEST_SUCCEEDED = 'QUESTION_REQUEST_SUCCEEDED';

export function viewQuestions(){
    return(dispatch) => {
        axios.get(`http://localhost:64803/api/pergunta`)

            .then((response) => {
                console.log(response.data);
                dispatch(populateQuestions(response.data));
            })
    }
}

export function populateQuestions(questions){
    return {
        type: POPULATE_QUESTIONS,
        payload: questions
    }
}

export function viewQuestion(question, index) {
    return {
        type: VIEW_QUESTION,
        payload: question,
        index: index
    }
}

export function addQuestion(question) {
    return (dispatch) => {

        axios.post(`http://localhost:64803/api/Pergunta`, JSON.stringify(question), {
                headers: {
                    'Accept': 'application/json, text / javascript',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => {
                dispatch(viewQuestions());
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
    return (dispatch) => {

        axios.put(`http://localhost:64803/api/Pergunta/${index}`, JSON.stringify(question), {
                headers: {
                    'Accept': 'application/json, text / javascript',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => {
                console.log(response.data);
                dispatch(viewQuestions());
            })
            // .catch(dispatch(themeRequestFailed()));
    };
}

export function removeQuestion(index) {
    return (dispatch) => {

        axios.delete(`http://localhost:64803/api/Pergunta/${index}`, {
                headers: {
                    'Accept': 'application/json, text / javascript',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => {
                dispatch(viewQuestions());
            })
            // .catch(dispatch(themeRequestFailed()));
    };
}

