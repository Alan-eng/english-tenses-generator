import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';

// Подлежащее может выражаться: существительным, местоимением, числительным, инфинитивом и герундием (одной из неличных форм глагола, о которых мы будем говорить позже. Сейчас просто запомните это).
const styles = {
    block: {
        boxSizing: 'border-box',
        display: 'flex',
        minWidth: '20%',
        // backgroundColor: 'blue',

        // maxWidth: '100%',
        // backgroundColor: 'red',
        // display: 'flex',
        // flexWrap: 'wrap',
        //  textAlign: 'center',
        // justifyContent: 'center',
        // margin: '0.1em'
    },
    textArea: {
        // width: 1000,
        //     backgroundColor: 'red',
        //     // maxWidth: '100%',
        //     // backgroundColor: 'red',
        //     // display: 'flex',
        //     // flexWrap: 'wrap',
        //     //  textAlign: 'center',
        //     // justifyContent: 'center',
        //     // margin: 0
    },

    // inputStyle: {
    //     backgroundColor: 'green',
    // }
};



export var InputAnswer = React.createClass({
    getInitialState: function () {
        return {
            value: '',
            isCyrillic: false,
            setAnswerClassName: '',
            answerComplete: false
        }
    },

    onChangeHandle: function (e) {
        this.setState(
            {
                value: e.target.value
            }
        )
    },

    onBlur: function () {
        this.setState({ focused: false, setAnswerClassName: '' })
    },
    onFocus: function () {
        this.setState({ focused: true })
    },

    componentWillReceiveProps: function () { // при любом изменении родителя - восстанавливаем значения по умолчанию
        this.setState({
            value: '',
            isCyrillic: false,
            setAnswerClassName: '',
            answerComplete: false
        })
    },

    isCyrillic: function (e) {
        var text = e.target.value
        // this.props.handleSearch(text);
        if (/[а-я]/i.test(text)) {
            if (text[text.length - 1] === '\n'){
                // this.props.handleSearchSubject(text.slice(0, -1)); // функция handleSearchSubject передана из родителя и меняет состояние родителя (App)
                this.setState({ //меняем стейт компонента, который передаем значение ввода
                    value: text.slice(0, -1),
                    isCyrillic: true,
                })
            }
        } else {
            // this.props.handleSearchSubject(text);
            this.setState({
                value: text,
                isCyrillic: false,
            })
        }
        if (text[text.length - 1] === ' ' || text[text.length - 1] === '\n') { // после каждого пробела или enter запускается функция проверки ответа
            // if (text[text.length - 2] !== ' ') { //делаем строку в массив, только если это первый пробел, а если перед пробелом были еще пробелы, то ничего не делаем 

            var answerArray = text.toLowerCase();
            // answerArray=answerArray.substring(0,1,'Хуй');
            console.log(answerArray)
            answerArray = answerArray.split(' ');
            var answerArrayWithoutSpaces = [];

            var shortForms = { //contractions

                // be in present simple or the present continuous
                "i'm": ['i', 'am'],
                "he's": ['he', 'is'],
                "she's": ['she', 'is'],
                "it's": ['it', 'is'],
                "you're": ['you', 'are'],
                "we're": ['we', 'are'],
                "they're": ['they', 'are'],
                // "who's": ['who', 'is'],
                // "there's": ['there', 'is'],

                //verb have in the present perfect: • It's been (has been) two weeks since he left. He hasn't called. • I've (I have) had too much to drink.  They've (they have) never been to Corsica. 
                // "he's": ['he', 'has'],
                // "she's": ['she', 'has'],
                // "it's": ['it', 'has'],

                "i've": ['i', 'have'],
                "you've": ['you', 'have'],
                "we've": ['we', 'have'],
                "they've": ['they', 'have'],
                "haven't": ['have', 'not'],

                //'d = would or had (past perfect)
                "i'd": ['i', 'would'],
                "you'd": ['you', 'would'],
                "he'd": ['he', 'would'],
                "she'd": ['she', 'would'],
                "we'd": ['we', 'would'],
                "they'd": ['they', 'would'],
                "wouldn't": ['would', 'not'],
                "who'd": ['who', 'would'],

                "isn't": ['is', 'not'],
                "aren't": ['are', 'not'],
                "wasn't": ['was', 'not'],
                "weren't": ['were', 'not'],
                "didn't": ['did', 'not'],
                "wouldn't": ['would', 'not'],
                "i'd": ['i', 'would'],
                "i'll": ['i', 'will'],

            }

            var correctAnswer = this.props.correctAnswer.toLowerCase().split(' '); // this.props.correctAnswer получаем из той ячейки таблицы, в котором рендерим этот элемент
            var correctAnswerWithoutEmpty = [] //создаем новый массив без пустых элементов
            for (var i = 0; i < correctAnswer.length; i++) {
                if (!!correctAnswer[i]) {
                    correctAnswerWithoutEmpty.push(correctAnswer[i])
                }
            }
            correctAnswer = correctAnswerWithoutEmpty;
            for (let i = 0; i < answerArray.length; i++) {   //создаем новый массив, без пробелов
                if (answerArray[i] !== '') { // i in origin - это и есть проверка на undefined
                    answerArrayWithoutSpaces.push(answerArray[i])
                    for (var key in shortForms) { //после того как добавили элемент в массив - проверяем массив на сокращения
                        if (answerArrayWithoutSpaces[i] === key) {
                            // console.log('запушили ' + shortForms[key])
                            // console.log('сработало на: ' + key + 'на ' + i + 'ом проходе')
                            answerArrayWithoutSpaces.splice(i, 1, shortForms[key][0], shortForms[key][1]);
                        }
                    }

                    console.log('наш массив:  ' + answerArrayWithoutSpaces)
                    if (answerArrayWithoutSpaces[i] == correctAnswer[i]) {
                        this.setState({ setAnswerClassName: 'correctAnswer' })
                    }

                    else {
                        console.log(answerArrayWithoutSpaces[i] + ' с номером ' + i + ' не равно ' + correctAnswer[i] + ' с номером ' + i)
                        this.setState({ setAnswerClassName: 'wrongAnswer' })
                    }

                }
            }

            // т.к. Реакт одновременно обновит setAnswerClassName и answerComplete, то чтобы отследить ошибку приходится вначале добавить проверку последнего введенного слова (т.е. элемента в массиве )
            if (answerArrayWithoutSpaces[answerArrayWithoutSpaces.length - 1] === correctAnswer[correctAnswer.length - 1] && this.state.setAnswerClassName === 'correctAnswer' && answerArrayWithoutSpaces.length === correctAnswer.length) {
                this.setState({ answerComplete: true })
            }
        }

    },

    done: function () {
        return (<CheckCircle />)
    },

    render: function () {
        return (
            <MuiThemeProvider>
                <div style={styles.block}>
                    {this.state.answerComplete == true ? <div> <CheckCircle color={'#00BCD4'} /> <div className={'answer'}>  {this.props.correctAnswer}</div> </div> :
                        <TextField onFocus={this.onFocus} onBlur={this.onBlur}
                            textareaStyle={styles.textArea}
                            className={this.state.setAnswerClassName}
                            hintText="type your answer"
                            multiLine={true}
                            rows={2}
                            rowsMax={4}
                            errorText={this.state.isCyrillic ? 'only latin letters' : ''}
                            value={this.state.value}
                            onChange={this.isCyrillic}
                        />}

                </div>

            </MuiThemeProvider>
        )
    }
})

