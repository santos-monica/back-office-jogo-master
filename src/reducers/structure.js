import { VIEW_QUESTION } from '../actions/questions_actions';

const INITIAL_STATE = { 
    categorias: [
        "Filmes",
        "Séries",
        "Livros"
    ],
    nivel: [
        "Fácil",
        "Intermediário",
        "Difícil",
        "Mestre"
    ]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case VIEW_QUESTION: {
            return { ...state }
        }
        default:
            return { ...state }
        
    }
}