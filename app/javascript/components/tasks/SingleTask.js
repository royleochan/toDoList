import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import TasksList from './TasksList';
import CheckBox from '../CheckBox'

class SingleTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { task: {} };
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        fetch (`/api/v1/tasks/${id}`)
            .then((response) => response.json())
            .then((task) => this.setState({ task }));
    }

    render() {
        const { task } = this.state;
        console.log(task.completed)
        if (!task.completed === undefined) {
            var completed = task.completed.toString();
            console.log(completed)
        }

        return (
            <div>
                <div>
                    <label> Title </label>
                    <p> {task.title} </p>
                </div>

                <div>
                    <label> Description </label>
                    <p> {task.description} </p>
                </div>

                <div>
                    <label> Completed </label>
                    <p> {task.completed + ''} </p>
                </div>
            </div>
        );
    }
}

export default SingleTask