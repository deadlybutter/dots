import { combineReducers } from 'redux';
import dots from './dots';

export default function(reducers) {
  return combineReducers({
    ...reducers,
    dots,
  });
}
