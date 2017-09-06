import React, { Component } from 'react';

export var RenderSubject = React.createClass({

    render: function () {
            return <span className='subject'>{this.props.subject}</span>
    },
})