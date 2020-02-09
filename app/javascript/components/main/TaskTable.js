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
            sorter: " ",
        };
    }

    //upon mounting, get sorting state from local storage if one is present
    //fetch tasks as callback after
    componentDidMount() {
        this.fetchTasksList();
        // this.setState({
        //     sorter: eval('(' + localStorage.getItem("SelectedSort") + ')') || " ",
        // }, this.fetchTasksList)
    }

    //fetches data from api before calling the sort callback function
    //also sets local storage if a sorting type was specified earlier
    fetchTasksList = () => {
        localStorage.setItem("SelectedSort", this.state.sorter.toString());
        fetch('/api/v1/tasks')
            .then((response) => response.json())
            .then((tasks) => this.setState({ tasks }))
            .then(() => this.sortTasks());
    }

    //set the sorting method and fetch the updated tasks as callback function
    setSort = (sorter) => {
        const sortFn = sorter;
        this.setState({
            sorter: sortFn
        }, this.fetchTasksList);
    }

    //sort the tasks
    sortTasks = () => {
        const { tasks } = this.state;
        if (this.state.sorter !== " ") {
            tasks.sort(this.state.sorter);
            this.setState({ tasks });  
        }
    }

    render() {
        //create tasks variable that is an array of tasks as objects
        const { tasks } = this.state;
        return (
            <div>
                <h2 style = {{color:"rosybrown"}}> Tasks </h2>
                <SortBar setSort = {this.setSort}/>
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
                            return <TaskRow task = {taskInArray} key = {taskInArray.id}/>
                        })
                     }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskTable