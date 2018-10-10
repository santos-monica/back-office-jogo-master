import { VIEW_QUESTION, ADD_QUESTION_LOCALLY, QUESTION_REQUEST_FAILED, QUESTION_REQUEST_SUCCEEDED, POPULATE_QUESTIONS } from '../actions/questions_actions';

const INITIAL_STATE = { 
    requestSucceeded: false,
    requestFailed: false 
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case VIEW_QUESTION: {
            return { ...state }
        }
        case ADD_QUESTION_LOCALLY: {
            let questionsList = state.questions;
            let question = action.payload;
            questionsList.push(question);

            return { ...state, questions: questionsList }
        }

        case QUESTION_REQUEST_FAILED: {
            return { ...state, requestFailed: true, requestSucceeded: false };
        }

        case QUESTION_REQUEST_SUCCEEDED: {
            return { ...state, requestFailed: false, requestSucceeded: true };
        }

        case POPULATE_QUESTIONS: {
            let questions = action.payload;
            return { ...state, questions: questions }
        }

        default:
            return { ...state }
        
    }
}