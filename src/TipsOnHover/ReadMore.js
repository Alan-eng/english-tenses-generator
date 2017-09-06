import React, { Component } from 'react';
//import {capitaliseFirstLetter} from './../../App';


export var ReadMore = React.createClass({

    render: function () {
        return (
            <div>
                <input type='checkbox' id='openVerbInfo' value='off' />
                <label htmlFor='openVerbInfo'>Подробнее</label>
                {/*<button htmlFor='openVerbInfo' className='verbInfoButton'>Подробнее</button>*/}
                <label htmlFor='openVerbInfo' className='verbInfo'>
                    <div>Инфинитив: {this.props.verb.infinitive} </div>
                    <div>Причастие:{this.props.verb.participle} </div>
                    <div>Причастие прошедш.:{this.props.verb.participleII} </div>
                </label>
            </div>)
    }
})