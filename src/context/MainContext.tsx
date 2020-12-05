/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  ReactElement,
  createContext,
  useState,
  useContext,
} from 'react';

interface IProps {
  children: ReactElement[];
}

interface IMainContext {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
}

const MainContext = createContext<IMainContext>({
  points: 0,
  setPoints: (): void => {},
});

export const MainProvider: React.FC<IProps> = ({ children }): ReactElement => {
  const [points, setPoints] = useState(0);

  return (
    <MainContext.Provider
      value={{
        points,
        setPoints,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = (): IMainContext => {
  const context = useContext(MainContext);

  if (!context) throw new Error('useMainContext must be inside a MainProvider');

  return context;
};
