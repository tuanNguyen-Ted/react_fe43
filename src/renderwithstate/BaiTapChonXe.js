import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        src:    './img/black-car.jpg'
    }

    colorCar = (color) => {
        let newSate = {
            src: `./img/${color}-car.jpg`
        }
        this.setState(newSate);
    }
    render() {
        return (
            <div className="row container-fluid">
                <div className="col-6">
                    <h4>Please choose your favorite about car's color</h4>
                    <img className="w-100 pr-5" src={this.state.src} alt=""></img>
                </div>
                <div className="col-6">
                    <h4>Change Color</h4>
                    <div className=" row">
                        <div className="col-4">
                            <button onClick={() => {
                                this.colorCar('red');
                            }} className="btn btn-danger">RED</button>
                        </div>
                        <div onClick={() => {
                            this.colorCar('silver');
                        }} className="col-4">
                            <button className="btn btn-secondary">Silver</button>
                        </div>
                        <div onClick={() => {
                            this.colorCar('black');
                        }} className="col-4">
                            <button className="btn btn-dark">Black</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
