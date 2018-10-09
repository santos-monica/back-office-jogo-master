import { VIEW_QUESTION, ADD_QUESTION_LOCALLY, QUESTION_REQUEST_FAILED, QUESTION_REQUEST_SUCCEEDED } from '../actions/questions_actions';

const INITIAL_STATE = { 
    requestSucceeded: false,
    requestFailed: false,
    questions: [
        {
            id: 1,
            tema: 1,
            nivel: 1,
            patrocinada: false,
            pergunta: 'Qual o nome da irmã mais velha da Leilah?',
            respostas: [
                {
                    resposta: 'Laura',
                    correta: true
                },
                {
                    resposta: 'Louise',
                    correta: false
                },
                {
                    resposta: 'Luane',
                    correta: false
                },
                {
                    resposta: 'Joana',
                    correta: false
                }
            ],
        },
        {
            id: 2,
            tema: 2,
            nivel: 3,
            patrocinada: true,
            pergunta: 'Outra pergunta?',
            respostas: [
                {
                    resposta: 'um',
                    correta: false
                },
                {
                    resposta: 'dois',
                    correta: false
                },
                {
                    resposta: 'tres',
                    correta: true
                },
                {
                    resposta: 'quatro',
                    correta: false
                }
            ],
        }
    ] 
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

        default:
            return { ...state }
        
    }
}