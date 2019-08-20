import {
  GET_LEAGUE,
  GET_LEAGUE_SUCCESS,
  GET_LEAGUE_ERROR,

  LeagueActionTypes,
} from 'store/actions/types/LeagueTypes';

import {
  GET_RESULTS,
  GET_RESULTS_SUCCESS,
  GET_RESULTS_ERROR,

  ResultActionTypes,
} from 'store/actions/types/ResultTypes';

import {
  GET_CONTESTANTS_SUCCESS,

  ContestantActionTypes,
} from 'store/actions/types/ContestantTypes';

import { League, Result, Contestant } from 'types';

export interface LeagueState {
  isFetching: boolean,
  isFetchingResults: boolean,
  league: League | null,
  results: Array<Result> | null,
  contestants: Array<Contestant> | null,
  error: any
}

const initialState: LeagueState = {
  isFetching: false,
  isFetchingResults: false,
  league: null,
  results: null,
  contestants: null,
  error: null,
}

const reducer = (
  state = initialState,
  action: LeagueActionTypes | ResultActionTypes | ContestantActionTypes
): LeagueState => {
  const { type, payload = {} } = action;

  switch (type) {
    case GET_LEAGUE: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case GET_LEAGUE_SUCCESS: {
      const { league } = payload;

      return {
        ...state,
        isFetching: false,
        error: null,
        league,
      }
    }

    case GET_LEAGUE_ERROR: {
      const { error } = payload;

      return {
        ...state,
        isFetching: false,
        league: null,
        error,
      };
    }

    case GET_RESULTS: {
      return {
        ...state,
        isFetchingResults: true,
      }
    }

    case GET_RESULTS_SUCCESS: {
      const { results } = payload;

      return {
        ...state,
        isFetchingResults: false,
        error: null,
        results,
      }
    }

    case GET_RESULTS_ERROR: {
      const { error } = payload;

      return {
        ...state,
        isFetchingResults: false,
        results: null,
        error,
      };
    }

    case GET_CONTESTANTS_SUCCESS: {
      const { contestants } = payload;

      return {
        ...state,
        contestants,
      }
    }

    default:
      return state;
  }
};

export default reducer;