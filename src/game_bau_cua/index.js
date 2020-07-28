import React, { Component } from 'react'
import "./style.css";
import DanhSachCuoc from './danh_sach_cuoc';
import XucXac from './xuc_xac';
import { connect } from 'react-redux';
class GameBauCua extends Component {
    render() {
        const { totalMoney } = this.props;
        return (
            <div className="bau-cua">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="bau-cua__tien font-weight-bold">Tổng Tiền : {totalMoney}$</div>
                        <h2 className="text-center text-danger">Bầu Cua</h2>
                        <div><button className="btn btn-info">Chơi Game</button></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-7">
                            <DanhSachCuoc />
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <XucXac />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        // Key la props cua component
        // Value la state cua store duoc luu tren reducer
        // Key : value
        totalMoney: state.GameBauCuaReducer.totalMoney,
    }
}
export default connect(mapStateToProps, null)(GameBauCua)