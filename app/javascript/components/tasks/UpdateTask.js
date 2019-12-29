import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class UpdateTask extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        description: '',
      }
    }
  
    componentDidMount() {
      const { match: { params: { id } } } = this.props;
      fetch(`/api/v1/tasks/${id}`).
        then((response) => response.json()).
        then((task) => this.setState({ ...task }));
    }
  
    handleInputChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    updateTaskRequest = (event) => {
      fetch(`/api/v1/tasks/${this.state.id}`, {
        method: 'put',
        body: JSON.stringify(this.state),
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        alert('Task updated successfully');
        location.href = '/';
      });
    }
  
    render() {
      const {title, description, is_published} = this.state;
      return (
        <div>
          <h3>New Task</h3>
          <div>
            <label>Title: </label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={this.handleInputChange}
              />
          </div>
          <div>
            <label>Description: </label>
            <input
              type='text'
              name='description'
              value={description}
              onChange={this.handleInputChange}
              />
          </div>
          <button onClick={this.updateTaskRequest}>Update</button>
        </div>
      );
    }
  }