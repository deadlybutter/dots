import { connect } from 'react-redux';
import { testAction } from '../../actions';
import component from './component';

const mapStateToProps = (state) => {
  return {
    test: state.test,
  };
};

const actionCreators = {
  testAction,
};

const container = connect(mapStateToProps, actionCreators)(component);
export default container;
