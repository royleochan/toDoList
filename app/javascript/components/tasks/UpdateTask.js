import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class UpdateTask extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        description: '',
        due: ''
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
      const {title, description, due} = this.state;
      return (
        <div>
          <h3 className = 'subtitle'>Edit Task</h3>
          <div>
            <label>Title: </label>
            <input
              className = 'input-box'
              type='text'
              name='title'
              value={title}
              onChange={this.handleInputChange}
              />
          </div>
          <div>
            <label>Description: </label>
            <textarea
              className = 'description'
              type='text'
              name='description'
              value={description}
              onChange={this.handleInputChange}
              />
          </div>
          <div>
            <label>Due: </label>
            <input
              className = 'input-box'
              placeholder = "YYYY/MM/DD"
              type='text'
              name='due'
              value={due}
              onChange={this.handleInputChange}
              />
          </div>
          <button onClick={this.updateTaskRequest} className = 'button'>Update</button>
        </div>
      );
    }
  }