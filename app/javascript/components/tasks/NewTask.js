import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class NewTask extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: '', 
          description: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;        
      this.setState({[name]: value});
    }
  
    handleSubmit(event) {
      console.log('this.state', this.state);
      fetch ('/api/v1/tasks', {
        method: 'post',
        body: JSON.stringify(this.state),
        headers: { 'Content-Type': 'application/json'},
      }).then((response) => {
        alert('Task created successfully');
        location.href = '/';
      });
    }
  
    render() {
      return (
        <div>
          <h3>New Task</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Task Title:</label>
                <input 
                  type="text" 
                  name="title" 
                  onChange={this.handleChange}
                />
            </div>
            <div>
              <label>Description:</label>
                <input type="text" name="description" onChange={this.handleChange} />

            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }

export default NewTask