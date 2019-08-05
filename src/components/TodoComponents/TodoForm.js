import React from 'react';

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { task: '' };
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.createTodo({ ...this.state, id: Date.now(), completed: false });
        this.setState({ task: '' });
    };

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    render() {
        const { task } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Add Todo:
                    <input
                        type="text"
                        name="task"
                        placeholder='Add Todo'
                        value={task}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" />
            </form>
        );
    };
};

export default ToDoForm;