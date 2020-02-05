import React from 'react'
import SortBar from './SortBar'
import TaskRow from './TaskRow'

import '../stylesheets/myStyles.css'

class TaskTable extends React.Component {
    constructor(props) {
        super(props);
        //array of tasks as objects
        this.state = { 
            tasks: [],
        };

        this.fetchAfterEdit = this.fetchAfterEdit.bind(this);
    }

    componentDidMount() {
        this.fetchTasksList();
    }

    fetchAfterEdit() {
        this.fetchTasksList();
    }

    fetchTasksList = () => {
        console.log("fetch");
        //fetches data as array of objects
        fetch('/api/v1/tasks')
            .then((response) => response.json())
            .then((tasks) => this.setState({ tasks }));
    }

    sortTasks = (sorter) => {
        const { tasks } = this.state;
        tasks.sort(sorter);
        this.setState({ tasks });
    }

    render() {
        //create tasks variable that is an array of tasks as objects
        const { tasks } = this.state;
        console.log(tasks);
        return (
            <div>
                <SortBar sortTasks = {this.sortTasks}/>
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
                        tasks.map((taskInArray) => {
                            return <TaskRow task = {taskInArray} key = {taskInArray.id} fetch = {this.fetchAfterEdit}/>
                        })
                     }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskTable