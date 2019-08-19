import { combineReducers } from 'redux';
import league from './LeagueReducer';

const rootReducer = combineReducers({
  league,
});

export type AppState = ReturnType<typeof rootReducer>