import React, { Component } from 'react'
import BT3ProductItem from './BT3ProductItem'

export default class BT3ProductList extends Component {
    render() {
        return (
            <div className="row">
                <div class="col-lg-4 col-md-6 mb-4"><BT3ProductItem /></div>
                <div class="col-lg-4 col-md-6 mb-4"><BT3ProductItem /></div>
                <div class="col-lg-4 col-md-6 mb-4"><BT3ProductItem /></div>
                <div class="col-lg-4 col-md-6 mb-4"><BT3ProductItem /></div>
                <div class="col-lg-4 col-md-6 mb-4"><BT3ProductItem /></div>
                <div class="col-lg-4 col-md-6 mb-4"><BT3ProductItem /></div>
            </div>
        )
    }
}
