import { VIEW_QUESTION, ADD_QUESTION } from '../actions/questions_actions';

const INITIAL_STATE = { 
    all: [
        {
            id: 1,
            tema: 'Teste',
            nivel: 'Fácil',
            pergunta: 'Qual o nome da irmã mais velha da Leilah?',
            respostas: [
                'Laura',
                'Luane',
                'Louise'
            ],
            correta: 'Laura'
        },
        {
            id: 2,
            tema: 'Outro Teste',
            nivel: 'Dificil',
            pergunta: 'O que se comemora em 23 de outubro?',
            respostas: [
                'Dia do Aviador',
                'Dia da Ávore',
                'Dia do Amigo'
            ],
            correta: 'Dia do Aviador'
        }
    ] 
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case VIEW_QUESTION: {
            return { ...state }
        }
        case ADD_QUESTION: {
            let questions = state.all;
            let question = {
                id: 1,
                tema: action.payload.tema,
                nivel: action.payload.nivel,
                pergunta: action.payload.pergunta,
                respostas: []
            }
            question.respostas = [ 
                action.payload.alt1, 
                action.payload.alt2, 
                action.payload.alt3, 
                action.payload.alt4
            ];

            questions.push(question);

            return { ...state, questions }
        }

        default:
            return { ...state }
        
    }
}