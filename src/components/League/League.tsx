import React, { useEffect } from 'react';
import { League } from 'types';
import { getLeague } from 'store/actions/LeagueActions';

import { 
  Frame,
  Error,
} from './LeagueStyled';

import Header from './Header';
import Results from './Results';

interface Props {
  id: number
  isFetching: boolean
  isFetchingResults: boolean
  league?: League
  error: any

  getLeague: typeof getLeague
}

const LeagueComponent: React.FC<Props> = (props: Props) => {
  const { id, isFetching, isFetchingResults, league, getLeague, error } = props;
  useEffect(() => {
    if (!league && !isFetching && !error) getLeague(id);
  }, [id, league, isFetching, getLeague, error]);

  return (
    <Frame>
      {!error 
        ? <> 
          <Header
            isFetching={isFetching}
            league={league}
          />

          <Results
          isFetching={isFetchingResults}
          results={league && league.results}
          />
        </>

        : <Error>Something went wrong loading league</Error>
      }
    </Frame>
  )
}

export default LeagueComponent;