import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import '../App.css';
import { FaPhone } from 'react-icons/fa';


export default class Header extends Component {
    state = {
        hidden: true,
    }

    toggleChange = () => {
        this.setState({ hidden: false ? true : false })
        console.log(`${this.state.hidden}`)
    }

    render() {
        return (
                <div className='headerContainer'>
                     <nav className='header'>
                          <img className='logo' alt="logo" src='./not.png' />
                            <h2 className='myName'> Mphumeleli Ntetha </h2>
                                <ul className='navLink'>
                                    <li className='nav'>  
                                        <Link to='/'> Home </Link>
                                    </li>
                                    <li className='nav'> 
                                        <Link to='/blogs'> Blog </Link>
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
                                <div className="cont">
                                    {/* {/* <p> 079 531 2272 <FaPhone /></p>  */}
                                    <Button variant="contained" onClick={this.toggleChange} color="primary" className="req"> Get Request </Button>
                                </div>
                     </nav>
                </div>
        )
    }
}