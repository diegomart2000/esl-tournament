import React, { useState } from 'react';
import styled from 'styled-components';

import moment from 'moment';

interface Props {
  time?: boolean;
  value?: Date;
}

const Formatted = styled.span<Props>`
  font-weight: 200;
  font-size: .8rem;
  color: ${({ time }) => time ? 'rgba(0, 0, 0, .56)' : 'rgba(0, 0, 0, .84)'};
`;

const DateComponent: React.FC<Props> = (props: Props) => (
  <Formatted {...props}>
    {props.value && moment.utc(props.value).format(props.time ? 'HH:mm' : 'Do MMM YYYY')}
  </Formatted>
);

export default DateComponent;