import React, { Component } from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import CarDetail from './CarDeatail/CarDetail'

export const ClickedContext = React.createContext(false)

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/" 
                exact 
                activeClassName={'wfm-active'}
              >
                Home
                </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{
                color: 'blue'
              }}>About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars',
                // search: '?a=1&b=2',
                // hash: 'wfm-hash'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>
        <hr/>
        <Switch>     
          <Route path='/' exact render={() => <h1>Home page</h1>} />
          <Route path='/about' component={About} />
          <Route path='/cars/:name' component={CarDetail} />
          <Route path='/cars' component={Cars} />
          <Redirect to={'/'} />
          {/* <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} /> */}
        </Switch>      
      </div>
    );
  }
}

export default App
