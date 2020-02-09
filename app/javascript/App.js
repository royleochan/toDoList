import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Routes from './Routes';
import '../assets/stylesheets/myStyles.css'
import home_icon from '../assets/images/home_icon.png'


export default class App extends React.Component {
  render() {
    console.log('app being mounted');
    return (
      <Router>
        <div className = 'navigator'>
          <Link to="/">
            <img src = {home_icon} className = "home"/>
          </Link>
          <br></br>
          <Link to="/tasks/new" className = "create">Create new task</Link>
          <h2 id = "header">To-DoNE</h2>
        </div>
        <Routes />
      </Router>
    );
  }
}
