import React from 'react';

import { useMainContext } from '../../context/MainContext';

const Clicker: React.FC = () => {
  const { points, setPoints } = useMainContext();

  return (
    <div
      style={{
        gridArea: 'clicker',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>{points} points</h1>
      <button type="button" onClick={() => setPoints(points + 1)}>
        Click here
      </button>
    </div>
  );
};

export default Clicker;
