import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Tasks from './components/tasks/TasksList'
import NewTask from './components/tasks/NewTask'
import SingleTask from './components/tasks/SingleTask'

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Tasks />
      </Route>
      <Route 
        path="/tasks/new"
        exact
        component = {NewTask}
       />
      <Route
        path = "/tasks/:id"
        exact
        component = {SingleTask}
       />
    </Switch>
  );
}