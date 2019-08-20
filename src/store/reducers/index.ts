import { combineReducers } from 'redux';
import league, { LeagueState } from './LeagueReducer';

export interface State {
  league: LeagueState;
};

const rootReducer = combineReducers<State>({
  league,
});

export default rootReducer;