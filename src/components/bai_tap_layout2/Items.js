import React, { Component } from 'react'
import Item from './Item'

export default class Items extends Component {
    render() {
        return (
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Item/>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Item/>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Item/>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Item/>
                </div>
            </div>
        )
    }
}
