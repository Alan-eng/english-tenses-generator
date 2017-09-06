import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

// Сказуемым (The Predicate) называется член предложения, обозначающий то, что говорится о подлежащем. Сказуемое отвечает на вопросы: что делает подлежащее? что делается с подлежащим? кто, что он/она/оно такое?

// Сказуемое бывает двух видов - простым и составным. В ближайших уроках мы рассмотрим простое сказуемое, а о составных сказуемых поговорим позже. Просто запомните, что простое сказуемое выражается глаголом в личной форме в любом времени, залоге и наклонении.



export var InputPredicate = React.createClass({
    getInitialState: function () {
        return {
            value: 'read',
            isCyrillic: false
        }
    },

    onChangeHandle: function (e) {
        this.setState(
            {
                value: e.target.value
            }
        )
    },

    isCyrillic: function (e) {
        var text = e.target.value
        // this.props.handleSearch(text);
        if (/[а-я]/i.test(text)) {
            this.props.handleSearchPredicate(text.slice(0, -1)); // функция handleSearchPredicate передана из родителя и меняет состояние родителя (App), к тому же эта функция, которая находится в родителе (App) проверяет глагол на правильность/неправильность
            this.setState({
                value: text.slice(0, -1),
                isCyrillic: true,
            })
        } else {
            this.props.handleSearchPredicate(text);
            this.setState({
                value: text,
                isCyrillic: false,
            })
        }
    },

    render: function () {
        return (
            <MuiThemeProvider>
                <TextField style={{ fontSize: '30px', padding: '0.5em', width: 250 }} hintStyle={{ fontSize: '20px' }}  errorStyle={{ fontSize: '20px', paddingTop: '1em'}}
                    onChange={this.isCyrillic}
                    floatingLabelText="Predicate (infinitive)"
                    floatingLabelStyle={{fontSize: '28px', marginTop: '-0.8em', lineHeight: '1em'}}
                    errorText={this.state.isCyrillic ? 'only latin letters' : ''}
                    value={this.state.value}
                />
            </MuiThemeProvider>
        )
    }
})

