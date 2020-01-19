import React from 'react'
import CheckBox from './CheckBox'
import Starred from './Starred'

import '../stylesheets/myStyles.css'

class TaskRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strikeThrough: null,
        }
    }

    componentDidMount() {
        const task = this.props.task;
        this.setState({
            strikeThrough: task.completed,
        })
    }

    handleDelete = (taskId) => {
        fetch(`/api/v1/tasks/${taskId}`, { method: 'delete' })
            .then((response) => {
                alert('Task deleted successfully')
                location.href = '/';
            });
    }

    handleView = (taskId) => {
        location.href = `/tasks/${taskId}`;
    }

    handleUpdate = (taskId) => {
        location.href = `/tasks/${taskId}/edit`;
    }

    handleStrikeThrough = () => {
        this.setState({
            strikeThrough: !this.state.strikeThrough,
        })
    }

    render() {
        //props from parent component TaskTable
        const task = this.props.task;
        if (this.state.strikeThrough) {
            return (
                <>
                    <tr className = 'strikeThrough'>
                        <td>
                            <CheckBox taskDetails = {task} handler = {this.handleStrikeThrough}/>
                        </td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>
                            <button onClick = { () => this.handleDelete(task.id) }>
                                Delete
                            </button>
                            <button onClick = { () => this.handleView(task.id) }>
                                View
                            </button>
                            <button onClick = { () => this.handleUpdate(task.id) }>
                                Edit
                            </button>
                        </td>
                        <td>
                            {task.due + ''}
                        </td>
                        <td>
                            <Starred taskDetails = {task}/>
                        </td>
                    </tr>
                </>
            )
        } else {
            return (
                <>
                    <tr>
                        <td>
                            <CheckBox taskDetails = {task} handler = {this.handleStrikeThrough}/>
                        </td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>
                            <button onClick = { () => this.handleDelete(task.id) }>
                                Delete
                            </button>
                            <button onClick = { () => this.handleView(task.id) }>
                                View
                            </button>
                            <button onClick = { () => this.handleUpdate(task.id) }>
                                Edit
                            </button>
                        </td>
                        <td>
                            {task.due + ''}
                        </td>
                        <td>
                            <Starred taskDetails = {task}/>
                        </td>
                    </tr>
                </>
            )
        }
    }
}

export default TaskRow