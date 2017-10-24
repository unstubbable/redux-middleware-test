import { Dispatch, Middleware, Store } from 'redux';
import { AppState } from './types';

export const myMiddleware: Middleware = (store: Store<AppState>) => {
  // tslint:disable-next-line no-any
  return (next: Dispatch<AppState>) => (action: any) => {
    // tslint:disable-next-line no-console
    console.log(action);
    return next(action);
  };
};
