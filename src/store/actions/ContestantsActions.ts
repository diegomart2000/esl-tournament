import { Contestant } from 'types';

import {
  GET_CONTESTANTS,
  GET_CONTESTANTS_SUCCESS,
  GET_CONTESTANTS_ERROR,

  ContestantActionTypes,
} from './types/ContestantTypes';

export function getContestant(id: number): ContestantActionTypes {
  return {
    type: GET_CONTESTANTS,
    payload: id
  }
}

export function getContestantSuccess(contestants: Array<Contestant>): ContestantActionTypes {
  return {
    type: GET_CONTESTANTS_SUCCESS,
    payload: { contestants }
  }
}

export function getContestantError(error: any): ContestantActionTypes {
  return {
    type: GET_CONTESTANTS_ERROR,
    payload: error
  }
}