import React from 'react';
import _ from 'lodash';

import { Date as FormattedDate, Loader } from  '../../Common';

import { League, Result } from '../../../types';

import {
  Header,
} from './HeaderStyled';

interface Props {
  isFetching: boolean;
  league?: League;
}

const getStartDate = (results?: Array<Result>): Date | undefined => results 
  && _.chain(results)
    .map(({ beginAt }) => beginAt )
    .sort()
    .head()
    .value();

const LeagueHeader: React.FC<Props> = (props: Props) => {
  const { isFetching, league } = props;
  return (
    <Header>
      {isFetching && <Loader />}
      {league && (
        <div>
          <h3>
            {league.name.full}
          </h3>
          <FormattedDate value={getStartDate(league.results)} />
        </div>
      )}
    </Header>
  )
}

export default LeagueHeader;