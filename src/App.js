import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/portfolio" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
