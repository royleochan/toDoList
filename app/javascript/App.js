import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Routes from './Routes';

export default class App extends React.Component {
  render() {
    console.log('app being mounted');
    return (
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasks/new">Create new task</Link>
          </li>
        </ul>
        <hr />
        </div>
        <Routes />
      </Router>
    );
  }
}
