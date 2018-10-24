import { fromJS } from 'immutable';

export const initialState = fromJS({
  title: ''
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return state.set('title', action.payload);
    default:
      return state;
  }
}

export default appReducer;