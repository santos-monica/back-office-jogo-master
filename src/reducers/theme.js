import { VIEW_THEME, ADD_THEME } from '../actions/theme_actions';

const INITIAL_STATE = { 
    icons: [
        'antique-building.svg',
        'apple-logotype.svg',
        'car-compact.svg',
        'castle.svg',
        'coding.svg',
        'database.svg',
        'deathly-hallows.svg',
        'earth.svg',
        'flask-outline.svg',
        'html-5-logo.svg',
        'idea.svg',
        'knight.svg',
        'maths-class-materials-cross-of-a-pencil-and-a-ruler.svg',
        'mouse.svg',
        'music-note-black-symbol.svg',
        'open-book.svg',
        'paint-board-and-brush.svg',
        'photo-camera.svg',
        'restaurant.svg',
        'soccer-ball-variant.svg',
        'theather-masks-coupe.svg'
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
                identifier: 1,
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