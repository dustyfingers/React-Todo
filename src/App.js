import React from 'react';

import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  create = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm createTodo={this.create} />
        <ToDoList todos={todos} />
      </div>
    );
  }
}

export default App;
