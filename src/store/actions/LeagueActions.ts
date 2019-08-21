import { League } from 'types';

import {
  GET_LEAGUE,
  GET_LEAGUE_SUCCESS,
  GET_LEAGUE_ERROR,

  LeagueActionTypes,
} from './types/LeagueTypes';

export function getLeague(id: number): LeagueActionTypes {
  return {
    type: GET_LEAGUE,
    payload: id
  }
}

export function getLeagueSuccess(league: League): LeagueActionTypes {
  return {
    type: GET_LEAGUE_SUCCESS,
    payload: { league }
  }
}

export function getLeagueError(error: any): LeagueActionTypes {
  return {
    type: GET_LEAGUE_ERROR,
    payload: { error }
  }
}