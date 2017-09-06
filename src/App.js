import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { irregularVerbs } from './irregularVerbs'
import { makeParticiple } from './VerbFormCheck/makeParticiple'// Функция добавления -ing окончания 
import { makePastParticiple } from './VerbFormCheck/makePastParticiple'// Функция добавления -ed окончания 

import { TrainingModeToggle } from './Challenge/TrainingModeToggle'
import { InputAnswer } from './Challenge/InputAnswer'
// import { DialogTrainingMode } from './Challenge/DialogTrainingMode'

import { RadioButtonAssertionNegationQuestion } from './Input/RadioButtonAssertionNegationQuestion'
import { InputSubject } from './Input/InputSubject'
import { InputPredicate } from './Input/InputPredicate'
import { InputObject } from './Input/InputObject'
import { RadioButtonSubject_isPlural } from './Input/RadioButtonSubject_isPlural'
import { AddObjectCheckbox } from './Input/AddObjectCheckbox'
import { AddAttributeCheckbox } from './Input/AddAttributeCheckbox'
// import { AddAdverbialModifierOfTimeCheckbox } from './Input/AdverbialModifiers/AddAdverbialModifierOfTimeCheckbox'
import { adverbialModifiersOfTime } from './Input/AdverbialModifiers/adverbialModifiersOfTime' // база обстоятельств времени
import RandomAdverbialModifiersOfTimeButton from './Input/AdverbialModifiers/RandomAdverbialModifiersOfTimeButton' // база обстоятельств времени

import { TransitiveVerbToggle } from './Input/TransitiveVerbToggle'

import { AddAdverbialModifierOfTimeCheckbox } from './Input/AdverbialModifiers/AddAdverbialModifierOfTimeCheckbox'

import { InputAdverbialModifierOfDefiniteTime } from './Input/AdverbialModifiers/InputAdverbialModifierOfDefiniteTime'
import { AddAdverbialModifierOfDefiniteTimeCheckbox } from './Input/AdverbialModifiers/AddAdverbialModifierOfDefiniteTimeCheckbox'
import { AdverbialModifierOfIndefiniteTimeDropdown } from './Input/AdverbialModifiers/AdverbialModifierOfIndefiniteTimeDropdown'
import { AddAdverbialModifierOfIndefiniteTimeCheckbox } from './Input/AdverbialModifiers/AddAdverbialModifierOfIndefiniteTimeCheckbox'


import { AddAdverbialModifierOfPlaceCheckbox } from './Input/AdverbialModifiers/AddAdverbialModifierOfPlaceCheckbox'
import { InputAdverbialModifierOfPlace } from './Input/AdverbialModifiers/InputAdverbialModifierOfPlace'

import { RenderTense } from './RenderTenses/RenderTense';

function capitaliseFirstLetter(string) {
  if (string[0] === " ") {
    var properString = string.slice(1)
    return properString.charAt(0).toUpperCase() + properString.slice(1);
  }
  return string.charAt(0).toUpperCase() + string.slice(1);

}
export { capitaliseFirstLetter };
//проверка глагола на правильность/неправильность
var TableTenses = React.createClass({
  getInitialState: function () {
    return {
      trainingMode: false,
      typeOfSentence: 'assertion',
      questionWord: 'general',
      subject: {
        value: this.props.subject,
        // single: true,
        // noun: {
        //   single: false,
        //   plural: false,
        //   uncountable: false, //sand, sugar, ruce, water - эти существительные невозможно посчитать, сюда же отнесем абстрактные существительные всё то, что нельзя увидеть, услышать, почувствовать, попробовать на вкус и до чего нельзя дотронуться. Например: effort - усилия, time - время, progress - прогресс, love - любовь, weather - погода и т.д.
        // },
      },
      subjectIsSingle: true,

      predicateIsIrregularVerb: true,
      verb: {
        infinitive: 'read',
        pastIndefinite: 'read',
        participleII: 'read',
        participle: 'reading'
      },
      transitiveVerb: true,

      addObject: false,
      object: 'the book',

      addAdverbialModifierOfDefiniteTime: false,
      adverbialModifierOfDefiniteTime: 'in the morning',

      addAdverbialModifierOfIndefiniteTime: false,
      adverbialModifierOfIndefiniteTime: 'usually',

      addAdverbialModifierOfTime: false,
      adverbialModifiersOfTime: {
        PresentIndefinite: 'usually',
        PresentContinious: 'now',
        PresentPerfect: 'just',
        PresentPerfectContinious: 'for 5 hours', // длительное действие, которое привело к результату в прошедшем / настоящем / будущем.

        PastIndefinite: 'yesterday',
        PastContinious: 'from 5 till 7',
        PastPerfect: 'before',
        PastPerfectContinious: 'for 5 hours',

        FutureIndefinite: 'tomorrow',
        FutureContinious: 'from 5 till 7',
        FuturePerfect: 'by the end of the month',
        FuturePerfectContinious: 'for 5 hours',

        FutureIndefiniteInThePast: 'tomorrow', //действия в будущем, воспринимаемом из прошлого:
        FutureContiniousInThePast: 'from 5 till 7', // процесс, который будет длиться в определенный момент будущего, воспринимаемого из прошлого:
        FuturePerfectInThePast: 'by the end of the month', //Действие, которое будет закончено к определенному моменту будущего, воспринимаемого из прошлого:
        FuturePerfectContiniousInThePast: 'for 5 hours', //Чрезвычайно редкое даже в письменной речи время, которое обозначает процесс, который начнется и будет продолжаться до определенного момента в будущем, воспринимаемом из прошлого:

      },

      addAdverbialModifierOfPlace: false,
      adverbialModifierOfPlace: 'at school',

    }
  },

  handleQuestionWord: function (value) {
    this.setState({ questionWord: value })
  },

  handleTrainingMode: function () { //передадим в дочерний компонент
    this.setState({
      trainingMode: !this.state.trainingMode,
    })
  },

  handleTransitiveVerbToggle: function () {
    this.setState({
      transitiveVerb: !this.state.transitiveVerb,
    })
  },

  handleTypeOfSentence: function (e) { // передали эту функцию в дочерний компонент
    // if (e.target.value == "negation") { console.log('юхууууууу')}
    // if(.Sex[0].checked){document.Test1.Sex[1].click();}
    this.setState({
      typeOfSentence: e
    })
  },

  handleSearchSubject: function (text) { // передали эту функцию в дочерний компонент
    this.setState({
      subject: {
        value: text.toLowerCase()
      }
    })
  },


  handleSearchSubjectIsSingle: function () { // передали эту функцию в дочерний компонент
    this.setState({
      subjectIsSingle: !this.state.subjectIsSingle
    })
  },


  handleSearchPredicate: function (text) { // Проверка на неправильные глаголы
    var isIrregularVerb = false;
    // var a = this.state.subject
    function checkIsArray(a) {

      return (Array.isArray(a) ? toString(a[0]) : toString(a))
    }
    for (let i = 0; i < irregularVerbs.length; i++) {
      for (var propName in irregularVerbs[i]) { // этот код будет вызван для каждого свойства объекта
        // console.log('Есть такая ебола в неправильном глаголе № ' + i)

        if (Array.isArray(irregularVerbs[i][propName]) && (irregularVerbs[i][propName].indexOf(text) > -1)) { //если свойство - массив, то заходим в него и сравниваем значения внутри него, и если оно там есть, то обновляем стейт
          isIrregularVerb = true; //показываем, что нашли наш неправильный глагол


          var indexOfProperty = irregularVerbs[i][propName].indexOf(text); //позиция свойста в массиве
          // console.log('эта форма в св-ве ' + propName + 'неправильного глагола № ' + i + ' - в виде массива, в позиции ' + indexOfProperty)

          this.setState({ predicateIsIrregularVerb: true })
          switch (propName) {
            case 'infinitive':
              // console.log('сработала позиция infinitive')
              this.setState({
                verb: {
                  infinitive: irregularVerbs[i].infinitive[0],
                  get pastIndefinite() {
                    return (Array.isArray(irregularVerbs[i].pastIndefinite) ? irregularVerbs[i].pastIndefinite[0] : irregularVerbs[i].pastIndefinite);
                  },
                  get participleII() {
                    return (Array.isArray(irregularVerbs[i].participleII) ? irregularVerbs[i].participleII[0] : irregularVerbs[i].participleII);
                  },
                  get participle() { return makeParticiple(irregularVerbs[i].infinitive[0]) }
                }
              })
              break;
            case 'pastIndefinite':
              // console.log('сработала позиция pastIndefinite')

              this.setState({
                verb: {
                  get infinitive() {
                    return (Array.isArray(irregularVerbs[i].infinitive) ? irregularVerbs[i].infinitive[0] : irregularVerbs[i].infinitive);
                  },
                  pastIndefinite: irregularVerbs[i].pastIndefinite[indexOfProperty],
                  get participleII() {
                    return (Array.isArray(irregularVerbs[i].participleII) ? irregularVerbs[i].participleII[0] : irregularVerbs[i].participleII);
                  },
                  get participle() { return (Array.isArray(irregularVerbs[i].infinitive) ? makeParticiple(irregularVerbs[i].infinitive[0]) : makeParticiple(irregularVerbs[i].infinitive)) }
                }
              })
              break;
            case 'participleII':
              // console.log('сработала позиция participleII')
              this.setState({
                verb: {
                  get infinitive() {
                    return (Array.isArray(irregularVerbs[i].infinitive) ? irregularVerbs[i].infinitive[0] : irregularVerbs[i].infinitive);
                  },
                  get pastIndefinite() {
                    return (Array.isArray(irregularVerbs[i].pastIndefinite) ? irregularVerbs[i].pastIndefinite[0] : irregularVerbs[i].pastIndefinite);
                  },
                  get participleII() {
                    return (Array.isArray(irregularVerbs[i].participleII) ? irregularVerbs[i].participleII[0] : irregularVerbs[i].participleII);
                  },
                  get participle() { return (Array.isArray(irregularVerbs[i].infinitive) ? makeParticiple(irregularVerbs[i].infinitive[0]) : makeParticiple(irregularVerbs[i].infinitive)) }
                }
              })
              break;
          }
        }

        // Если свойство не массив
        if (irregularVerbs[i][propName] === text.toLowerCase()) { //мы использовали квадратные скобки menu[key] т.к, если имя свойства хранится в переменной, то обратиться к нему можно только так, не через точку.
          isIrregularVerb = true;
          // console.log('Есть такой неправильный глагол № ' + i)
          this.setState({
            predicateIsIrregularVerb: true,
            verb: {
              get infinitive() {
                return (Array.isArray(irregularVerbs[i].infinitive) ? irregularVerbs[i].infinitive[0] : irregularVerbs[i].infinitive);
              },
              get pastIndefinite() {
                return (Array.isArray(irregularVerbs[i].pastIndefinite) ? irregularVerbs[i].pastIndefinite[0] : irregularVerbs[i].pastIndefinite);
              },
              get participleII() {
                return (Array.isArray(irregularVerbs[i].participleII) ? irregularVerbs[i].participleII[0] : irregularVerbs[i].participleII);
              },
              get participle() { return (Array.isArray(irregularVerbs[i].infinitive) ? makeParticiple(irregularVerbs[i].infinitive[0]) : makeParticiple(irregularVerbs[i].infinitive)) }
            }
          })
        }
      }
    }

    if (isIrregularVerb === false) {
      this.setState({ // Если не сработало обновление стейта выше, то обновляем стейт для правильного глагола
        predicateIsIrregularVerb: false,
        verb: {
          infinitive: text.toLowerCase(),
          get pastIndefinite() { return makePastParticiple(text) },
          get participleII() { return makePastParticiple(text) },
          get participle() { return makeParticiple(text) }
        }
      })
    }
  },

  randomAdverbialModifiersOfTime: function () {
    this.setState({
      adverbialModifiersOfTime: {
        PresentIndefinite: (function () { return adverbialModifiersOfTime.PresentIndefinite[Math.floor(Math.random() * adverbialModifiersOfTime.PresentIndefinite.length)] })(),
        PresentContinious: (function () { return adverbialModifiersOfTime.PresentContinious[Math.floor(Math.random() * adverbialModifiersOfTime.PresentContinious.length)] })(),
        PresentPerfect: (function () { return adverbialModifiersOfTime.PresentPerfect[Math.floor(Math.random() * adverbialModifiersOfTime.PresentPerfect.length)] })(),
        PresentPerfectContinious: (function () { return adverbialModifiersOfTime.PresentPerfectContinious[Math.floor(Math.random() * adverbialModifiersOfTime.PresentPerfectContinious.length)] })(), // длительное действие, которое привело к результату в прошедшем / настоящем / будущем.

        PastIndefinite: (function () { return adverbialModifiersOfTime.PastIndefinite[Math.floor(Math.random() * adverbialModifiersOfTime.PastIndefinite.length)] })(),
        PastContinious: (function () { return adverbialModifiersOfTime.PastContinious[Math.floor(Math.random() * adverbialModifiersOfTime.PastContinious.length)] })(),
        PastPerfect: (function () { return adverbialModifiersOfTime.PastPerfect[Math.floor(Math.random() * adverbialModifiersOfTime.PastPerfect.length)] })(),
        PastPerfectContinious: (function () { return adverbialModifiersOfTime.PastPerfectContinious[Math.floor(Math.random() * adverbialModifiersOfTime.PastPerfectContinious.length)] })(),

        FutureIndefinite: (function () { return adverbialModifiersOfTime.FutureIndefinite[Math.floor(Math.random() * adverbialModifiersOfTime.FutureIndefinite.length)] })(),
        FutureContinious: (function () { return adverbialModifiersOfTime.FutureContinious[Math.floor(Math.random() * adverbialModifiersOfTime.FutureContinious.length)] })(),
        FuturePerfect: (function () { return adverbialModifiersOfTime.FuturePerfect[Math.floor(Math.random() * adverbialModifiersOfTime.FuturePerfect.length)] })(),
        FuturePerfectContinious: (function () { return adverbialModifiersOfTime.FuturePerfectContinious[Math.floor(Math.random() * adverbialModifiersOfTime.FuturePerfectContinious.length)] })(),

        FutureIndefiniteInThePast: (function () { return adverbialModifiersOfTime.FutureIndefiniteInThePast[Math.floor(Math.random() * adverbialModifiersOfTime.FutureIndefiniteInThePast.length)] })(), //действия в будущем, воспринимаемом из прошлого:
        FutureContiniousInThePast: (function () { return adverbialModifiersOfTime.FutureContiniousInThePast[Math.floor(Math.random() * adverbialModifiersOfTime.FutureContiniousInThePast.length)] })(), // процесс, который будет длиться в определенный момент будущего, воспринимаемого из прошлого:
        FuturePerfectInThePast: (function () { return adverbialModifiersOfTime.FuturePerfectInThePast[Math.floor(Math.random() * adverbialModifiersOfTime.FuturePerfectInThePast.length)] })(), //Действие, которое будет закончено к определенному моменту будущего, воспринимаемого из прошлого:
        FuturePerfectContiniousInThePast: (function () { return adverbialModifiersOfTime.FuturePerfectContiniousInThePast[Math.floor(Math.random() * adverbialModifiersOfTime.FuturePerfectContiniousInThePast.length)] })(), //Чрезвычайно редкое даже в письменной речи время, которое обозначает процесс, который начнется и будет продолжаться до определенного момента в будущем, воспринимаемом из прошлого:

      }
    })
  },

  handleSearchObject: function (text) { // передали эту функцию в дочерний компонент
    this.setState({
      object: text.toLowerCase()
    })
  },

  handleSearchAdverbialModifierOfDefiniteTime: function (text) { // передали эту функцию в дочерний компонент
    this.setState({
      adverbialModifierOfDefiniteTime: text.toLowerCase()
    })
  },

  handleAdverbialModifierOfIndefiniteTime: function (value) {
    this.setState({ adverbialModifierOfIndefiniteTime: value })
  },

  handleAdverbialModifierOfTime: function (value) { // передали эту функцию в дочерний компонент
    this.setState({ adverbialModifierOfTime: value })
  },

  handleSearchAdverbialModifierOfPlace: function (text) { // передали эту функцию в дочерний компонент
    this.setState({
      adverbialModifierOfPlace: text.toLowerCase()
    })
  },


  compareToPronouns: function (e) {
    var pronouns = ['i', 'he', 'she', 'it', 'we', 'they'];
    function isPronoun() { if (pronouns.indexOf(e.target.value.toLowerCase()) >= 0) { return true } else { return false } }
    function isSinglePronoun() { if (pronouns.indexOf(e.target.value.toLowerCase()) < 4 && pronouns.indexOf(e.target.value.toLowerCase()) >= 0) { return true } else { return false } }
    function isPluralPronoun() { if (pronouns.indexOf(e.target.value.toLowerCase()) >= 4) { return true } else { return false } }


    var stringLength = e.target.value.length;
    function isSingleNoun() {
      if (!isPronoun() && e.target.value.toLowerCase().charAt(stringLength - 1) !== 's') { return true } else { return false }
    }
    function isPluralNoun() {
      if (!isPronoun() && e.target.value.toLowerCase().charAt(stringLength - 1) == 's') { return true } else { return false }
    }

    this.setState({
      subject: {
        value: e.target.value.toLowerCase(),
        //noun: {},
        pronoun: {
          single: isSinglePronoun(),
          plural: isPluralPronoun()
        },
        noun: {
          single: isSingleNoun(),
          plural: isPluralNoun(),
          uncountable: false, //sand, sugar, ruce, water - эти существительные невозможно посчитать, сюда же отнесем абстрактные существительные всё то, что нельзя увидеть, услышать, почувствовать, попробовать на вкус и до чего нельзя дотронуться. Например: effort - усилия, time - время, progress - прогресс, love - любовь, weather - погода и т.д.
        },
      }
    })
  },

  handleAddObjectCheckbox: function () {
    this.setState({
      addObject: !this.state.addObject
    })
  },

  // handleAdverbialModifierOfDefiniteTimeCheckbox: function () {
  //   this.setState({
  //     addAdverbialModifierOfDefiniteTime: !this.state.addAdverbialModifierOfDefiniteTime
  //   })
  // },

  // handleAdverbialModifierOfIndefiniteTimeCheckbox: function () {
  //   this.setState({
  //     addAdverbialModifierOfIndefiniteTime: !this.state.addAdverbialModifierOfIndefiniteTime
  //   })
  // },

  handleAdverbialModifierOfTimeCheckbox: function () {
    this.setState({
      addAdverbialModifierOfTime: !this.state.addAdverbialModifierOfTime
    })
  },

  handleAdverbialModifierOfPlaceCheckbox: function () {
    this.setState({
      addAdverbialModifierOfPlace: !this.state.addAdverbialModifierOfPlace
    })
  },

  renderAddObject: function () { //в зависимости от чекбокса handleAddObjectCheckbox - рендерим или НЕрендерим поле ввода дополнения
    if (this.state.addObject === true) {
      return <InputObject handleSearchObject={this.handleSearchObject} appState={this.state} />
    }
  },

  renderAdverbialModifierOfTime: function () { //в зависимости от чекбокса handleAddObjectCheckbox - рендерим или НЕрендерим поле ввода дополнения
    if (this.state.addAdverbialModifierOfTime === true) {
      return <RandomAdverbialModifiersOfTimeButton randomAdverbialModifiersOfTime={this.randomAdverbialModifiersOfTime} />

    }
  },

  renderAdverbialModifierOfIndefiniteTime_Tenses: function () { //в зависимости от выбранного наречия выводим названия времен, в которых оно употребляется
    if (this.state.addAdverbialModifierOfIndefiniteTime === true) {
      switch (this.state.adverbialModifierOfIndefiniteTime) {
        case 'usually':
        case 'always':
        case 'often':
        case 'sometimes':
        case 'seldom':
        case 'never':
          return <span style={{ color: '#00BCD4' }}>Present Indefinite</span>

      }
    }
  },

  renderAdverbialModifierOfPlace: function () { //в зависимости от чекбокса handleAddObjectCheckbox - рендерим или НЕрендерим поле ввода дополнения
    if (this.state.addAdverbialModifierOfPlace === true) {
      return <InputAdverbialModifierOfPlace handleSearchAdverbialModifierOfPlace={this.handleSearchAdverbialModifierOfPlace} appState={this.state} />
    }
  },

  //renderOrder: ['InputSubject', 'InputPredicate', 'InputObject', 'InputAdverbalModifier'] // порядок отрсовки членов предложения (Input)
  render: function () {
    return (
      <div>
        {/*<TrainingModeToggle handleTrainingMode={this.handleTrainingMode} />*/}
        <div>
          <h1>Choose members of sentence:</h1>
        </div>
        <div className="inputContainer">
          <div className="input">
            <InputSubject handleSearchSubject={this.handleSearchSubject} compareToPronouns={this.compareToPronouns} />
            <div className='aboutSubject'> (noun, propoun, numeral, infinitive or the gerund) </div>
            <RadioButtonSubject_isPlural handleSearchSubjectIsSingle={this.handleSearchSubjectIsSingle} subject={this.state.subject.value} />
          </div>
          {/*<div>
            {this.renderAdverbialModifierOfIndefiniteTime()}
            {this.renderAdverbialModifierOfIndefiniteTime_Tenses()}
          </div>*/}
          <div className="input">
            <InputPredicate handleSearchPredicate={this.handleSearchPredicate} />
            <div className='aboutPredicate'> {this.state.predicateIsIrregularVerb ? 'Irregular Verb' : 'Regular Verb'} </div>
            <ul>
              <li> Infinitive: <span className='aboutPredicateForms'>{this.state.verb.infinitive}</span> </li>
              <li> Past Indefinite: <span className='aboutPredicateForms'>{this.state.verb.pastIndefinite}</span> </li>
              <li> Participle II: <span className='aboutPredicateForms'>{this.state.verb.participleII}</span> </li>
              <li> Participle: <span className='aboutPredicateForms'>{this.state.verb.participle}</span> </li>
            </ul>
            <TransitiveVerbToggle handleTransitiveVerbToggle={this.handleTransitiveVerbToggle} />
          </div>
          <div className="input">
            {this.renderAddObject()}
            <AddObjectCheckbox handleAddObjectCheckbox={this.handleAddObjectCheckbox} />
            {!this.state.transitiveVerb ? <div style={{ marginTop: 10, maxWidth: 230 }}> No Object, because the predicate is <span style={{ color: '#F44336' }}> Intransitive Verb! </span> </div> : null}
          </div>
          <div className="input">
            {this.renderAdverbialModifierOfPlace()}
            <AddAdverbialModifierOfPlaceCheckbox handleAdverbialModifierOfPlaceCheckbox={this.handleAdverbialModifierOfPlaceCheckbox} />
          </div>
          <div className="input">
            {/*<RandomAdverbialModifiersOfTimeButton randomAdverbialModifiersOfTime={this.randomAdverbialModifiersOfTime} />*/}
            {/*{this.renderAdverbialModifierOfDefiniteTime()}*/}
            {this.renderAdverbialModifierOfTime()}
            <AddAdverbialModifierOfTimeCheckbox handleAdverbialModifierOfTimeCheckbox={this.handleAdverbialModifierOfTimeCheckbox} />
            {/*<AddAdverbialModifierOfDefiniteTimeCheckbox handleAdverbialModifierOfDefiniteTimeCheckbox={this.handleAdverbialModifierOfDefiniteTimeCheckbox} />*/}
            {/*<AddAdverbialModifierOfIndefiniteTimeCheckbox handleAdverbialModifierOfIndefiniteTimeCheckbox={this.handleAdverbialModifierOfIndefiniteTimeCheckbox} />*/}
          </div>
          {/*<AddAttributeCheckbox />*/}
        </div>
        <RadioButtonAssertionNegationQuestion handleTypeOfSentence={this.handleTypeOfSentence} handleQuestionWord={this.handleQuestionWord} appState={this.state} />
        <h2>Active Voice Tenses (the Indicative Mood) </h2>
        <div className="tableHeader">
          <div className='rowHeaderEmpty'></div>
          <div className='columnHeader'>Indefinite/Simple</div>
          <div className='columnHeader'>Continious</div>
          <div className='columnHeader'>Perfect</div>
          <div className='columnHeader'>Perfect Continious</div>
        </div>
        <div className="presentTimes">
          <div className='rowHeader'><span>Present</span></div>
          <div className='tensesNameHidden'> Indefinite </div>
          <RenderTense appState={this.state} tense='present indefinite' />
          <div className='tensesNameHidden'> Continious </div>
          <RenderTense appState={this.state} tense='present continious' />
          <div className='tensesNameHidden'> Perfect </div>
          <RenderTense appState={this.state} tense='present perfect' />
          <div className='tensesNameHidden'> Perfect Continious </div>
          <RenderTense appState={this.state} tense='present perfect continious' />
        </div>
        <div className="pastTimes">
          <div className='rowHeader'><span>Past</span></div>
          <div className='tensesNameHidden'> Indefinite </div>
          <RenderTense appState={this.state} tense='past indefinite' />
          <div className='tensesNameHidden'> Continious </div>
          <RenderTense appState={this.state} tense='past continious' />
          <div className='tensesNameHidden'> Perfect </div>
          <RenderTense appState={this.state} tense='past perfect' />
          <div className='tensesNameHidden'> Perfect Continious </div>
          <RenderTense appState={this.state} tense='past perfect continious' />
        </div>
        <div className="futureTimes">
          <div className='rowHeader'><span>Future</span></div>
          <div className='tensesNameHidden'> Indefinite </div>
          <RenderTense appState={this.state} tense='future indefinite' />
          <div className='tensesNameHidden'> Continious </div>
          <RenderTense appState={this.state} tense='future continious' />
          <div className='tensesNameHidden'> Perfect </div>
          <RenderTense appState={this.state} tense='future perfect' />
          <div className='tensesNameHidden'> Perfect Continious </div>
          <RenderTense appState={this.state} tense='future perfect continious' />
        </div>
        <div className="futureInThePastTimes">
          <div className='rowHeader'><span>Future in the Past</span></div>
          <div className='tensesNameHidden'> Indefinite </div>
          <RenderTense appState={this.state} tense='future in the past indefinite' />
          <div className='tensesNameHidden'> Continious </div>
          <RenderTense appState={this.state} tense='future in the past continious' />
          <div className='tensesNameHidden'> Perfect </div>
          <RenderTense appState={this.state} tense='future in the past perfect' />
          <div className='tensesNameHidden'> Perfect Continious </div>
          <RenderTense appState={this.state} tense='future in the past perfect continious' />
        </div>

        <h2>Passive Voice Tenses (the Indicative Mood) </h2>
        {!this.state.transitiveVerb ? <h3 style={{ backgroundColor: 'rgba(112, 128, 144, 0.80)', margin: 0, padding: 0, paddingBottom: 10 }}><span> No Passive Voice Tenses, because the predicate is  <span style={{ color: '#F44336' }}> Intransitive Verb! </span> </span> </h3> : null}

        {this.state.transitiveVerb ? <div>
          <div className="tableHeader">
            <div className='rowHeaderEmpty'></div>
            <div className='columnHeader'>Indefinite/Simple</div>
            <div className='columnHeader'>Continious</div>
            <div className='columnHeader'>Perfect</div>
            <div className='columnHeader'>Perfect Continious</div>
          </div>
          <div className="presentTimes">
            <div className='rowHeader'><span>Present</span></div>
            <div className='tensesNameHidden'><span> Indefinite</span> </div>
            <RenderTense appState={this.state} tense='present indefinite passive' />
            <div className='tensesNameHidden'><span> Continious</span> </div>
            <RenderTense appState={this.state} tense='present continious passive' />
            <div className='tensesNameHidden'><span> Perfect</span> </div>
            <RenderTense appState={this.state} tense='present perfect passive' />
            <div className='tensesNameHidden'><span> Perfect Continious</span> </div>
            <div className="tableCell doesNotExist">doesn't exist</div>
            {/*<PresentPerfectContiniousPassive typeOfSentence={this.state.typeOfSentence} subject={this.state.subject.value} subjectIsSingle={this.state.subjectIsSingle} verb={this.state.verb} />*/}
          </div>
          <div className="pastTimes">
            <div className='rowHeader'><span>Past</span></div>
            <div className='tensesNameHidden'> Indefinite </div>
            <RenderTense appState={this.state} tense='past indefinite passive' />
            <div className='tensesNameHidden'> Continious </div>
            <RenderTense appState={this.state} tense='past continious passive' />
            <div className='tensesNameHidden'> Perfect </div>
            <RenderTense appState={this.state} tense='past perfect passive' />
            <div className='tensesNameHidden'> Perfect Continious </div>
            <div className="tableCell doesNotExist">doesn't exist</div>
          </div>
          <div className="futureTimes">
            <div className='rowHeader'><span>Future</span></div>
            <div className='tensesNameHidden'> Indefinite </div>
            <RenderTense appState={this.state} tense='future indefinite passive' />
            <div className='tensesNameHidden'> Continious </div>
            <div className="tableCell doesNotExist">doesn't exist</div>
            <div className='tensesNameHidden'> Perfect </div>
            <RenderTense appState={this.state} tense='future perfect passive' />
            <div className='tensesNameHidden'> Perfect Continious </div>
            <div className="tableCell doesNotExist">doesn't exist</div>
          </div>
          <div className="futureInThePastTimes">
            <div className='rowHeader'><span>Future in the Past</span></div>
            <div className='tensesNameHidden'> Indefinite </div>
            <RenderTense appState={this.state} tense='future in the past indefinite passive' />
            <div className='tensesNameHidden'> Continious </div>
            <div className="tableCell doesNotExist">doesn't exist</div>
            <div className='tensesNameHidden'> Perfect </div>
            <RenderTense appState={this.state} tense='future in the past perfect passive' />
            <div className='tensesNameHidden'> Perfect Continious </div>
            <div className="tableCell doesNotExist">doesn't exist</div>
          </div>
        </div> :
          // в случае, если глагол не переходный - во всех ячейках рендерим ошибку
          <div>
            <div className="tableHeader">
              <div className='rowHeaderEmpty'></div>
              <div className='columnHeader'>Indefinite/Simple</div>
              <div className='columnHeader'>Continious</div>
              <div className='columnHeader'>Perfect</div>
              <div className='columnHeader'>Perfect Continious</div>
            </div>
            <div className="presentTimes">
              <div className='rowHeader'>Present</div>
              <div className='tensesNameHidden'> Indefinite </div>
              <div className="tableCell"><span style={{ color: '#F44336' }}> Intransitive Verb </span></div>
              <div className='tensesNameHidden'> Continious </div>
              <div className="tableCell"><span style={{ color: '#F44336' }}> Intransitive Verb </span></div>
              <div className='tensesNameHidden'> Perfect </div>
              <div className="tableCell"><span style={{ color: '#F44336' }}> Intransitive Verb </span></div>
              <div className='tensesNameHidden'> Perfect </div>
              <div className='tensesNameHidden'> Perfect Continious </div>
              <div className="tableCell doesNotExist">doesn't exist</div>
            </div>
            <div className="pastTimes">
              <div className='rowHeader'>Past</div>
              <div className='tensesNameHidden'> Indefinite </div>
              <div className="tableCell"><span style={{ color: '#F44336' }}> Intransitive Verb </span></div>
              <div className='tensesNameHidden'> Continious </div>
              <div className="tableCell"><span style={{ color: '#F44336' }}> Intransitive Verb </span></div>
              <div className='tensesNameHidden'> Perfect </div>
              <div className="tableCell"><span style={{ color: '#F44336' }}> Intransitive Verb </span></div>
              <div className='tensesNameHidden'> Perfect Continious </div>
              <div className="tableCell doesNotExist">doesn't exist</div>
            </div>
            <div className="futureTimes">
              <div className='rowHeader'>Future</div>
              <div className='tensesNameHidden'> Indefinite </div>
              <div className="tableCell"><span style={{ color: '#F44336' }}> Intransitive Verb </span></div>
              <div className='tensesNameHidden'> Continious </div>
              <div className="tableCell doesNotExist">doesn't exist</div>
              <div className='tensesNameHidden'> Perfect </div>
              <div className="tableCell"><span style={{ color: '#F44336' }}> Intransitive Verb </span></div>
              <div className='tensesNameHidden'> Perfect Continious </div>
              <div className="tableCell doesNotExist">doesn't exist</div>
            </div>
            <div className="futureInThePastTimes">
              <div className='rowHeader'>Future in the Past</div>
              <div className='tensesNameHidden'> Indefinite </div>
              <div className="tableCell"><span style={{ color: '#F44336' }}> Intransitive Verb </span></div>
              <div className='tensesNameHidden'> Continious </div>
              <div className="tableCell doesNotExist">doesn't exist</div>
              <div className='tensesNameHidden'> Perfect </div>
              <div className="tableCell"><span style={{ color: '#F44336' }}> Intransitive Verb </span></div>
              <div className='tensesNameHidden'> Perfect Continious </div>
              <div className="tableCell doesNotExist">doesn't exist</div>
            </div>
          </div>}
      </div>
    )
  }
})


export default TableTenses;



