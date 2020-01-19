import React from 'react'
import SortBar from './SortBar'
import TaskRow from './TaskRow'

import '../stylesheets/myStyles.css'

class TaskTable extends React.Component {
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

    render() {
        const { tasks } = this.state;

        return (
            <div>
                <SortBar/>
                <table>
                    <thead>
                        <tr>
                        <th></th>
                        <th className = 'title'> Title </th>
                        <th className = 'title'> Description </th>
                        <th className = 'title'> Actions </th>
                        <th className = 'title'> Due </th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tasks.map((x) => {
                            return <TaskRow task = {x} key = {x.id}/>
                        })
                     }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskTable