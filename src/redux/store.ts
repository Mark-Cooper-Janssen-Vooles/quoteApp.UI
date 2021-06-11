import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import quoteReducer from "./reducers/quoteReducer";

const reducer = combineReducers({
    quote: quoteReducer,
})

export default createStore(
    reducer,
    composeWithDevTools()
);