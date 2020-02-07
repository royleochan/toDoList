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
        return 0;
    }

    compareCompleted = (taskOne, taskTwo) => {
        if (taskOne.completed < taskTwo.completed) {
            return 1;
        } else if(taskOne.completed > taskTwo.completed) {
            return -1
        }
        return 0;
    }

    compareDueDate = (taskOne, taskTwo) => {
        if (taskOne.due < taskTwo.due) {
            return -1;
        } else if(taskOne.due > taskTwo.due) {
            return 1;
        }
        return 0;
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
                                <button onClick = {() => this.props.setSort(this.compareStarred)}>Starred</button>
                                <button onClick = {() => this.props.setSort(this.compareDueDate)}>Due Date</button>
                                <button onClick = {() => this.props.setSort(this.compareCompleted)}>Completed</button>
                                <button onClick = {() => this.props.setSort(this.compareId)}>Creation Date</button>
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

export default SortBar