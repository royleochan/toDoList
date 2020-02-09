import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import TaskTable from './TaskTable'

import '../../../assets/stylesheets/myStyles.css'

class TasksList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TaskTable/> 
            </div>
        )
    }
}

export default TasksList