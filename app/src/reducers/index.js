import { combineReducers } from 'redux';
import homePageReducer from './homePageReducer';

export default combineReducers({
  version: () => '0.0.1',
  home: homePageReducer,
});
