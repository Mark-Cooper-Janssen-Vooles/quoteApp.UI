import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import quoteReducer from "./reducers/quoteReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSagas'

const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers({
    quote: quoteReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store