import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Blogs from './Blogs';
import '../App.css'


export default class Header extends Component {

    render() {
        return (
            <Router>
                <div className='headerContainer'>
                     <nav className='header'>
                          <img className='logo' src='./not.png' />
                            <h2 className='myName'> Mphumeleli E. Ntetha </h2>
                                <ul className='navLink'>
                                    <Link to='/'>
                                        <li> Home </li>
                                    </Link>
                                    <Link to='/blogs'>
                                        <li> Blogs </li>
                                    </Link>
                                    <Link to='services'>
                                        <li> Services </li>
                                    </Link>
                                    <Link to='about'>
                                        <li> About </li>
                                    </Link>
                                    <Link to='contact'>
                                        <li> Contact </li>
                                    </Link>
                                </ul>
                            <input className='searchBar' type='text' placeholder='Search...' />
                     </nav>
                </div>
            </Router>
        )
    }
}