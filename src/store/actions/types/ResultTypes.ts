import { Result } from '../../../types';

export const GET_RESULTS = 'GET_RESULTS';
export const GET_RESULTS_SUCCESS = 'GET_RESULTS_SUCCESS';
export const GET_RESULTS_ERROR = 'GET_RESULTS_ERROR';

interface GetResultAction {
  type: typeof GET_RESULTS
  payload: number
}

interface GetResultSuccessAction {
  type: typeof GET_RESULTS_SUCCESS
  payload: {
    results: Array<Result>
  }
}

interface GetResultErrorAction {
  type: typeof GET_RESULTS_ERROR
  payload: any
}

export type ResultActionTypes = GetResultAction | GetResultSuccessAction | GetResultErrorAction