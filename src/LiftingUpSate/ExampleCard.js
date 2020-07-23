import React, { Component } from 'react'
import data from "./data.json"
import ProductList from './ProductList';
import Card from './Card';
export default class ExampleCard extends Component {
    state = {
        cardList: [],
        productList: data,
        productSelected: null,
    };


    // Tăng giảm số lượng
    tangGiamSoLuong = (maSP, tangGiam) => {//Tăng là true giảm là false
        let cardListUpdate = [...this.state.cardList];

        // Tim ra san pham chua maSP = voi maSP nút tăng số lượng click
        let index = cardListUpdate.findIndex((item) => item.maSP === maSP);
        if (index !== -1) {
            if (tangGiam)
                cardListUpdate[index].soLuong += 1;
            else {
                if (cardListUpdate[index].soLuong > 1)
                    cardListUpdate[index].soLuong -= 1;
                else
                    alert("Số lượng tối thiếu 1");
            }
        }
        // setState làm thay đổi số lượng
        this.setState({ cardList: cardListUpdate })
    }


    handleDeleteCardProduct = (card) => {
        //1. Tìm vị trí
        let cardListUpdate = [...this.state.cardList]
        let index = cardListUpdate.findIndex((item) => item.maSP === card.maSP)
        if (index >= 0) {
            //2. Cắt ra khỏi mãng
            cardListUpdate.splice(index, 1);
            //3. lưu lại mãng
            this.setState({ cardList: cardListUpdate });
        }
    }

    // Tạo giỏ hàng
    handleBuy = (card) => {
        // Tạo danh sách chứa card mới
        let cardListUpdate = [...this.state.cardList]

        // tìm vị trí phần từ trong mảng
        let index = cardListUpdate.findIndex((item) => item.maSP === card.maSP);

        if (index >= 0) {
            // tìm thấy
            cardListUpdate[index].soLuong += 1;
        } else {
            card.soLuong = 1;
            cardListUpdate = [...this.state.cardList, card];
        }

        this.setState({
            cardList: cardListUpdate
        });
    };
    handleSelectProduct = (product) => {
        this.setState({
            productSelected: product
        });
    };
    render() {
        return (
            <div>
                <div className="container">
                    <Card tangGiamSoLuong={this.tangGiamSoLuong} cardList={this.state.cardList} handleDeleteCardProduct={this.handleDeleteCardProduct} />
                    <ProductList
                        productList={this.state.productList}
                        handleSelectProduct={this.handleSelectProduct}
                        handleBuy={this.handleBuy}
                        productSelected={this.state.productSelected} />

                </div>
            </div>

        )
    }
}
