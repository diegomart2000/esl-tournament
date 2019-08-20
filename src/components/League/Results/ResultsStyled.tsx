import styled from 'styled-components';

export const ResultsFrame = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.1rem;
  background-color: white;
`;

export const SortButton = styled.button`
  display: block;
  border: 1px solid #ccc;
  border-radius: 1px;
  font-size: .8rem;
  padding: .3rem .5rem;
  margin-right: 0;
  margin-left: auto;
`;

export const ResultItem = styled.div`
  padding: 1rem;
  margin: auto -1rem;
  border-bottom: 1px solid #eee;

  :last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const ResultParticipant = styled.div<{place?: number}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .8rem;
  border-left: 4px solid ${props => props.place === 1 ? 'green' : 'red'};
  padding: .2rem .3rem .2rem .5rem;
  border-radius: 0.2rem;

  > h3 {
    font-weight: ${props => props.place === 1 ? '600' : '400'};
  }
`;

export const ParticipantName = styled.div`
`;

export const ParticipantPoints = styled.h3`
  margin: 0;
  padding: 0;
`;