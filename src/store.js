import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers/index';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = (createStore)(reducers, devTools, applyMiddleware(thunk))

export default store;

// export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());