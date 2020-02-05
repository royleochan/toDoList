import React from 'react'

import '../stylesheets/myStyles.css'

class Starred extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            checked: false
        };
    }

    componentDidMount() {
        const task = this.props.taskDetails;
        this.setState({
            checked: task.starred,
        })
    }

    handleChange = () => {
        //props from parent component TaskRow
        const task = this.props.taskDetails;

        if (!this.state.checked) {
            fetch(`/api/v1/tasks/${task.id}`, {
                method: 'put',
                body: JSON.stringify({
                    starred: true,
                }),
                headers: { 'Content-Type': 'application/json' },
            }).then((response) => {
                this.setState({
                    checked: !this.state.checked
                });
            });
        } else {
            fetch(`/api/v1/tasks/${task.id}`, {
                method: 'put',
                body: JSON.stringify({
                    starred: false,
                }),
                headers: { 'Content-Type': 'application/json' },
            }).then((response) => {
                this.setState({
                    checked: !this.state.checked
                });
            });
        }

        this.props.fetch();
    }

    render() {
        return (
            <div>
                <input type = 'checkbox' 
                        className = 'star'
                        checked = {this.state.checked}
                        onChange = {this.handleChange}/>
            </div>
        )
    }
}

export default Starred

