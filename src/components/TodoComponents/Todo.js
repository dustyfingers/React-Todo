import React from 'react';

class Todo extends React.Component {
    render() {
        const { task, toggleComplete, id } = this.props;
        return (
            <div onClick={() => toggleComplete(id)}>{task}</div>
        );
    }
};

export default Todo;