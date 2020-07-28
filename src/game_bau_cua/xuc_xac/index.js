import React, { Component } from 'react'
import { connect } from 'react-redux'
class XucXac extends Component {
    renderDices = (list) => {
        return list.map((item, index) => {
            return <div className={`bau-cua__xoay bau-cua__xoay--${index + 1}`} key={index}>
                <img src={item.imgSrc} alt="hinhanh" />
            </div>
        })
    }

    render() {
        const { dices } = this.props
        return (
            <div className="bau-cua__do w-100 h-100">
                <img src="./img/dia.png" alt="hinh" className="w-100 h-100" />
                {this.renderDices(dices)}
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        dices: state.GameBauCuaReducer.dices,
    }
}
export default connect(mapStateToProps, null)(XucXac);