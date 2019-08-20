import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchResultsById, fetchContestantsById } from 'api/LeagueApi';

import {
  GET_RESULTS,
  ResultActionTypes
} from 'store/actions/types/ResultTypes';

import {
  getResultSuccess,
  getResultError,
} from 'store/actions/ResultsActions';

import {
  getContestantSuccess,
} from 'store/actions/ContestantsActions';

// This sagas will trigger to load results and contestants at the same time
// All the actions here will be handled by LeagueReducer since all this data depends on league Id
export function* doGetResult(action: ResultActionTypes) {
  try {
    const id: number = action.payload;
    const [results, contestants] = yield call(() => Promise.all([
      fetchResultsById(id),
      fetchContestantsById(id),
    ]));

    yield put(getResultSuccess(results));
    yield put(getContestantSuccess(contestants));
  } catch (error) {
    yield put(getResultError(error));
  }
}

// Watches for GET_LEAGUE action and calls handler
export function* watchGetResult() {
  yield takeLatest(GET_RESULTS, doGetResult); 
}

export function* rootSaga() {
  yield all([
    watchGetResult(),
  ]);
}
