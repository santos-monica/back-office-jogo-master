// import { iManager, dManager, fManager } from '../helpers/constants';
// import { flowsLoaded } from '../actions/flows_actions'
// import { integrationsLoaded } from '../actions/integrations_actions'
// import { popsLoaded } from '../actions/pop_actions'

// export default function initAppData(dispatch) {
//     iManager.init().then(() => {
//         dispatch(integrationsLoaded());
//     }).catch(e => {
//         dispatch(integrationsLoaded());
//         throw e;
//     });

//     dManager.init().then(() => {
//         dispatch(popsLoaded());
//     }).catch(e => {
//         dispatch(popsLoaded());
//         throw e;
//     });

//     fManager.init().then(() => {
//         dispatch(flowsLoaded());
//     }).catch(e => {
//         dispatch(flowsLoaded());
//         throw e;
//     });
// }