import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './screens/Home'
import Users from './screens/Users'
import EditUser from './screens/EditUser'
import { NotFound } from './screens/NotFound';


export const App = () => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/editar/:id" component={EditUser}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}