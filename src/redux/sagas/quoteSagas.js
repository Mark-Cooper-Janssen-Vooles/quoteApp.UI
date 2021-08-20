import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects'
import * as api from '../quoteServicesAPI'
import * as actions from '../actions/quoteActions'

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
        console.log("An error occured trying to create the item")
        yield put(actions.quotesError("An error occured trying to create the item"))
    }
}

// CREATE quote watcher saga
function* watchCreateNewQuote() {
    yield takeEvery(actions.Types.CREATE_NEW_QUOTE, createNewQuoteSaga)
}
function* createNewQuoteSaga({payload: quote}) {
    try {
        const result = yield call(api.createNewQuote, quote)
        //const quotes = result.data
        //yield put(actions.getQuotesSuccess(quotes))
    } catch (e) {
        console.log("An error occured trying to create the quote")
        yield put(actions.quotesError("An error occured trying to create the quote"))
    }
}

// UPDATE item watcher saga
function* watchUpdateDraftItem() {
    yield takeEvery(actions.Types.UPDATE_DRAFT_ITEM, updateDraftItemSaga)
}
// UPDATE item worker saga
function* updateDraftItemSaga({payload: quoteItem}) {
    try {
        const result = yield call(api.updateDraftItem, quoteItem)
        //const quotes = result.data
        //yield put(actions.getQuotesSuccess(quotes))
    } catch (e) {
        console.log("An error occured trying to update the item")
        yield put(actions.quotesError("An error occured trying to update the item"))
    }
}

// UPDATE finalise and send item WATCHER saga
function* watchFinaliseAndSendItem() {
    yield takeEvery(actions.Types.FINALISE_AND_SEND_ITEM, finaliseAndSendItemSaga)
}
function* finaliseAndSendItemSaga({payload: ids}) {
    try {
        yield call(api.finaliseAndSendItem, ids)
    } catch (e) {
        console.log("An error occured trying to finalise and send the item")
        yield put(actions.quotesError("An error occured trying to finalise and send the item"))
    }
}

// DELETE quote saga
function* watchDeleteQuote() {
    yield takeEvery(actions.Types.DELETE_QUOTE, deleteQuoteSaga)
}
function* deleteQuoteSaga({payload: quoteId}) {
    try {
        const result = yield call(api.deleteQuote, quoteId)
        //const quotes = result.data
        //yield put(actions.getQuotesSuccess(quotes))
    } catch (e) {
        console.log("An error occured trying to delete the quote")
        yield put(actions.quotesError("An error occured trying to delete the quote"))
    }
}

// DELETE item saga
function* watchDeleteItem() {
    yield takeEvery(actions.Types.DELETE_ITEM, deleteItemSaga)
}
function* deleteItemSaga({payload: ids}) {
    try {
        const result = yield call(api.deleteItem, ids)
        //const quotes = result.data
        //yield put(actions.getQuotesSuccess(quotes))
    } catch (e) {
        console.log("An error occured trying to delete the item")
        yield put(actions.quotesError("An error occured trying to delete the item"))
    }
}

const quoteSagas = [
    fork(watchGetQuotesRequest),
    fork(watchCreateNewDraftItem),
    fork(watchUpdateDraftItem),
    fork(watchCreateNewQuote),
    fork(watchDeleteQuote),
    fork(watchDeleteItem),
    fork(watchFinaliseAndSendItem)
]

export default quoteSagas