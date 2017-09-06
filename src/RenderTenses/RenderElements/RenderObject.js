import React, { Component } from 'react';

export var RenderObject = React.createClass({

    render: function () {
        if (this.props.appState.addObject === true && this.props.appState.transitiveVerb === true ) {
            return <span className='object'>{this.props.appState.object}</span>
        }
        return null
    },
})