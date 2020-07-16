import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps';
export default class DemoProps extends Component {
    render() {
        const pic2k = {
            src: "https://picsum.photos/2160/2160",
            name: "Picsum2k",
            size: "2160x2160",
            index: 1
        };

        const picHD = {
            src: "https://picsum.photos/1080/960",
            name: "PicsumHD",
            size: "1080x960",
            index: 2
        }

        return (
            <div>
                <h1 className="text-center">Demo Props</h1>
                {/* Truyền props image cho component ClassProps */}
                <ClassProps pic={pic2k} />
                <br/>
                <FunctionProps pic={picHD}/>
            </div>
        )
    }
}
