import React, { Component } from 'react'
import ProductListComponent from './ProductListComponent'

export default class BaiTapLayout extends Component {

    //   Noi dung duoc giao dien react chua trong lenh return cua phuong thuc render 
    render() {
        return (
            <div>
                <ProductListComponent/>
            </div>
        )
    }
}
