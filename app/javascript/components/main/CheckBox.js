import React from 'react'

import '../stylesheets/myStyles.css'

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    componentDidMount() {
        const task = this.props.taskDetails;
        this.setState({
            checked: task.completed,
        })
    }

    handleCheckboxChange = () => {
        //props from parent component TaskRow
        const task = this.props.taskDetails;

        //change task completion accordingly
        if (this.state.checked == false) {
            fetch(`/api/v1/tasks/${task.id}`, {
                method: 'put',
                body: JSON.stringify({
                    completed: true,
                }),
                headers: { 'Content-Type': 'application/json' },
            }).then((response) => {
                //handle strikeThrough
                this.props.handler();
                this.setState({
                    checked: !this.state.checked
                });
            });
        } else {
            fetch(`/api/v1/tasks/${task.id}`, {
                method: 'put',
                body: JSON.stringify({
                    completed: false,
                }),
                headers: { 'Content-Type': 'application/json' },
            }).then((response) => {
                //handle strikeThrough
                this.props.handler();
                this.setState({
                    checked: !this.state.checked
                });
            });
        }
    }

    render() {
        return (
            <div>
                <input
                    type = "checkbox"
                    checked = {this.state.checked}
                    onChange = {this.handleCheckboxChange}
                    autoComplete = "off"
                    className = "checkBox"
                />
            </div>
        )
    }
}

export default CheckBox