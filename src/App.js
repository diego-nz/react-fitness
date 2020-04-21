import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from './pages/Exercises';
import ExercisesNew from './pages/ExercisesNew';
import NotFound404 from './pages/NotFound404';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/exercise' component={Exercises} />
        <Route exact path='/exercise/new' component={ExercisesNew} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  )
}
