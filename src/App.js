import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import Navbar from './components/Navbar/index'
import ContactForm from './pages/contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={ContactForm} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
