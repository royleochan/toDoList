import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CheckBox from '../CheckBox'

import '../stylesheets/myStyles.css'

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
            .then((tasks) => this.setState({ tasks }));
    }

    handleDelete = (taskId) => {
        fetch(`/api/v1/tasks/${taskId}`, { method: 'delete' })
            .then((response) => {
                alert('Task deleted successfully')
                this.fetchTasksList();
            });
    }

    handleView = (taskId) => {
        location.href = `/tasks/${taskId}`;
    }

    handleUpdate = (taskId) => {
        location.href = `/tasks/${taskId}/edit`;
    }

    render() {
        const { tasks } = this.state;

        return (
            <div>
                <h3 className = 'title'>All Tasks</h3>
                <table>
                <thead>
                    <tr>
                    <th className = 'title'>ID</th>
                    <th className = 'title'>Title</th>
                    <th className = 'title'>Description</th>
                    <th className = 'title'>Actions</th>
                    <th className = 'title'>Due</th>
                    <th></th>
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
                                    <button onClick = { () => this.handleView(task.id)}>
                                        View
                                    </button>
                                    <button onClick = { () => this.handleUpdate(task.id)}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    {task.due + ''}
                                </td>
                                <td>
                                    <CheckBox 
                                        taskDetails = {task}
                                     />
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