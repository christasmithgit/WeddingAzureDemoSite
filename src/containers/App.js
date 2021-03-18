import React, {Component} from 'react'
import './App.css';
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer'
import Main from '../containers/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import NotFound from '../components/NotFound';

class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="App">  
          <Switch>
            <Route exact path="/">
              <Hero/>
              <Footer/>
            </Route>
            <Route path="/invite/:id" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  };
}
  
export default App;
