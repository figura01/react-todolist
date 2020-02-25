// == Import : npm
import React from 'react';
import { Container } from 'semantic-ui-react';

// == Import : local
import './app.scss';

import FormTask from 'src/components/FormTask';
import CounterTask from 'src/components/CounterTask';
import TaskList from 'src/components/TaskList';

// == Composant
class App extends React.Component {
  state = {
    tasksList: [
      { id: 0, label: 'Faire une todoList en JS', done: true },
      { id: 1, label: 'Faire une todoList en React', done: false },
      { id: 2, label: 'Coder Facebook', done: false },
    ],
    inputTask: '',
    counterTask: 2,
  };

  handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({
      inputTask: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputTask, tasksList } = this.state;

    const maxId = this.findMaxIdTask(tasksList);
    const newTask = {
      id: maxId + 1,
      label: inputTask,
      done: false,
    };
    // console.log('nouvel tache', newTask);

    const newTasksList = tasksList.map((task) => task);
    // console.log('map de tasks', newTasksList);
    newTasksList.push(newTask);
    // console.log('tasks list after push', newTasksList);

    const newCounterTask = newTasksList.filter((task) => task.done === false).length;

    this.setState({
      tasksList: newTasksList,
      counterTask: newCounterTask,
      inputTask: '',
    });
  };

  findMaxIdTask = (tasksList) => {
    const mapIdList = [];
    tasksList.forEach((task) => {
      mapIdList.push(task.id);
    });
    const maxId = Math.max(...mapIdList);
    return maxId;
  };

  handleChangeCheckbox = (id) => {
    const { tasksList } = this.state;
    const newTasks = tasksList.map((task) => (
      task
    ));

    const changeTask = newTasks.find((task) => task.id === id);
    changeTask.done = !changeTask.done;
    const newCounterTask = newTasks.filter((task) => task.done === false).length;

    this.setState({
      tasksList: newTasks,
      counterTask: newCounterTask,
    });
  }

  render() {
    const { inputTask, tasksList, counterTask } = this.state;

    return (
      <div
        id="app"
        className="app"
      >
        <Container>
          <FormTask
            changeInput={this.handleChange}
            submitForm={this.handleSubmit}
            inputTask={inputTask}
          />
          <CounterTask counterTask={counterTask} />
          <TaskList
            tasks={tasksList}
            changeCheckbox={this.handleChangeCheckbox}
          />
        </Container>
      </div>
    );
  }
}

// == Export
export default App;
