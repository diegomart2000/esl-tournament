import { Contestant } from 'types';

export const GET_CONTESTANTS = 'GET_CONTESTANTS';
export const GET_CONTESTANTS_SUCCESS = 'GET_CONTESTANTS_SUCCESS';
export const GET_CONTESTANTS_ERROR = 'GET_CONTESTANTS_ERROR';

interface GetContestantAction {
  type: typeof GET_CONTESTANTS
  payload: number
}

interface GetContestantSuccessAction {
  type: typeof GET_CONTESTANTS_SUCCESS
  payload: {
    contestants: Array<Contestant>
  }
}

interface GetContestantErrorAction {
  type: typeof GET_CONTESTANTS_ERROR
  payload: any
}

export type ContestantActionTypes = GetContestantAction | GetContestantSuccessAction | GetContestantErrorAction