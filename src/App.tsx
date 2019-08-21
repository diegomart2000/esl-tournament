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
  const id: number = parseInt(window.location.pathname.replace(/\//, '') || '185553');

  return (
    <Provider store={store}>
      <AppContainer>
        <League id={id}/>
      </AppContainer>
    </Provider>
  );
}

export default App;
