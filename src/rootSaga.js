import { all } from 'redux-saga/effects'

import appSaga from './Container/saga'

export default function* rootSaga() {
    yield all([
        appSaga()
    ])
}