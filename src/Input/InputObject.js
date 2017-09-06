import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

// Дополнением (The Object) называется второстепенный член предложения, который обозначает предмет и отвечает на вопросы, соответствующие в русском языке вопросам косвенных падежей как без предлога, так и с предлогом: whom? кого? what? что? to whom? кому? by whom? кем? about what? о чем? и т. д.
// Примечание: есть два вида падежей - прямой и косвенные.

// Прямой падеж - именительный (отвечает на вопрос кто? что?). Соответственно, родительный (кого? чего?), дательный (кому? чему?), винительный (кого? что?), творительный (кем? чем?) и местный (на ком? на чём?) являются косвенными.

// Дополнение, если оно есть, находится после сказуемого. Значит, имея английское предложение из трех слов, не соединенных никакими предлогами, можно с уверенностью сказать, что первое слово - подлежащее, второе - сказуемое, а третье - дополнение.

export var InputObject = React.createClass({
    getInitialState: function () {
        return {
            value: this.props.appState.object,
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
            this.props.handleSearchObject(text.slice(0, -1)); // функция handleSearchPredicate передана из родителя и меняет состояние родителя (App), к тому же эта функция, которая находится в родителе (App) проверяет глагол на правильность/неправильность
            this.setState({
                value: text.slice(0, -1),
                isCyrillic: true,
            })
        } else {
            this.props.handleSearchObject(text);
            this.setState({
                value: text,
                isCyrillic: false,
            })
        }
    },

    render: function () {
        return (
            <MuiThemeProvider>
                <TextField style={{ fontSize: '30px', padding: '0.5em', width: 250 }} hintStyle={{ fontSize: '20px' }} errorStyle={{ fontSize: '20px', paddingTop: '1em'}}
                    disabled={!this.props.appState.transitiveVerb}
                    onChange={this.isCyrillic}
                    floatingLabelText="Object (to whom? what?)"
                    floatingLabelStyle={{fontSize: '28px', marginTop: '-0.8em', lineHeight: '1em'}}
                    errorText={this.state.isCyrillic ? 'only latin letters' : ''}
                    value={this.state.value}
                />
            </MuiThemeProvider>
        )
    }
})

