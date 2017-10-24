import { Dispatch, Middleware, Store } from 'redux';
import { AppState } from './types';

export const myMiddleware: Middleware = <S = AppState>(store: Store<S>) => {
  // The current redux typings don't go well with TS >= 2.4.
  // Therefore we need to declare `action` as `any`. This will improve with
  // https://github.com/reactjs/redux/pull/2563
  // tslint:disable-next-line no-any
  return (next: Dispatch<S>) => (action: any) => {
    // tslint:disable-next-line no-console
    console.log(action);
    return next(action);
  };
};
