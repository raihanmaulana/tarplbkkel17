import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import { Home, LandingPage, AboutMe, HalamanUtama, Sukses, AboutApp } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavbarComponent />
          <main>
            <Switch>
              <Route  path="/" component={LandingPage} exact/>
              <Route  path="/home" component={Home} exact/>
              <Route  path="/aboutme" component={AboutMe} exact/>
              <Route  path="/sukses" component={Sukses} exact/>
              <Route  path="/aboutapp" component={AboutApp} exact/>
              <Route  path="/halamanutama" component={HalamanUtama} exact/>

            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}
