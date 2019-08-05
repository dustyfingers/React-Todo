import React from 'react';

class ToDoList extends React.Component {
    render() {
        const { todos } = this.props;
        return (
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>{todo.task}</li>
                ))}
            </ul>
        );
    }
};

export default ToDoList;