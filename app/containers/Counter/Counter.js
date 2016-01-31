import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Counter } from '../../components';
import * as CounterActions from '../../actions/CounterActions';

class CounterApp extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    const { counter, dispatch } = this.props;

    return (
      <Counter counter={counter}
        {...bindActionCreators(CounterActions, dispatch)}
      />
    );
  }
}

function select(state) {
  return {
    counter: state.counter,
  };
}

export default connect(select)(CounterApp);
