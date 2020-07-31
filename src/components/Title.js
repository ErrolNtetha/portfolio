import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className='profile'>
                <img className='profilePicture' alt="myPic" src='./profile.jpg' />
                <h2 className='myTitle'> Mphumeleli Errol Ntetha </h2>
                <p className='about'> "Software Developer" </p>
            </div>
        )
    }
}
