export const MENU_OPTION_SELECTED = 'MENU_OPTION_SELECTED';

export function selectMenuOption(menuOption) {
    return {
        type: MENU_OPTION_SELECTED,
        payload: menuOption
    }
}