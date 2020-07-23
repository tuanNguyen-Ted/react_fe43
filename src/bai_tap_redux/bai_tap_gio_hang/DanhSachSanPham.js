import React, { Component } from 'react'
import SanPham from './SanPham'
import { connect } from 'react-redux'
export class DanhSachSanPham extends Component {



    renderSanPham = () => {
        // Lấy props từ component cha là mangSanPham ra các component card
        return this.props.mangSanPham.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPham sanPham={sanPham} />
            </div>
        });
    }



    render() {
        const propChiTiet = this.props.spChiTiet;

        return (
            <div>
                <h3>Danh Sách Sản Phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row pt-5">
                    <div className="col-4">
                        <h3 className="text-center">{propChiTiet.tenSP}</h3>
                        {/* eslint-disable-next-line*/}
                        <img height={350} src={propChiTiet.hinhAnh}></img>
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{propChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{propChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{propChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{propChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{propChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{propChiTiet.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        )
    }
}


// Đây là hàm lấy state từ redux chuyển thành props của component
const mapStateToProps = (state) => {//state là rootReducer
    return {
        spChiTiet: state.stateBaiTapGioHang.spChiTiet
    }
}

export default connect(mapStateToProps)(DanhSachSanPham)