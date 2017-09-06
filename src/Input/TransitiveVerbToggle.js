import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';


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
        // color: '#F44336'
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
    labelStyleToggled: {
        color: '#00BCD4',
    },
    
    labelStyle: {
        color: 'red',
    },
};


export var TransitiveVerbToggle = React.createClass({
    getInitialState: function () {
        return {
            toggled: true,
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
        this.props.handleTransitiveVerbToggle(); //хэндлер, меняющий состояние родителя
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
                    <Toggle
                        onToggle={this.toggleHandler}
                        label={this.state.toggled ? "Transitive Verb" : "Intransitive Verb"}
                        defaultToggled={true}
                        labelPosition="right"
                        labelStyle={this.state.toggled ? styles.labelStyleToggled : styles.labelStyle}
                        style={styles.toggle}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
})

