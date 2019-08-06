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

  createTodo = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearTodos = () => {
    this.setState({ todos: [] });
    console.log('clearTodos called!');
  };

  toggleComplete = (id) => {
    console.log(`toggleComplete called on todo with id: ${id}`)
    // TODO: this throws 'completed is undefined'
    //const todos = this.state.todos.map(todo => todo.id === id ? { ...todo, completed: !completed } : todo);
    // this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm
          createTodo={this.createTodo}
          clearTodos={this.clearTodos} />
        <ToDoList
          todos={todos}
          toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
