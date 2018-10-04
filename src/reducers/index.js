import { combineReducers } from 'redux';
import Questions from './questions';
import MenuOptions from './menuOptions';
import Login from './login';
import ModalAddUser from './modal_adduser';
import RequestHandler from './requester_handle';
import GenericModalsHandler from './generic_modals_handler';
import Structure from './structure';


const rootReducer = combineReducers({
	menuOptions: MenuOptions,
	questions: Questions,
	login: Login,
	adduser: ModalAddUser,
	requesthandler: RequestHandler,
	genericmodals: GenericModalsHandler,
	structure: Structure,
});

export default rootReducer;
