import React from 'react';
import GlobalStyle from '../styles/global';
import { MainGame } from './styles';

import { MainProvider } from '../context/MainContext';

import Clicker from '../views/Clicker';
import Upgrades from '../views/Upgrades';
import Builds from '../views/Builds';

const App: React.FC = () => {
  return (
    <MainProvider>
      <MainGame>
        <Clicker />
        <Builds />
        <Upgrades />
      </MainGame>
      <GlobalStyle />
    </MainProvider>
  );
};

export default App;
