import React, { Component } from 'react'
import loadgif from '../assets/loading.gif';

export class Loading extends Component {
    render() {
        return (
            <div className="verticalcenter">
                <img src ={loadgif} className="w100"/>
            </div>
        )
    }
}

export default Loading
