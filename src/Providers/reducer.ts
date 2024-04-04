import { IStackOverFlow } from '../../types/stackoverflow';
import { IGithubFeed } from '../../types/type';

export type AppState = {
  githubFeed: IGithubFeed[];
  stackOverflow: IStackOverFlow[];
};

// export state have export configurations and export
// export configuration: on page load call configurations for options, configuration is saved in exportConfigurations.

export const initialAppState: AppState = {
  githubFeed: [],
  stackOverflow: [],
};

export type ActionType =
  | { type: 'SET_GITHUB_FEED'; payload: IGithubFeed[] }
  | { type: 'SET_STACK_FEED'; payload: IStackOverFlow[] };

export function reducer(state: AppState, action: ActionType): AppState {
  switch (action.type) {
    case 'SET_GITHUB_FEED':
      return { ...state, githubFeed: action.payload };
      break;
    case 'SET_STACK_FEED':
      return { ...state, stackOverflow: action.payload };
      break;

    default:
      return state;
      break;
  }

  return state;
}
