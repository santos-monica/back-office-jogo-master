export const MODAL_ADDQUESTION_TOOGLE = 'MODAL_ADDQUESTION_TOOGLE';
export const MODAL_ADDTHEME_TOOGLE = 'MODAL_ADDTHEME_TOOGLE';
export const MODAL_ADDLEVEL_TOOGLE = 'MODAL_ADDLEVEL_TOOGLE';
export const EDIT_THEME = 'EDIT_THEME';
export const EDIT_LEVEL = 'EDIT_LEVEL';
export const EDIT_QUESTION = 'EDIT_QUESTION';

export function modalAddQuestionToogle() {
    return {
        type: MODAL_ADDQUESTION_TOOGLE
    }
}

export function modalAddThemeToogle() {
    return {
        type: MODAL_ADDTHEME_TOOGLE
    }
}

export function modalAddLevelToogle() {
    return {
        type: MODAL_ADDLEVEL_TOOGLE
    }
}

export function editTheme(theme){
    return {
        type: EDIT_THEME,
        payload: theme
    }
}

export function editLevel(level){
    return {
        type: EDIT_LEVEL,
        payload: level
    }
}

export function editQuestion(question){
    return {
        type: EDIT_QUESTION,
        payload: question
    }
}



