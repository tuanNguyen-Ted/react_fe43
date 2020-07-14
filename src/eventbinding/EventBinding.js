import React, { Component } from 'react'

export default class EventBinding extends Component {

    handleClick = () => {
        alert('HelloFE43');
    }

    showMessage = (message) => {
        alert('Hello '+message);
    }

    render() {
        return (
            <div>
                {/* Cách 1:  Truyền callback function xử lý sự kiện*/}
                <h3>Truyền callback function</h3>
                <button onClick={this.handleClick}>Click me!</button>
                <button onClick={this.showMessage.bind(this,'Cybersoft')}>Show Message</button>

                <br /><br />

                {/* Cách 2:  dùng arrow function*/}
                <h3>Truyền arrow function</h3>
                <button onClick={() => {
                    this.handleClick();
                }}>Click me!</button>

                <button onClick={() => {
                    this.showMessage('Cybersoft');
                }}>Show Message</button>
            </div>
        )
    }
}
