export interface League {
  user: string
  message: string
  timestamp: number
}

export interface LeagueState {
  isFetching: boolean,
  league: League | null,
  error: any
}

export const GET_LEAGUE = 'GET_LEAGUE';
export const GET_LEAGUE_SUCCESS = 'GET_LEAGUE_SUCCESS';
export const GET_LEAGUE_ERROR = 'GET_LEAGUE_ERROR';

interface GetLeageAction {
  type: typeof GET_LEAGUE
  payload: number
}

interface GetLeageSuccessAction {
  type: typeof GET_LEAGUE_SUCCESS
  payload: League
}

interface GetLeageErrorAction {
  type: typeof GET_LEAGUE_ERROR
  payload: any
}

export type LeageActionTypes = GetLeageAction | GetLeageSuccessAction | GetLeageErrorAction