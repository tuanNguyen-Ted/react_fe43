import React, { Component } from 'react'

export default class Card extends Component {

    renderCardList = () => {
        const cardList = [...this.props.cardList]
        return cardList.map((item, index) => {
            return (<tr key={index}>
                <td>{index + 1}</td>
                <td>
                    <img src={item.hinhAnh} alt="asda" style={{ width: 100 }} />
                </td>
                <td>{item.tenSP}</td>
                <td>{item.giaBan.toLocaleString()}$</td>
                <td>
                    <button className="btn btn-info" onClick={() => {
                        this.props.tangGiamSoLuong(item.maSP, false)
                    }}
                    >-</button><span className="mx-2">{item.soLuong}</span>
                    <button className="btn btn-info" onClick={() => {
                        this.props.tangGiamSoLuong(item.maSP, true)
                    }}>+</button>
                </td>
                <td>{(item.giaBan * item.soLuong).toLocaleString()}$</td>
                <td><button className="btn btn-danger" onClick={() => {
                    this.props.handleDeleteCardProduct(item);
                }}>xóa</button></td>
            </tr>);
        })
    }
    tinhTongTien = () => {
        return this.props.cardList.reduce((tongTien, item, index) => {
            return tongTien += item.soLuong * item.giaBan;
        }, 0).toLocaleString();
    }
    render() {
        return (
            <div>
                <h2>Card</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Hình Ảnh</th>
                            <th>Tên sảm phẩm</th>
                            <th>Giá bán</th>
                            <th>số lượng</th>
                            <th>thành giá</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCardList()}
                    </tbody>
                    <tfoot>
                        <td colSpan="5"></td>
                        <td>Tổng tiền</td>
                        <td>{this.tinhTongTien()}$</td>
                    </tfoot>
                </table>
            </div>

        )
    }
}
