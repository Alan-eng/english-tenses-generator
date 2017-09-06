import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { QuestionWordDropdown } from './QuestionWordDropdown'

// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
    block: {
        maxWidth: '100%',
        // backgroundColor: 'red',
        // display: 'flex',
        flexWrap: 'wrap',
        //  textAlign: 'center',
        // justifyContent: 'center',
        // margin: 'auto'
    },
    radioButton: {
        marginBottom: 16,
        // width: '20%'
        // display: 'flex',
        // position: 'static',
        // backgroundColor: 'blue',


    },
};

export var RadioButtonAssertionNegationQuestion = React.createClass({
    getInitialState: function () {
        return {
            isQuestion: false,
        }
    },


    // handleValueSelected: function () {
    //     this.setState({
    //         selectedOption: true
    //     })
    // },
    // makeDisabled: function () {
    //     var pronouns = ['i','we','you','he','she','it','they']
    //     var subject = this.props.subject.toLowerCase()
    //     if (pronouns.indexOf(subject) > -1) {
    //         return true
    //     }
    //     return false
    // },


    // defaultSelected: function () {
    //     if (this.props.subject.toLowerCase() === 'i' ) {
    //         console.log('вариант с I ')
    //         this.makeDisabled()
    //         return 'single'}
    //     console.log('отрабатывает перерисовка')
    //     return ''
    // },

    // чтобы отрабатывал defaultSelected={this.defaultSelected()} пришлось вводить state, иначе React его не перерисовывал


    handleOptionChange: function (changeEvent) {
        this.props.handleTypeOfSentence(changeEvent.target.value)
        this.props.handleQuestionWord("general") // функция меняющаяя состояние родителя


        if (changeEvent.target.value === 'question')
            this.setState({
                isQuestion: true
            });
        else {
            this.setState({
                isQuestion: false
            });
        }
    },

    // onChange всегда вызывается не со скобками!!! внимательно!
    render: function () {
        return (
            <div style={{ textAlign: 'center'}}>
                <h1>Choose type of sentence: </h1>
                <MuiThemeProvider >
                    <div style={{ display: 'inline-block', width: 200 }}>
                        <RadioButtonGroup name="typeOfSentence" defaultSelected="assertion" onChange={this.handleOptionChange} >
                            <RadioButton
                            style={{ marginBottom: 16 }}
                                value="assertion"
                                label="Assertion"

                            />
                            <RadioButton
                            style={{ marginBottom: 16 }}
                                value="negation"
                                label="Negation"

                            />
                            <RadioButton
                            
                                value="question"
                                label="Question"

                            />
                        </RadioButtonGroup>
                    </div>
                </MuiThemeProvider>
                <QuestionWordDropdown disabled={!this.state.isQuestion} handleQuestionWord={this.props.handleQuestionWord} appState={this.props.appState} />
            </div>
        )
    }
})

