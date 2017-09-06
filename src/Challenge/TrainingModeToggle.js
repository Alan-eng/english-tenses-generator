import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';
import { DialogTrainingMode } from './DialogTrainingMode'


// Подлежащее может выражаться: существительным, местоимением, числительным, инфинитивом и герундием (одной из неличных форм глагола, о которых мы будем говорить позже. Сейчас просто запомните это).
const styles = {
    block: {
        maxWidth: 250,
        marginTop: '0.2em',
        marginLeft: '0.3em',
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


export var TrainingModeToggle = React.createClass({
    getInitialState: function () {
        return {
            toggled: false,
        }
    },

    // onChangeHandle: function (e) {
    //     this.setState(
    //         {
    //             value: e.target.value
    //         }
    //     )
    // },

    toggleHandler: function () { // передали в компонент Dialog, чтобы можно было менять состояние из всплывающего окна
        // var i = this.state.toggled
        this.props.handleTrainingMode(); //хэндлер, меняющий состояние родителя
        this.setState(
            {
                toggled: !this.state.toggled
            }
        )
    },


    render: function () {
        return (
            <MuiThemeProvider>
                <div style={styles.block} >
                    <DialogTrainingMode open={this.state.toggled} />
                    <Toggle
                        onToggle={this.toggleHandler}
                        label="Training Mode"
                        labelPosition="right"
                        style={styles.toggle}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
})

