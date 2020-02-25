import React from 'react';
import PropTypes from 'prop-types';
import './counter-task.scss';

const CounterTask = ({ counterTask }) => (
  <div className="counter-task">
    { counterTask } tâches en cours
  </div>
);

CounterTask.propTypes = {
  counterTask: PropTypes.number.isRequired,
};

export default CounterTask;
