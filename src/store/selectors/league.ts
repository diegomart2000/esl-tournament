import _ from 'lodash';

import { createSelector } from 'reselect';
import { State } from '../reducers';
import { LeagueState } from '../reducers/LeagueReducer';
import { League, Result, Contestant } from '../../types';

const base = (state: State): LeagueState => state.league;

export const isFetchingSelector = createSelector(
  base,
  (state: LeagueState): boolean => state.isFetching,
);

export const isFetchingResultsSelector = createSelector(
  base,
  (state: LeagueState): boolean => state.isFetchingResults,
);

export const errorSelector = createSelector(
  base,

  (state: LeagueState): any => state.error,
);

// To pick base league
export const leagueSelector = createSelector(
  base,
  ( state: LeagueState ): League | undefined => {
    const { league }: { league: League | null } = state;
    if (!league) return;

    const { id, name } = league;
    return { id, name } as League;
  }
);

// To pick only results from league
export const resultSelector = createSelector(
  base,
  (state: LeagueState): Array<Result> | undefined => {
    const { results }: { results: Array<Result> | null } = state;
    if (!results) return;
    return results;
  }
);

// To pick only contestants from league
export const contestantsSelector = createSelector(
  base,
  (state: LeagueState): Array<Contestant> | undefined => {
    const { contestants }: { contestants?: Array<Contestant> | null } = state;
    if (!contestants) return;
    return contestants;
  }
);

// This will include League, Results and Contestants
export const fullLeagueSelector = createSelector(
  base,
  leagueSelector,
  resultSelector,
  contestantsSelector,
  (state, league, results, contestants) => {
    if (!league) return;

    // If results and constetants are loaded map them
    let mappedResults = results;
    if (results && contestants) {
      mappedResults = _(results)
        .map(result => ({
          ...result,
          beginAt: new Date(result.beginAt),
          participants: result.participants
            .map(participant => ({
              ...participant,
              contestant: contestants.find(({ id }) => id === participant.id)
            }))
            .sort((a, b) => a.place - b.place)
        }))
        .sortBy('beginAt')
        .value();
    }

    return {
      ...league,
      results: mappedResults
    }
  }
);