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
      alert('A task was created: ' + this.state.title);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <p>Task Title:</p>
            <input type="text" name="title" onChange={this.handleChange} />
            <p>Description:</p>
            <input type="text" name="description" onChange={this.handleChange} />
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default NewTask