import React from 'react'

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    //decides if checkbox is checked after page refresh
    // componentDidMount() {

    // }

    handleCheckboxChange = () => {
        //props from parent component TaskRow
        const task = this.props.taskDetails;

        //use webstorage for persistent checkbox

        //change task completion accordingly
        if (!this.state.checked) {
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
                <div>
                    <input
                        type = "checkbox"
                        id = "checkbox"
                        checked = {this.state.checked}
                        onChange = {this.handleCheckboxChange}
                        autoComplete = "off"
                    />
                    <label htmlFor = "checkbox"></label>
                </div>    
            </div>
        )
    }
}

export default CheckBox