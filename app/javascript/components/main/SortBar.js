import React from 'react'

import '../stylesheets/myStyles.css'

// drop down button
class SortBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu = (event) => {
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = (event) => {
        this.setState({ showMenu: false}, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    compareId = (taskOne, taskTwo) => {
        if (taskOne.id < taskTwo.id) {
            return -1;
        } else if(taskOne.id > taskTwo.id) {
            return 1;
        }
        return 0;
    }

    compareStarred = (taskOne, taskTwo) => {
        if (taskOne.starred < taskTwo.starred) {
            return 1;
        } else if(taskOne.starred > taskTwo.starred) {
            return -1;
        }
        return this.compareId(taskOne, taskTwo)
    }

    compareCompleted = (taskOne, taskTwo) => {
        if (taskOne.completed < taskTwo.completed) {
            return 1;
        } else if(taskOne.completed > taskTwo.completed) {
            return -1
        }
        return this.compareId(taskOne, taskTwo)
    }

    compareDueDate = (taskOne, taskTwo) => {
        if (taskOne.due < taskTwo.due) {
            return -1;
        } else if(taskOne.due > taskTwo.due) {
            return 1;
        }
        return this.compareId(taskOne, taskTwo)
    }

    render() {
        return (
            <div>
                <button onClick = {this.showMenu}>
                    Sort
                </button>

                {
                    this.state.showMenu 
                        ? (
                            <div className = "sortBy">
                                <button onClick = {() => this.props.sortTasks(this.compareStarred)}>Starred</button>
                                <button onClick = {() => this.props.sortTasks(this.compareDueDate)}>Due Date</button>
                                <button onClick = {() => this.props.sortTasks(this.compareCompleted)}>Completed</button>
                                <button onClick = {() => this.props.sortTasks(this.compareId)}>Creation Date</button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

//CS2100
// CS2040S
// MA1101R

export default SortBar