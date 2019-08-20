import React from 'react';
import { Result } from 'types';
import FormattedDate from 'components/Common/Date';

import {
  ResultItem,
  ResultParticipant,
  ParticipantName,
  ParticipantPoints,
} from './ResultsStyled';

interface Props {
  result: Result;
}

const Item: React.FC<Props> = (props: Props) => (
  <ResultItem key={props.result.id}>
    <FormattedDate value={props.result.beginAt} time />
    {props.result.participants.map(participant => (
      <ResultParticipant key={`part-${participant.id}`} place={participant.place}>
        <ParticipantName>{(participant.contestant && participant.contestant.name) || `NA`}</ParticipantName>
        <ParticipantPoints>{participant.points[0]}</ParticipantPoints>
      </ResultParticipant>
    ))}
  </ResultItem>
);

export default Item;
