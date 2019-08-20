import React from 'react';
import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    width: 4px;
  }

  33% {
    width: 8px;
  }

  67% {
    width: 12px;
  }
`;

const Content = styled.div`
  overflow: hidden;
  animation: ${appear} 1s linear infinite;
`;

interface Props {
  content?: string
}

const Loader: React.FC<Props> = (props: Props) => (
  <Content>{props.content || '···'}</Content>
);

export default Loader;
