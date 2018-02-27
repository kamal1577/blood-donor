import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createForms } from 'react-redux-form';

import donor_reducer from './donor_reducer';

const initialUserState = {
  firstName: '',
  lastName: ''
};

const Reducers = combineReducers({
    donor_reducer,
    routing: routerReducer,
    ...createForms({
      user: initialUserState,
    })
});

export default Reducers;
