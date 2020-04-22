import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Content from './components/Content';
import Footer from './components/Footer'
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Sidebar from './components/Sidebar';
import React from 'react';
import Stats from './components/Stats';
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
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
       </Router>
       <Footer />
    </div>
  );
}

export default App;
