import React from 'react';
import PropTypes from 'prop-types';

import Task from 'src/components/Task';
import './task-list.scss';

const TaskList = ({ tasks, changeCheckbox }) => (
  <ul>
    {tasks.map((task) => (
      <Task
        key={task.id}
        label={task.label}
        done={task.done}
        id={task.id}
        changeCheckbox={changeCheckbox}
      />
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  changeCheckbox: PropTypes.func.isRequired,
};

export default TaskList;
