import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        const { src, name, index, size } = this.props.pic
        return (
            <div>
                <h2>Stateful Component</h2>
                <div className="card text-left">
                    {/* Nhập Props image từ component */}
                    <img className="card-img-top" src={src} alt="" style={{ width: "100px", height: "100px" }} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{size}</p>
                        <p className="card-text">{index}</p>
                    </div>
                </div>
            </div>
        )
    }
}
