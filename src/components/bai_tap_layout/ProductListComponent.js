import React, { Component } from 'react'
import ProductComponent from './ProductComponent'

export default class ProductListComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                    <h1 className="text-dark text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <div className="col-3">
                            <ProductComponent />
                        </div>
                        <div className="col-3">
                            <ProductComponent />
                        </div>
                        <div className="col-3">
                            <ProductComponent />
                        </div>
                        <div className="col-3">
                            <ProductComponent />
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
