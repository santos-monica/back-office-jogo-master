import { MENU_OPTION_SELECTED  } from '../actions/menu_actions';
import { CADASTRO, HOME } from '../helpers/constants';

let MenuOptions = [HOME, CADASTRO];

const INITIAL_STATE = {

	all: MenuOptions,
	selectedOption: MenuOptions[0],
	ishome_active: true,
	isstructure_active: false 
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case MENU_OPTION_SELECTED:

			if (action.payload === "questions") {

				return {
					...state, ishome_active: true, isstructure_active: false,
					selectedOption: action.payload

				}
			}

			if (action.payload === "cadastro") {
				return {

					...state, ishome_active: false, isstructure_active: true,
					selectedOption: action.payload


				}

			}

			return { ...state, selectedOption: action.payload };
	}
	return state;
}
