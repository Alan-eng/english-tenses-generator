import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

// Подлежащее может выражаться: существительным, местоимением, числительным, инфинитивом и герундием (одной из неличных форм глагола, о которых мы будем говорить позже. Сейчас просто запомните это).

//Подытожим то, что нам необходимо знать:
// а)	в английском предложении от местоположения слова зависит, каким членом этого предложения оно является; изменение порядка слов в предложении приводит к изменению его смысла;
// б)	одно и то же слово в зависимости от определителей (а также и от места его в предложении) может обозначать разные части речи.

export var InputSubject = React.createClass({
    getInitialState: function () {
        return {
            value: 'He',
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
            this.props.handleSearchSubject(text.slice(0, -1)); // функция handleSearchSubject передана из родителя и меняет состояние родителя (App)
            this.setState({ //меняем стейт компонента, который передаем значение ввода
                value: text.slice(0, -1),
                isCyrillic: true,
            })
        } else {
            this.props.handleSearchSubject(text);
            this.setState({
                value: text,
                isCyrillic: false,
            })
        }
    },

    //  onChange={this.onChangeHandle}
                    // hintText={this.isCyrillic()}

    render: function () {
        return (
            <MuiThemeProvider>
                <TextField style={{ fontSize: '30px', padding: '0.5em', width: 250}} hintStyle={{ fontSize: '20px', lineHeight: '2em' }} errorStyle={{ fontSize: '20px', paddingTop: '1em'}}
                    onChange={this.isCyrillic}
                    floatingLabelText="Subject (who? what?)"
                    floatingLabelStyle={{fontSize: '28px', marginTop: '-0.8em', lineHeight: '1em'}}
                    errorText={this.state.isCyrillic ? 'only latin letters' : ''}
                    value={this.state.value}
                />
            </MuiThemeProvider>
        )
    }
})

