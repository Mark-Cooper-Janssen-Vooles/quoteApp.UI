import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects'
import * as api from '../quoteServicesAPI'
import * as actions from '../actions/quoteActions'
import {createNewDraftItem} from "../actions/quoteActions";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// READ watcher saga
function* watchGetQuotesRequest() {
    yield takeEvery(actions.Types.GET_QUOTES_REQUEST, getQuotesSaga)
}
// READ worker saga
function* getQuotesSaga() {
    try {
        const result = yield call(api.getQuotes)
        let quotes = result.data;
        yield put(actions.getQuotesSuccess(quotes))
    } catch (e) {
        console.log("An error occured trying to fetch the quotes")
        yield put(actions.quotesError("An error occured trying to fetch the quotes"))
    }
}

// CREATE item watcher saga
function* watchCreateNewDraftItem() {
    yield takeEvery(actions.Types.CREATE_NEW_DRAFT_ITEM, createNewDraftItemSaga)
}
// CREATE item worker saga
function* createNewDraftItemSaga({payload: quoteItem}) {
    try {
        const result = yield call(api.createNewDraftItem, quoteItem)
        //const quotes = result.data
        //yield put(actions.getQuotesSuccess(quotes))
    } catch (e) {
        console.log("An error occured trying to fetch the quotes")
        yield put(actions.quotesError("An error occured trying to fetch the quotes"))
    }
}

const quoteSagas = [
    fork(watchGetQuotesRequest),
    fork(watchCreateNewDraftItem),
    // fork(watchUpdateQuoteRequest),
    // fork(watchCreateQuoteRequest)
]

export default quoteSagas