import {
  LeagueState,

  GET_LEAGUE,
  GET_LEAGUE_SUCCESS,
  GET_LEAGUE_ERROR,

  LeageActionTypes,
} from '../actions/types/LeagueTypes';

const initialState: LeagueState = {
  isFetching: false,
  league: null,
  error: null,
}

const reducer = (
  state = initialState,
  action: LeageActionTypes
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

    default:
      return state;
  }
};

export default reducer;
