import React, { Component } from 'react'
import BT3Header from './BT3Header'
import BT3Body from './BT3Body'
import BT3Footer from './BT3Footer'

export default class BT3Layout extends Component {
    render() {
        return (
            <div>
                <BT3Header/>
                <BT3Body/>
                <BT3Footer/>
            </div>
        )
    }
}
