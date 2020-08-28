import React, { Component } from 'react'
import List from './data' // Data taken from the external file

export default class Stats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            List, 
            value: 'Anything',
        }
    }

    onDelete = (id) => {
        const updatedList = this.state.List.filter(item => item.objectID !== id)
        this.setState({ List: updatedList })
    }

    render() {

        const { value } = this.state

        return (
            <div className='statContainer'>
                { this.state.List.map(item => {
                   return (
                       <div className='product' key={item.objectID}>
                             <img src={ item.url } className='foodImg' />

                             <div className='productDetails'> 
                                <h2> {item.name} </h2>
                                <p> {item.description} </p>
                                <p className='price'> Price: R{item.price} </p>
                                <button onClick={(item) => this.onDelete(item.objectID)} type='button' className='btn'> View </button>
                                <button onClick={(item) => this.onDelete(item.objectID)} type='button' className='btn'> Order </button>
                              </div>
                        </div>
                        )
                    }) }
            </div>
        )
    }
}