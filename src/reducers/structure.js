import { ADD_THEME } from '../actions/theme_actions';

const INITIAL_STATE = { 
    temas: [
        {
            identifier: 1,
            nome: "Filmes",
            cor: "#3e3e3e",
            icone: 'movies'
        },
        {
            identifier: 2,
            nome: "Livros",
            cor: "#f0f0f0",
            icone: 'books'
        }
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
        case ADD_THEME: {
            let temas = state.temas;
            temas.push(action.payload);
            return { ...state, temas: temas }
        }
        default:
            return { ...state }
        
    }
}