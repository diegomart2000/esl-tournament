import { Result } from 'types';

import {
  GET_RESULTS,
  GET_RESULTS_SUCCESS,
  GET_RESULTS_ERROR,

  ResultActionTypes,
} from './types/ResultTypes';

export function getResult(id: number): ResultActionTypes {
  return {
    type: GET_RESULTS,
    payload: id
  }
}

export function getResultSuccess(results: Array<Result>): ResultActionTypes {
  return {
    type: GET_RESULTS_SUCCESS,
    payload: { results }
  }
}

export function getResultError(error: any): ResultActionTypes {
  return {
    type: GET_RESULTS_ERROR,
    payload: error
  }
}