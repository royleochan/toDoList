import React from 'react'

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    handleCheckboxChange = () => {
        //parent tasksList component props
        var task = this.props.taskDetails;
        if (!this.state.checked) {
            fetch(`/api/v1/tasks/${task.id}`, {
                method: 'put',
                body: JSON.stringify({
                    title: `${task.title}`,
                    description: `${task.description}`,
                    completed: true
                }),
                headers: { 'Content-Type': 'application/json' },
            }).then((response) => {
                console.log(task.completed);
                this.setState({
                    checked: !this.state.checked
                });
            });
        } else {
            fetch(`/api/v1/tasks/${task.id}`, {
                method: 'put',
                body: JSON.stringify({
                    title: `${task.title}`,
                    description: `${task.description}`,
                    completed: false
                }),
                headers: { 'Content-Type': 'application/json' },
            }).then((response) => {
                this.setState({
                    checked: !this.state.checked
                });
            });
        }
    }

    render() {
        return (
            <div>
            <label>
                <input
                    type = "checkbox"
                    checked = {this.state.checked}
                    onChange = {this.handleCheckboxChange}
                />
            </label>
            </div>    
        )
    }
}

export default CheckBox