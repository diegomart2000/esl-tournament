import { League } from 'types';

export const GET_LEAGUE = 'GET_LEAGUE';
export const GET_LEAGUE_SUCCESS = 'GET_LEAGUE_SUCCESS';
export const GET_LEAGUE_ERROR = 'GET_LEAGUE_ERROR';

interface GetLeagueAction {
  type: typeof GET_LEAGUE
  payload: number
}

interface GetLeagueSuccessAction {
  type: typeof GET_LEAGUE_SUCCESS
  payload: {
    league: League
  }
}

interface GetLeagueErrorAction {
  type: typeof GET_LEAGUE_ERROR
  payload: any
}

export type LeagueActionTypes = GetLeagueAction | GetLeagueSuccessAction | GetLeagueErrorAction