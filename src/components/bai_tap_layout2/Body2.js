import React, { Component } from 'react'
import Banner from './Banner'
import Items from './items'

export default class Body2 extends Component {
    render() {
        return (
            <div className="container">
                <Banner/>
                <Items/>
            </div>
        )
    }
}
