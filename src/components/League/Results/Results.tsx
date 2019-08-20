import React, { useState } from 'react';
import _ from 'lodash';

import { Result } from '../../../types';
import FormattedDate from '../../Common/Date';

import {
  ResultsFrame,
  SortButton,
} from './ResultsStyled';

import Item from './Item';

interface Props {
  isFetching: boolean;
  results?: Array<Result>;
  error?: any;
}

const sort = (results: Array<Result>, order: boolean): Array<Result> => {
  let chain = _(results)
    .sortBy(['beginAt']);

  if (order) chain = chain.reverse();
  return chain.value();
}

const ResultsComponent: React.FC<Props> = (props: Props) => {
  const { isFetching } = props;
  let { results } = props;
  const [ order, setOrder ] = useState(false);

  return (
    <ResultsFrame>
      <SortButton onClick={() => setOrder(!order)}>Date {order ? '▼' : '▲'}</SortButton>
      {isFetching && <div>...</div>}
      {results && sort(results, order).map((result: Result) => (
        <Item key={result.id} result={result} />
      ))}
    </ResultsFrame>
  )
}

export default ResultsComponent;