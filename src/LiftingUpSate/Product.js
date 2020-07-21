import React from 'react'

export default function Product(props) {
    const { item, handleSelectProduct, handleBuy } = props;
    return (
        <div className="card">
            <img className="card-img-top" src={item.hinhAnh} alt="asdsad" />
            <div className="card-body">
                <h4 className="card-title">{item.tenSP}</h4>
                <button className="btn btn-success" onClick={() => {
                    console.log(1);
                    handleSelectProduct(item);
                }}>Chi tiết</button>
                <button type="button" className="btn btn-danger" onClick={() => {
                    handleBuy(item);
                }}>Mua</button>
            </div>
        </div>
    )
}
