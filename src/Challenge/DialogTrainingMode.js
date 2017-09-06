import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
const styles = {
    block: {
        maxWidth: 250,
        margin: 0,
        padding: 0,
        // transform: 'rotate(30deg)',
    },
    toggle: {
        // marginBottom: 16,
        // transform: 'rotate(90deg)',
    },
    thumbOff: {
        backgroundColor: '#ffcccc',
    },
    trackOff: {
        backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
        backgroundColor: 'red',
    },
    trackSwitched: {
        backgroundColor: '#ff9d9d',
    },
    labelStyle: {
        color: 'red',
    },
};


export var DialogTrainingMode = React.createClass({
    getInitialState: function () {
        return ({
            readyToOpen: true
        })
    },

    onClickHandler: function () {
        this.setState({
            readyToOpen: !this.state.readyToOpen
        })
    },
    componentWillReceiveProps: function (nextProps) { //без этого метода - state.readyToOpen поменять невозможно, т.к. кнопка в этом самом модальном окне
        if (this.props.open !== nextProps.open) { //чтобы не реагировало на каждую перерисовку в родителе, а только на toggle
            console.log(nextProps.open)
            this.setState({
                readyToOpen: true
            })
        }
    },

    render: function () {
        const actions = [
            // <FlatButton
            //     label="Cancel"
            //     primary={true}
            //     onClick={this.props.toggleHandler}
            // />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.onClickHandler}
            />,
        ];
        return (
            <MuiThemeProvider>
                <div>
                    <Dialog
                        title="Training Mode"
                        actions={actions}
                        modal={true}
                        open={this.state.readyToOpen == true && this.props.open == true}
                    >
                        In training mode you have to type answers in blank Table Cells.
                    </Dialog>
                </div>
            </MuiThemeProvider>
        )
    }
})

