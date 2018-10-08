import { ADD_THEME, POPULATE_THEMES } from '../actions/theme_actions';
import { ADD_LEVEL } from '../actions/level_actions';

const INITIAL_STATE = { 
    temas: [
        {
            id: 1,
            nome: "Filmes",
            cor: "#3e3e3e",
            icone: 'movies'
        },
        {
            id: 2,
            nome: "Livros",
            cor: "#f0f0f0",
            icone: 'books'
        }
    ],
    nivel: [
        {
            id: 1,
            nivel: "Fácil",
            pontos: 5
        },
        {
            id: 2,
            nivel: "Intermediário",
            pontos: 10
        },
        {
            id: 3,
            nivel: "Difícil",
            pontos: 20
        },
        {
            id: 4,
            nivel: "Mestre",
            pontos: 40
        }
    ]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_THEME: {
            let temas = state.temas;
            temas.push(action.payload);
            return { ...state, temas: temas }
        }

        case ADD_LEVEL: {
            let niveis = state.nivel;
            niveis.push(action.payload);
            return { ...state, nivel: niveis }
        }

        case POPULATE_THEMES: {
            let themes = action.payload;
            return { ...state, temas: themes }
        }

        default:
            return { ...state }
        
    }
}