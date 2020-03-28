import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Body from './components/Body'
import Stats from './components/Stats';
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
