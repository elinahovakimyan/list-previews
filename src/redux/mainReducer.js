import { combineReducers } from 'redux';

/**
 * You can import more reducers here
 */
import { AppReducer } from '../containers/redux/reducers';


export const combinedReducers = combineReducers({
  App: AppReducer,
});
