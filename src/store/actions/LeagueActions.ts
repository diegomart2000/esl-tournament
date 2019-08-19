import {
  League,

  GET_LEAGUE,
  GET_LEAGUE_SUCCESS,
  GET_LEAGUE_ERROR,

  LeageActionTypes,
} from './types/LeagueTypes';

// TypeScript infers that this function is returning SendMessageAction
export function getLeague(id: number): LeageActionTypes {
  return {
    type: GET_LEAGUE,
    payload: id
  }
}

export function getLeagueSuccess(league: League): LeageActionTypes {
  return {
    type: GET_LEAGUE_SUCCESS,
    payload: league
  }
}

export function getLeagueError(error: any): LeageActionTypes {
  return {
    type: GET_LEAGUE_ERROR,
    payload: error
  }
}