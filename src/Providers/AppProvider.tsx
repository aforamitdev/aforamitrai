'use client';
import React, {
  ReactNode,
  useEffect,
  useReducer,
  useState,
  Dispatch,
} from 'react';
import createCtx from './ctx';
import { ActionType, AppState, initialAppState, reducer } from './reducer';
import { IGithubFeed } from '../../types/type';

export const [useAppProvide, AppProvider] = createCtx<
  AppState & { dispatch: Dispatch<ActionType> }
>();

const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialAppState);

  const getGithubFeed = async () => {
    const response = await fetch(
      'https://api.github.com/users/aforamitdev/events',
      {
        headers: new Headers({
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        }),
      }
    );
    const feed = await response.json();
    dispatch({ type: 'SET_GITHUB_FEED', payload: feed });
  };

  const getData = async () => {
    const response = await fetch(
      'https://api.stackexchange.com/2.3/users/10148612/timeline?sort=creation&page=1&pagesize=100&site=stackoverflow'
    );
    const feed = await response.json();
    dispatch({ type: 'SET_STACK_FEED', payload: feed.items });
  };

  useEffect(() => {
    getGithubFeed();
    getData();
  }, []);

  return <AppProvider value={{ ...state, dispatch }}>{children}</AppProvider>;
};

AppContextProvider.displayName = 'AppContext';
export default AppContextProvider;
