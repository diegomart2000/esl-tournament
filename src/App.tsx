import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';

import store from 'store';

import League from 'components/League';

const AppContainer = styled.div`
  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <League id={185553}/>
      </AppContainer>
    </Provider>
  );
}

export default App;
