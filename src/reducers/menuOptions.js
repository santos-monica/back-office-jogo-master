// import { MENU_OPTION_SELECTED  } from '../actions/menu_actions';
// import { INTEGRATIONS, FLOWS, POPS } from '../helpers/constants';

// let MenuOptions = [FLOWS, INTEGRATIONS, POPS];

// const INITIAL_STATE = {

// 	all: MenuOptions,
// 	selectedOption: MenuOptions[0],
// 	isintegration_active: false,
// 	isflow_active: true,
// 	isdiscovery_active: false 
// };

// export default function (state = INITIAL_STATE, action) {
// 	switch (action.type) {
// 		case MENU_OPTION_SELECTED:

// 			if (action.payload == "flows") {

// 				return {
// 					...state, isflow_active: true, isintegration_active: false, isdiscovery_active: false,
// 					selectedOption: action.payload

// 				}
// 			}

// 			if (action.payload == "integrations") {
// 				return {

// 					...state, isflow_active: false, isintegration_active: true, isdiscovery_active: false,
// 					selectedOption: action.payload


// 				}

// 			}

// 			if (action.payload == "pops") {
// 				return {

// 					...state, isflow_active: false, isintegration_active: false, isdiscovery_active: true,
// 					selectedOption: action.payload

// 				}

// 			}

// 			return { ...state, selectedOption: action.payload };
// 	}
// 	return state;
// }
