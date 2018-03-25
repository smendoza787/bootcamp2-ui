import { all, call, put, takeEvery } from 'redux-saga/effects';
import { swapiActionCreators } from '../action-creators';

// ============================================================================================== //
// ======================================== WORKER SAGAS ======================================== //
// ============================================================================================== //


function* fetchCharacters() {
  try {
    const response = yield call(fetch, 'https://swapi.co/api/people/');
    const data = yield response.json();
    const thing = yield swapiActionCreators.receiveSwapiCharacters(data);
    yield put(thing)
  } catch (e) {
    console.log(e);
  }
}

// ============================================================================================= //
// ======================================= WATCHER SAGAS ======================================= //
// ============================================================================================= //

function* watchFetchCharacters() {
  yield takeEvery('FETCH_CHARACTERS_REQUESTED', fetchCharacters);
}

// ============================================================================================== //
// ========================================= ROOT SAGA ========================================== //
// ============================================================================================== //

export default function* rootSaga() {
  yield all([
    watchFetchCharacters()
  ])
}