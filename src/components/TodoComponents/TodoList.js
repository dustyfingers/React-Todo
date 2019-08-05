import React from 'react';

import Todo from './Todo';

class ToDoList extends React.Component {
    render() {
        const { todos } = this.props;
        return (
            <ul>
                {todos.map((todo, i) => (
                    <Todo task={todo.task} key={i} />
                ))}
            </ul>
        );
    }
};

export default ToDoList;