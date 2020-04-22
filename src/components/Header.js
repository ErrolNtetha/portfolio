import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Blogs from './Blogs';
import '../App.css'


export default class Header extends Component {
    render() {
        return (
                <div className='headerContainer'>
                     <nav className='header'>
                          <img className='logo' src='./not.png' />
                            <h2 className='myName'> Mphumeleli E. Ntetha </h2>
                                <ul className='navLink'>
                                    <li className='nav'>  
                                        <Link to='/'> Home </Link>
                                    </li>
                                    <li className='nav'> 
                                        <Link to='/blogs'> Blogs </Link>
                                    </li>
                                    <li className='nav'>
                                        <Link to='services'> Services </Link>
                                    </li>
                                    <li className='nav'> 
                                        <Link to='about'> About </Link>
                                    </li>
                                    <li className='nav'> 
                                        <Link to='contact'> Contact </Link>
                                    </li>
                                </ul>
                            <input className='searchBar' type='text' placeholder='Search...' />
                     </nav>
                </div>
        )
    }
}