import { combineReducers } from 'redux';

import { routerReducer as routing } from 'react-router-redux';

import { reducer as repos } from './repos';
import { reducer as repo } from './repo';

export default combineReducers({
  routing,
  repos,
  repo,
});
