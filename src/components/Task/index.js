import React from 'react';
import PropTypes from 'prop-types';

import './task.scss';

const Task = ({
  label,
  done,
  id,
  changeCheckbox,
}) => (
  <li
    className={done ? 'task done' : 'task'}
  >
    {done ? (
      <input
        type="checkbox"
        onChange={() => {
          changeCheckbox(id);
        }}
        className="task-checkbox"
        checked
      />
    ) : (
      <input
        type="checkbox"
        className="task-checkbox"
        onChange={() => {
          changeCheckbox(id);
        }}
      />
    )}
    {label}
  </li>
);

Task.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
};

export default Task;
