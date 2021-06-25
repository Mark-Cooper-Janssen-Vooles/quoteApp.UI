import quoteSagas from './quoteSagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        ...quoteSagas
    ])
}