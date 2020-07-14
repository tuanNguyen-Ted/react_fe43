import React, { Component } from 'react'
import BT3Sidebar from './BT3Sidebar'
import BT3Carousel from './BT3Carousel'
import BT3ProductList from './BT3ProductList'

export default class BT3Body extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <BT3Sidebar />
                    </div>
                    <div className="col-9">
                        <BT3Carousel />
                        <BT3ProductList/>
                    </div>
                </div>
            </div>
        )
    }
}
