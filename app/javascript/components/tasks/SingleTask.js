import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import '../../../assets/stylesheets/myStyles.css'

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
        if (!task.completed === undefined) {
            var completed = task.completed.toString();
            console.log(completed)
        }

        return (
            <div>
                <h3 className = 'subtitle'>  View Task </h3>
                <div>
                    <label className = 'subtitle'> Title </label>
                    <p> {task.title} </p>
                </div>

                <div>
                    <label className = 'subtitle'> Description </label>
                    <p> {task.description} </p>
                </div>

                <div>
                    <label className = 'subtitle'> Completed </label>
                    <p> {task.completed + ''} </p>
                </div>
            </div>
        );
    }
}

export default SingleTask