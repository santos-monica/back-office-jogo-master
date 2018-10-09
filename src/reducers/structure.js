import { ADD_THEME, ADD_THEME_LOCALLY, POPULATE_THEMES, THEME_REQUEST_FAILED } from '../actions/theme_actions';
import { ADD_LEVEL } from '../actions/level_actions';

const INITIAL_STATE = { 
    temas: [
        {
            id: 1,
            tema: "Filmes",
            cor: "#3e3e3e",
            icone: 'movies'
        },
        {
            id: 2,
            tema: "Livros",
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
    ],
    themeRequestSucceeded: false,
    themeRequestFailed: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_THEME: {
            let temas = state.temas;
            temas.push(action.payload);
            return { ...state, temas: temas }
        }

        case ADD_THEME_LOCALLY: {
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

        case THEME_REQUEST_FAILED: {
            return { ...state, themeRequestFailed: true, themeRequestSucceeded: false }
        }

        default:
            return { ...state }
        
    }
}