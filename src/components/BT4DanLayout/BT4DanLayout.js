import React, { Component } from 'react'
import styleCSS from './BT4Layout.module.css'
export default class BT4DanLayout extends Component {
    state = {
        srcImg: null,
        tittle: 'Choose glass',
        price: '???',
        desc: 'Light pink square lenses define these sunglasses, ending with another of pearl effect tip. '
    }
    showGlasses = (id) => {
        let arrProduct = [
            { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ' },
            { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ' },
            { id: 3, price: 70, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ' },
            { id: 4, price: 10, name: 'DIOR D6005U', url: './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ' },
            { id: 5, price: 60, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ' },
            { id: 6, price: 80, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ' },
            { id: 7, price: 90, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ' },
            { id: 8, price: 100, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ' },
            { id: 9, price: 20, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ' },
        ];
        arrProduct.forEach(element => {
            if (element.id === id) {
                let newState = {
                    srcImg: element.url,
                    tittle: element.name,
                    price: element.price,
                    desc: element.desc
                }
                return this.setState(newState);
            }
        });

    }
    render() {
        return (
            <div className={`${styleCSS.model__setAll} container `}>
                <h3 className="py-5">Virtual Glasses</h3>
                <div className="row">
                    <div className="col-6 my-auto">
                        <div className="row py-3">
                            <div className={`${styleCSS.cursor} col-4`}><img className="w-75" src="./img/v1.png" alt="" onClick={() => {
                                this.showGlasses(1);
                            }} /></div>
                            <div className={`${styleCSS.cursor} col-4`}><img className="w-75" src="./img/v2.png" alt="" onClick={() => {
                                this.showGlasses(2);
                            }} /></div>
                            <div className={`${styleCSS.cursor} col-4`}><img className="w-75" src="./img/v3.png" alt="" onClick={() => {
                                this.showGlasses(3);
                            }} /></div>
                        </div>
                        <div className="row py-3">
                            <div className={`${styleCSS.cursor} col-4`}><img className="w-75" src="./img/v4.png" alt="" onClick={() => {
                                this.showGlasses(4);
                            }} /></div>
                            <div className={`${styleCSS.cursor} col-4`}><img className="w-75" src="./img/v5.png" alt="" onClick={() => {
                                this.showGlasses(5);
                            }} /></div>
                            <div className={`${styleCSS.cursor} col-4`}><img className="w-75" src="./img/v6.png" alt="" onClick={() => {
                                this.showGlasses(6);
                            }} /></div>
                        </div>
                        <div className="row py-3">
                            <div className={`${styleCSS.cursor} col-4`}><img className="w-75" src="./img/v7.png" alt="" onClick={() => {
                                this.showGlasses(7);
                            }} /></div>
                            <div className={`${styleCSS.cursor} col-4`}><img className="w-75" src="./img/v8.png" alt="" onClick={() => {
                                this.showGlasses(8);
                            }} /></div>
                            <div className={`${styleCSS.cursor} col-4`}><img className="w-75" src="./img/v9.png" alt="" onClick={() => {
                                this.showGlasses(9);
                            }} /></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={`${styleCSS.model__img}`}>
                            <img src="./img/model.jpg" alt=""></img>
                            {this.state.srcImg != null ? <div>
                                <img className={`${styleCSS.model__glasses}`} src={`${this.state.srcImg}`} alt=""></img>
                                <div className={`${styleCSS.model__content}`}>
                                    <div className="py-3">
                                        <h3>{`${this.state.tittle}`}</h3>
                                        <span className="btn-danger p-1 rounded">${`${this.state.price}`}</span> <span className="text-success">Stocking</span>
                                    </div>
                                    <p className="m-0">{`${this.state.desc}`}</p>
                                </div>
                            </div> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
