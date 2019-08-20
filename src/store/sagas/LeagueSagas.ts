import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchById } from 'api/LeagueApi';

import {
  GET_LEAGUE,
  LeagueActionTypes,
} from 'store/actions/types/LeagueTypes';

import {
  getLeagueSuccess,
  getLeagueError,
} from 'store/actions/LeagueActions';

import { 
  getResult
} from 'store/actions/ResultsActions';

// Party Fetch
export function* doGetLeague(action: LeagueActionTypes) {
  try {
    const id: number = action.payload;
    yield put(getResult(id));

    const response = yield call(fetchById, id);
    yield put(getLeagueSuccess(response));
  } catch (error) {
    yield put(getLeagueError(error.response.data));
  }
}

// Watches for GET_LEAGUE action and calls handler
export function* watchGetLeague() {
  yield takeLatest(GET_LEAGUE, doGetLeague);
}

export function* rootSaga() {
  yield all([
    watchGetLeague(),
  ]);
}
