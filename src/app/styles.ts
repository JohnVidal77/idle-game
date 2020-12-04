import styled from 'styled-components';

export const MainGame = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'clicker' 'builds' 'upgrades';

  @media (min-width: 425px) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 'clicker builds' 'clicker upgrades';
  } ;
`;
