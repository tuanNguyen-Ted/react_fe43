import React, { Component } from 'react'
import ProductComponent from './ProductComponent'

export default class ProductListComponent extends Component {
    state = {
        productList: [
            {
                image: "./img/sp_iphoneX.png",
                name: "iPhone X",
            },
            {
                image: "./img/sp_note7.png",
                name: "Note 7",
            },
            {
                image: "./img/sp_blackberry.png",
                name: "Blackberry",
            },
            {
                image: "./img/sp_vivo850.png",
                name: "Vivo850",
            },
        ]
    }

    renderList = () => {
        return this.state.productList.map((phone, index) => {
            return (<div className="col-3" key={index}>
                <ProductComponent phone={phone} />
            </div>);
        })
    }
    render() {

        return (
            <div className="container-fluid">
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                    <h1 className="text-dark text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        {this.renderList()}
                    </div>
                </section>

            </div>
        )
    }
}
