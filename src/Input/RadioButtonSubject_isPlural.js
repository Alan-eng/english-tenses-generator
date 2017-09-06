import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

export var RadioButtonSubject_isPlural = React.createClass({

    makeDisabled: function () {
        var pronouns = ['i','we','you','he','she','it','they']
        var subject = this.props.subject.toLowerCase()
        if (pronouns.indexOf(subject) > -1) {
            return true
        }
        return false
    },


    // defaultSelected: function () {
    //     if (this.props.subject.toLowerCase() === 'i' ) {
    //         console.log('вариант с I ')
    //         this.makeDisabled()
    //         return 'single'}
    //     console.log('отрабатывает перерисовка')
    //     return ''
    // },

// чтобы отрабатывал defaultSelected={this.defaultSelected()} пришлось вводить state, иначе React его не перерисовывал

    render: function () {
        return (
            <MuiThemeProvider>
                <RadioButtonGroup name="shipSpeed" defaultSelected="single" onChange={(e) => this.props.handleSearchSubjectIsSingle()}>
                    <RadioButton
                        value="single"
                        label="singular"
                        style={styles.radioButton}
                        disabled={this.makeDisabled()}
                        
                    />
                    <RadioButton
                        value="plural"
                        label="plural"
                        style={styles.radioButton}
                        disabled={this.makeDisabled()}
                        
                    />
                </RadioButtonGroup>
            </MuiThemeProvider>
        )
    }
})

