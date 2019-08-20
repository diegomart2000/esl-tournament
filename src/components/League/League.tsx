import React, { useEffect } from 'react';
import { League } from 'types';
import { getLeague } from 'store/actions/LeagueActions';

import { 
  Frame,
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
  const { id, isFetching, isFetchingResults, league, getLeague } = props;
  useEffect(() => {
    if (!league && !isFetching) getLeague(id);
  }, [id, league, isFetching, getLeague]);

  return (
    <Frame>
      <Header
        isFetching={isFetching}
        league={league}
      />

      <Results
        isFetching={isFetchingResults}
        results={league && league.results}
      />
    </Frame>
  )
}

export default LeagueComponent;