import React, { Component } from 'react';

export var RenderAdverbialModifierOfPlace = React.createClass({

       render: function () {
        if (this.props.appState.addAdverbialModifierOfPlace === true) {
            return <span className='adverbialModifier'>{this.props.appState.adverbialModifierOfPlace}</span>
        }
        return null
    },
})