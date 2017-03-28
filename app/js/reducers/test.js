import { TEST_ACTION } from '../actions';

const test = (state = {}, action) => {
  switch (action.type) {
    case TEST_ACTION:
      console.log('Test reducer');
      return state;

    default:
      return state;
  }
}

export default test;
