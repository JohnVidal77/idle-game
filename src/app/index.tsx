import React from 'react';
import GlobalStyle from '../styles/global';
import { MainGame } from './styles';

import Clicker from '../views/Clicker';
import Upgrades from '../views/Upgrades';
import Builds from '../views/Builds';

const App: React.FC = () => {
  return (
    <>
      <MainGame>
        <Clicker />
        <Builds />
        <Upgrades />
      </MainGame>
      <GlobalStyle />
    </>
  );
};

export default App;
