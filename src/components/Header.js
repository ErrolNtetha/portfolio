import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import '../App.css'

function isSearched(searchTerm) {
    return function(item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase()) // Returns a bolean value
    }
}

export default class Header extends Component {
    constructor() {
        super()

        this.state = {
            searchTerm: '',
        }
    }

    onChangeHandler = (event) => {
        this.setState({ searchTerm: event.target.value })   
     } 

     onChangeStyle = (req, res) => {
             // Change color
     }

    render() {
        return (
            <div className='headerContainer'>
                <Router>
                    <nav className='header'>
                        <img className='logo' src='./not.png' />
                        <h2 className='myName'> Mphumeleli E. Ntetha </h2>
                        <ul className='navLink'  onClick={this.onChangeStyle}>
                            <li>Home</li>
                            <li>Blogs</li>
                            <li>Services</li>
                            <li>News</li>
                            <li>Contact</li>
                        </ul>
                        <input onChange={this.onChangeHandler} className='searchBar' type='text' placeholder='Search...' />
                    </nav>
                </Router>
            </div>
        )
    }
}