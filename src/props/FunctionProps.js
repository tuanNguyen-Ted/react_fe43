import React from 'react'

export default function FunctionProps(props) {
    const { src, name, size, index } = props.pic;
    return (
        <div>
            <h2>Stateless Component</h2>
            <div className="card text-left">
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
