import React, { Component } from 'react'
import { connect } from 'react-redux'
class SanPham extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div>
                <div className="card">
                    <img height={350} className="card-img-top" src={sanPham.hinhAnh} alt="asdsad" />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.giaBan.toLocaleString()} VNĐ</p>
                        <button className="btn btn-success mr-2" onClick={() => {
                            this.props.xemChiTiet(sanPham)
                        }}>Chi tiết</button>
                        <button type="button" className="btn btn-danger" onClick={() => {
                        }}>Mua</button>
                    </div>
                </div>
            </div>
        )
    }
}
// Hàm lấy giá trị callback từ store về
const mapDispatchToProps = (dispatch) => {
    return {
        xemChiTiet: (sanPham) => {//Định nghĩa 1 props cho component này là 1 hàm
            // Dùng hàm dispatch của redux đưa sản phẩm lên tất cả reducer
            // Dùng hàm dispatch trả ra để đưa dữ liệu lên user xử lý
            const action = {
                type: 'XEM_CHI_TIET', //Giá trị bắt buộc phải có
                sanPham
            }
            dispatch(action); // Gửi lên reducer
        }
    }
}
export default connect(null, mapDispatchToProps)(SanPham)