import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

//Обстоятельство

export var InputAdverbialModifierOfDefiniteTime = React.createClass({
    getInitialState: function () {
        return {
            value: this.props.appState.adverbialModifierOfDefiniteTime,
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
            this.props.handleSearchAdverbialModifierOfDefiniteTime(text.slice(0, -1)); // функция handleSearchPredicate передана из родителя и меняет состояние родителя (App), к тому же эта функция, которая находится в родителе (App) проверяет глагол на правильность/неправильность
            this.setState({
                value: text.slice(0, -1),
                isCyrillic: true,
            })
        } else {
            this.props.handleSearchAdverbialModifierOfDefiniteTime(text);
            this.setState({
                value: text,
                isCyrillic: false,
            })
        }
    },

    render: function () {
        return (
            <MuiThemeProvider>
                <TextField style={{ fontSize: '30px', padding: '0.5em'}} hintStyle={{ fontSize: '20px' }} errorStyle={{ fontSize: '20px', paddingTop: '1em'}}
                    onChange={this.isCyrillic}
                    floatingLabelText="Adverbial Modifier Of Definite Time (when?)"
                    floatingLabelStyle={{fontSize: '28px', marginTop: '-0.8em', lineHeight: '1em' }}
                    errorText={this.state.isCyrillic ? 'only latin letters' : ''}
                    value={this.state.value}
                />
            </MuiThemeProvider>
        )
    }
})

