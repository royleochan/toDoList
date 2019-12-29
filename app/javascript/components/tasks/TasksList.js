import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class TasksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] };
    }

    componentDidMount() {
        this.fetchTasksList();
    }

    fetchTasksList = () => {
        fetch('/api/v1/tasks')
            .then((response) => response.json())
            .then((tasks) => this.setState({ tasks }))
    }

    handleDelete = (taskId) => {
        fetch(`/api/v1/tasks/${taskId}`, { method: 'delete' })
            .then((response) => {
                alert('Task deleted successfully')
                this.fetchTasksList();
            });
    }

    render() {
        const { tasks } = this.state;
        return (
            <div>
                <h3>All Tasks</h3>
                <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    tasks.map((task) => {
                    return (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>
                                {task.title}
                            </td>
                            <td>{task.description}</td>
                            <td>
                                <button onClick = { () => this.handleDelete(task.id) }>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                    })
                }
                </tbody>
                </table>
            </div>
        )
    }
}

export default TasksList