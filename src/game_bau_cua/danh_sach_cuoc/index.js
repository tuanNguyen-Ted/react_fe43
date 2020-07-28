import React, { Component } from 'react'
import { connect } from 'react-redux';

class DanhSachCuoc extends Component {
    renderListBet = (list, setBet) => {
        return list.map((item, index) => {
            return <div className="card col-4" key={index}>
                <img className="card-img-top" src={item.imgSrc} alt="Card cap" style={{ height: 200 }} />
                <div className="card-body">
                    {/* <h5 className="card-title" /> */}
                    <div className="d-flex justify-content-around align-items-center">
                        <button className="btn btn-info" onClick={() => {
                            setBet(item.id, false);
                        }}>-</button>
                        <span>{item.bet}$</span>
                        <button className="btn btn-info" onClick={() => {
                            setBet(item.id, true);
                        }}>+</button>
                    </div>
                </div>
            </div>

        })
    }
    render() {
        const { listBet, setBet } = this.props;
        return (
            <div className="bau-cua__chon">
                <div className="bau-cua__bang row">
                    {this.renderListBet(listBet, setBet)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listBet: state.GameBauCuaReducer.listBet,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Key la props cua component: value la method send action den reducer
        setBet: (id, increaseDecrease) => {
            const action = {
                type: 'SET_BET',
                id: id,
                increaseDecrease: increaseDecrease,
            };
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);