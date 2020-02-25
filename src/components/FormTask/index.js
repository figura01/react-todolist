import React from 'react';
import PropTypes from 'prop-types';

import './form-task.scss';

const FormTask = ({ inputTask, changeInput, submitForm }) => (

  <form
    className="form-task"
    onSubmit={submitForm}
  >
    <input
      onChange={changeInput}
      placeholder="Ajouter une tâche"
      className="form-task-input"
      value={inputTask}
    />
  </form>

);

FormTask.propTypes = {
  inputTask: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default FormTask;
