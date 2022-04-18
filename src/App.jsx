import React from 'react'
import Login from './components/Login/Login'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'

export default function App() {
  return (
    <>
      <Switch>
        {/* <Login /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </>
  )
}
