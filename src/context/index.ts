import { createContext } from 'node:vm';

import { Context, useContext } from 'react';

export interface AppContextState {
  pathname: string;
}

const initialState: AppContextState = {
  pathname: '/',
};

export const AppContext = createContext(
  initialState
) as Context<AppContextState>;

export const useAppContext = () => useContext<AppContextState>(AppContext);
