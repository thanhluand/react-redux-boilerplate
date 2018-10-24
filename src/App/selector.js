import { createSelector } from 'reselect'
import { initialState } from './reducer';

const App = state => state.get('appReducer', initialState);

const getTitle = () =>
  createSelector(App, state => {
   return state.get('title') + 'asava';
  });

export { App, getTitle, };