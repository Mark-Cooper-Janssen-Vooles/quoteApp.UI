import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects'
import * as api from '../quoteServicesAPI'
import * as actions from '../actions/quoteActions'

// READ worker saga
function* getQuotesSaga() {
    try {
        const result = yield call(api.getQuotes)
        const quotes = result.data
        yield put(actions.getQuotesSuccess(quotes))
    } catch (e) {
        console.log("An error occured trying to fetch the quotes")
        yield put(actions.quotesError("An error occured trying to fetch the quotes"))
    }
};
// READ watcher saga
function* watchGetQuotesRequest() {
    yield takeEvery(actions.Types.GET_QUOTES_REQUEST, getQuotesSaga)
}

const quoteSagas = [
    fork(watchGetQuotesRequest),
    // fork(watchDeleteQuoteRequest),
    // fork(watchUpdateQuoteRequest),
    // fork(watchCreateQuoteRequest)
]

export default quoteSagas