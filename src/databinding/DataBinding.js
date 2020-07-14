import React, { Component } from 'react'
import styleDataBinding from './DataBinding.module.css'
export default class DataBinding extends Component {
    // Thuộc tính
    sanPham = {
        ma: 1,
        tenSP: "Iphone X",
        gia: 1000,
        hinhAnh: `https://picsum.photos/1200/800`
    }

    // Phương thức
    renderThongTin = () => {
        return (
            <div className="w-25">
                <div className="card">
                    <img className="card-img-top" src={this.sanPham.hinhAnh} alt={this.sanPham.tenSP} />
                    <div className="card-body">
                        <h4 className="card-title">{this.sanPham.tenSP}</h4>
                        <p className="card-text">{this.sanPham.gia}</p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let title = "CYBERSOFT";
        let srcImg = `https://picsum.photos/1400/900`;
        let hocVien = {
            ma: 1,
            hoTen: "Nguyễn Văn A",
            tuoi: 18
        };
        const renderImg = () => {
            // return ve component (jsx)
            return (
                <div>
                    <h5>return</h5>
                </div>);
        }

        return (
            <div className="container-fluid">
                {this.renderThongTin()}
                <h1 id="title">{title}</h1>
                <div className="card w-25">
                    <img className="card-img-top" src={srcImg} alt={srcImg} />
                    <div className="card-body">
                        <h4 className={`${styleDataBinding.header} card-title`}>{hocVien.hoTen}</h4>
                        <p className="card-text">{hocVien.tuoi}</p>
                    </div>
                </div>
                <div className="container">
                    {renderImg()}
                </div>

            </div>
        )
    }
}
