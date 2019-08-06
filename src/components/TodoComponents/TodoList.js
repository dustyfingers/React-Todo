import React from 'react';

import Todo from './Todo';

class ToDoList extends React.Component {
    render() {
        const { todos, toggleComplete } = this.props;
        console.log(todos);
        return (
            <ul>
                {todos.map((todo, i) => (
                    <Todo task={todo.task} key={i} toggleComplete={toggleComplete} />
                ))}
            </ul>
        );
    }
};

export default ToDoList;