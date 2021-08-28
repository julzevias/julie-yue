import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/Signin';
 
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/Signin' component={SigninPage} exact />
 
      </Switch>
      
    </Router>
    
  );
}
 
export default App;
