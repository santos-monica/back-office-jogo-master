// import { loginRequestSent } from './requester_handle_actions';
// import { uManager } from '../helpers/constants';

// export const MODAL_ADD_USER_OPEN = 'MODAL_ADD_USER_OPEN';
// export const MODAL_ADD_USER_CLOSE = 'MODAL_ADD_USER_CLOSE';
// export const REQUEST_SUCCEEDED = 'REQUEST_SUCCEEDED';
// export const REQUEST_FAILED = 'REQUEST_FAILED';

// export function openModalAddUser() {
//     return {

//         type: MODAL_ADD_USER_OPEN
//     }
// }

// export function closeModalAddUser() {
//     return {

//         type: MODAL_ADD_USER_CLOSE
//     }
// }

// export function submitUserRequest(obj){
//     return dispatch => {
//         obj.scopes = ["ADMIN"];
//         var newUser = new User(obj.name, obj.pass, obj.scopes, obj.login);
//         uManager.addUser(newUser)
//         .then(() => {
//             dispatch(requestSucceeded());
//         })
//         .catch(e => {
//             dispatch(requestFailed());
//         });

//     }
// }

// export function requestSucceeded(){
//     return {
//         type: REQUEST_SUCCEEDED
//     }
// }

// export function requestFailed(){
//     return {
//         type: REQUEST_FAILED
//     }
// }