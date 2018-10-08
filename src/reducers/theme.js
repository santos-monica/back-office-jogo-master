import { VIEW_THEME, ADD_THEME } from '../actions/theme_actions';

const INITIAL_STATE = { 
    icons: [
        
    ]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case VIEW_THEME: {
            return { ...state }
        }

        case ADD_THEME: {
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