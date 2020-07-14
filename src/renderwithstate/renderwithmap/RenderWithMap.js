import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'Iphone2G', price: 1000 },
        { id: 2, name: 'Iphone3G', price: 2000 },
        { id: 3, name: 'Iphone4', price: 3000 },
        { id: 5, name: 'Iphone5', price: 4000 },
        { id: 6, name: 'Iphone6', price: 5000 },
        { id: 7, name: 'Iphone7', price: 6000 },
        { id: 8, name: 'Iphone8', price: 7000 },
    ]

    renderProductList = () => {
        return this.productList.map((productItem, index) => {
            return <tr key={index}>
                <td>{productItem.id}</td>
                <td>{productItem.name}</td>
                <td>{productItem.price}$</td>
                <td><button className="btn btn-danger">Xoá</button></td>
            </tr>
        })


        // Cách 1
        // let arrProductJSX = [];
        // for (let product of this.productList) {
        //     // Duyệt qua mảng
        //     let trProduct = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}$</td>
        //         <td><button className="btn btn-danger">Xoá</button></td>
        //     </tr>
        //     // Push vào mảng kết quả
        //     arrProductJSX.push(trProduct);
        // }
        // console.log(arrProductJSX);
        // return arrProductJSX; //[<tr>...</tr>, <tr>...</tr>,...]
    }


    render() {
        return (
            <div className="container">
                <h2 className="text-center p-3">Product List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProductList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
