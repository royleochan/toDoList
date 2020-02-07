import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Routes from './Routes';
import './components/stylesheets/myStyles.css'


export default class App extends React.Component {
  render() {
    console.log('app being mounted');
    return (
      <Router>
        <div className = 'navigator'>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/tasks/new">Create new task</Link>
          <h2 id = "header">To-DoNE</h2>
        </div>
        <Routes />
      </Router>
    );
  }
}
