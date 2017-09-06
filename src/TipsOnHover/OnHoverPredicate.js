import React, { Component } from 'react';
//import {capitaliseFirstLetter} from './../../App';


export var OnHoverPredicate = React.createClass({

    render: function () {
        return (
        <div className='tip'>
             <div>Инфинитив: {this.props.verb.infinitive} </div>
            <div>{this.props.verb.participle} </div>
            <div>{this.props.verb.participleII} </div>
        </div>)
    }
})