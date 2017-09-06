import React, { Component } from 'react';
import { capitaliseFirstLetter } from './../App'
import { vowels } from './../VerbFormCheck/vowels'

import { InputAnswer } from './../Challenge/InputAnswer'
// import { findPreposition } from '../../Input/QuestionWordDropdown'
import { RenderAdverbialModifierOfIndefiniteTime } from './RenderElements/RenderAdverbialModifierOfIndefiniteTime'
import { RenderAdverbialModifierOfDefiniteTime } from './RenderElements/RenderAdverbialModifierOfDefiniteTime'
import { RenderAdverbialModifierOfPlace } from './RenderElements/RenderAdverbialModifierOfPlace'
import { RenderObject } from './RenderElements/RenderObject'
import { RenderSubject } from './RenderElements/RenderSubject'
import { RenderPredicate } from './RenderElements/RenderPredicate'
import { RenderAuxiliaryVerb } from './RenderElements/RenderAuxiliaryVerb'


export var RenderTense = React.createClass({ //этот компонент отвечает только за порядок членов предложения, в зависимости от того, является ли предложение утверждением/отрицанием/вопросом

    addHave: function () {
        switch (this.props.tense) {
            case 'future perfect':
            case 'future perfect continious':
            case 'future in the past perfect':
            case 'future in the past perfect continious':
                return <span className='predicate'>have</span>

            //Passive Voice
            case 'future perfect passive':
            case 'future in the past perfect passive':
                return <span className='predicate'>have</span>
            default:
                return null
        }
    },

    addBeen: function () {
        switch (this.props.tense) {
            case 'present perfect continious':
            case 'past perfect continious':
            case 'future perfect continious':
            case 'future in the past perfect continious':
                return <span className='predicate'>been</span>

            //Passive Voice
            case 'present perfect passive':
            case 'past perfect passive':
            case 'future perfect passive':
            case 'future in the past perfect passive':
                return <span className='predicate'>been</span>
            default:
                return null
        }
    },

    addBe: function () {
        switch (this.props.tense) {
            case 'future continious':
            case 'future in the past continious':
                return <span className='predicate'>be</span>
            //Passive Voice
            case 'future indefinite passive':
            case 'future in the past indefinite passive':
                return <span className='predicate'>be</span>
            default:
                return null
        }
    },

    addBeing: function () {
        switch (this.props.tense) {
            case 'present continious passive':
            case 'past continious passive':
                return <span className='predicate'>being</span>
            default:
                return null
        }
    },

    addDo: function () {
        switch (this.props.tense) {
            case 'present indefinite':
            case 'past indefinite':
            case 'future indefinite':
            case 'future in the past indefinite':
                return <span className='predicate'>do</span>
            case 'present continious':
            case 'past continious':
            case 'future continious':
            case 'future in the past continious':
                return <span className='predicate'>doing</span>
            case 'present perfect':
            case 'past perfect':
            case 'future perfect':
            case 'future in the past perfect':
                return <span className='predicate'>done</span>
            case 'present perfect continious':
            case 'past perfect continious':
            case 'future perfect continious':
            case 'future in the past perfect continious':
                return <span className='predicate'>doing</span>

                //Passive Voice
            case 'present indefinite passive':
            case 'past indefinite passive':
            case 'future indefinite passive':
            case 'future in the past indefinite passive':
            case 'present continious passive':
            case 'past continious passive':
            case 'present perfect passive':
            case 'past perfect passive':
            case 'future perfect passive':
            case 'future in the past perfect passive':
                return <span className='predicate'>done</span>
            default:
                return null
        }
    },

        addBy: function () {
            if (this.props.appState.addObject) {
                switch (this.props.tense) {
                    case 'present indefinite passive':
                    case 'past indefinite passive':
                    case 'future indefinite passive':
                    case 'future in the past indefinite passive':
                    case 'present continious passive':
                    case 'past continious passive':
                    case 'present perfect passive':
                    case 'past perfect passive':
                    case 'future perfect passive':
                    case 'future in the past perfect passive':
                        return <span className='object'>by</span>

                    default:
                        return null
                }
            }
    },


    assertionAnswer: function () {
        return capitaliseFirstLetter(`${this.props.subject} ${this.addLetterS()} ${this.props.appState.addObject === false ? '' : this.props.appState.object}`)
    },

    negationAnswer: function () {
        return capitaliseFirstLetter(`${this.props.subject} ${this.auxiiliaryVerb()} not ${this.props.verb.infinitive} ${this.props.appState.addObject === false ? '' : this.props.appState.object}`)
    },

    //"!!" — является проверкой как определена ли переменная и является истиной, а "!!!" — как определена переменная и является ложью.
    questionAnswer: function () {
        return capitaliseFirstLetter(`${!!!this.props.appState.questionWord[0] ? '' : this.props.appState.questionWord[0]} ${this.auxiiliaryVerb()} ${this.props.subject} ${this.props.verb.infinitive} ${this.props.appState.addObject === false ? '' : this.props.appState.object} ${!!!this.props.appState.questionWord[1] ? '' : ' ' + this.props.appState.questionWord[1]} ?`)
    },


    render: function () {
        if (this.props.appState.trainingMode === true) {
            switch (this.props.typeOfSentence) {
                case 'assertion':
                    return <InputAnswer correctAnswer={this.assertionAnswer()} />
                case 'negation':
                    return <InputAnswer correctAnswer={this.negationAnswer()} />
                case 'question':
                    return <InputAnswer correctAnswer={this.questionAnswer()} />
            }
        }


        else {
            switch (this.props.appState.typeOfSentence) {
                case 'assertion':
                    return <div className="tableCell">
                        <RenderSubject subject={capitaliseFirstLetter(this.props.appState.subject.value)} />
                        {/*<span className='subject'>{capitaliseFirstLetter(this.props.subject)}</span>*/}
                        {/*<RenderAdverbialModifierOfIndefiniteTime appState={this.props.appState} render={this.props.appState.adverbialModifiersOfTime.PresentIndefinite}/>*/}
                        {/*если это 'present indefinite' то вспомогательного глагола не требуется*/}
                        {!!(this.props.tense === 'present indefinite') ? null : <RenderAuxiliaryVerb tense={this.props.tense} appState={this.props.appState} />}
                        {this.addBeing()}
                        {this.addHave()}
                        {this.addBeen()}
                        {this.addBe()}
                        <RenderAdverbialModifierOfIndefiniteTime appState={this.props.appState} tense={this.props.tense} />
                        {/*<RenderAuxiliaryVerb tense={this.props.tense} appState={this.props.appState}/>*/}
                        <RenderPredicate tense={this.props.tense} appState={this.props.appState} />
                        {/*<span className='predicate'>{this.addLetterS()}</span>*/}
                        {this.addBy()}
                        <RenderObject appState={this.props.appState} />
                        {/*{this.renderObject()}*/}
                        {/*<RenderObject appState={this.props.appState} />*/}
                        {/*{this.props.appState.addAdverbialModifierOfPlace === false ? '' : <span className='adverbialModifier'>{this.props.appState.adverbialModifierOfPlace}</span>}*/}
                        {/*{this.props.appState.renderAdverbialModifierOfDefiniteTime === false ? '' : <span className='adverbialModifier'>{this.props.appState.renderAdverbialModifierOfDefiniteTime}</span>}*/}
                        {/*{this.renderAdverbialModifierOfPlace()}*/}
                        <RenderAdverbialModifierOfPlace appState={this.props.appState} />
                        <RenderAdverbialModifierOfDefiniteTime appState={this.props.appState} tense={this.props.tense} /> .
                        {/*{this.renderAdverbialModifierOfDefiniteTime()}*/}
                    </div>
                case 'negation':
                    return <div className="tableCell">
                        <RenderSubject subject={capitaliseFirstLetter(this.props.appState.subject.value)} />
                        <RenderAuxiliaryVerb tense={this.props.tense} appState={this.props.appState} />
                        <span className='predicate'>not</span>
                        {this.addBeing()}
                        {this.addHave()}
                        {this.addBeen()}
                        {this.addBe()}
                        <RenderAdverbialModifierOfIndefiniteTime appState={this.props.appState} tense={this.props.tense} />
                        <RenderPredicate tense={this.props.tense} appState={this.props.appState} />
                        {this.addBy()}
                        <RenderObject appState={this.props.appState} />
                        <RenderAdverbialModifierOfPlace appState={this.props.appState} />
                        <RenderAdverbialModifierOfDefiniteTime appState={this.props.appState} tense={this.props.tense} /> .
                    </div>
                case 'question':
                    switch (this.props.appState.questionWord.toString()) {
                        case 'What,subject':
                        case 'Who,subject': // если вопрос к подлежащему, то рендерим без подлежащего, а его роль в предложении играет вопросительное слово
                            return <div className="tableCell">
                                <span className='subject'>{capitaliseFirstLetter(`${!!!this.props.appState.questionWord[0] ? '' : this.props.appState.questionWord[0]}`)}</span>
                                <RenderAuxiliaryVerb tense={this.props.tense} appState={this.props.appState} />
                                {this.addBeing()}
                                {this.addHave()}
                                {this.addBeen()}
                                {this.addBe()}
                                <RenderAdverbialModifierOfIndefiniteTime appState={this.props.appState} tense={this.props.tense} />
                                <RenderPredicate tense={this.props.tense} appState={this.props.appState} />
                                {this.addBy()}
                                <RenderObject appState={this.props.appState} />
                                <RenderAdverbialModifierOfPlace appState={this.props.appState} />
                                <RenderAdverbialModifierOfDefiniteTime appState={this.props.appState} tense={this.props.tense} /> ?
                            </div>
                        case 'What,predicate': // если вопрос к сказуемому, то рендерим без сказуемого и без дополнения, т.к. оно относится к сазуемому (дополняет его), а его роль в предложении играет вопросительное слово
                            return <div className="tableCell">
                                <span className='predicate'>{capitaliseFirstLetter(`${!!!this.props.appState.questionWord[0] ? '' : this.props.appState.questionWord[0]}`)}</span>
                                <RenderAuxiliaryVerb tense={this.props.tense} appState={this.props.appState} />
                                <RenderSubject subject={this.props.appState.subject.value} />
                                {this.addBeing()}
                                {this.addHave()}
                                {this.addBeen()}
                                {this.addBe()}
                                <RenderAdverbialModifierOfIndefiniteTime appState={this.props.appState} tense={this.props.tense} />
                                {this.addDo()}
                                <RenderAdverbialModifierOfPlace appState={this.props.appState} />
                                <RenderAdverbialModifierOfDefiniteTime appState={this.props.appState} tense={this.props.tense} /> ?
                            </div>
                        case 'What,object': // если вопрос к дополнению, то рендерим без дополнения, а его роль в предложении играет вопросительное слово
                            return <div className="tableCell">
                                <span className='object'>{capitaliseFirstLetter(`${!!!this.props.appState.questionWord[0] ? '' : this.props.appState.questionWord[0]}`)}</span>
                                <RenderAuxiliaryVerb tense={this.props.tense} appState={this.props.appState} />
                                <RenderSubject subject={this.props.appState.subject.value} />
                                {this.addBeing()}
                                {this.addHave()}
                                {this.addBeen()}
                                {this.addBe()}
                                <RenderAdverbialModifierOfIndefiniteTime appState={this.props.appState} tense={this.props.tense} />
                                <RenderPredicate tense={this.props.tense} appState={this.props.appState} />
                                <RenderAdverbialModifierOfPlace appState={this.props.appState} />
                                <RenderAdverbialModifierOfDefiniteTime appState={this.props.appState} tense={this.props.tense} />
                                {this.addBy()} ?
                            </div>
                        case 'When': // если вопрос к определению времени, то рендерим без определения, а его роль в предложении играет вопросительное слово
                        case 'How often':
                            return <div className="tableCell">
                                <span className='adverbialModifier'>{capitaliseFirstLetter(`${!!!this.props.appState.questionWord[0] ? '' : this.props.appState.questionWord[0]}`)}</span>
                                <RenderAuxiliaryVerb tense={this.props.tense} appState={this.props.appState} />
                                <RenderSubject subject={this.props.appState.subject.value} />
                                {this.addBeing()}
                                {this.addHave()}
                                {this.addBeen()}
                                {this.addBe()}
                                <RenderPredicate tense={this.props.tense} appState={this.props.appState} />
                                {this.addBy()}
                                <RenderObject appState={this.props.appState} />
                                <RenderAdverbialModifierOfPlace appState={this.props.appState} /> ?
                            </div>
                        case 'Where': // если вопрос к определению места, то рендерим без определения, а его роль в предложении играет вопросительное слово
                            return <div className="tableCell">
                                <span className='adverbialModifier'>{capitaliseFirstLetter(`${!!!this.props.appState.questionWord[0] ? '' : this.props.appState.questionWord[0]}`)}</span>
                                <RenderAuxiliaryVerb tense={this.props.tense} appState={this.props.appState} />
                                <RenderSubject subject={this.props.appState.subject.value} />
                                {this.addBeing()}
                                {this.addHave()}
                                {this.addBeen()}
                                {this.addBe()}
                                <RenderAdverbialModifierOfIndefiniteTime appState={this.props.appState} tense={this.props.tense} />
                                <RenderPredicate tense={this.props.tense} appState={this.props.appState} />
                                {this.addBy()}
                                <RenderObject appState={this.props.appState} />
                                <RenderAdverbialModifierOfDefiniteTime appState={this.props.appState} tense={this.props.tense} /> ?
                            </div>
                        default: // если общий вопрос, то рендерим без вопросительного слова, а его роль в предложении играет вопросительное слово
                            return <div className="tableCell">
                                <RenderAuxiliaryVerb tense={this.props.tense} appState={this.props.appState} />
                                <RenderSubject subject={this.props.appState.subject.value} />
                                {this.addBeing()}
                                {this.addHave()}
                                {this.addBeen()}
                                {this.addBe()}
                                <RenderAdverbialModifierOfIndefiniteTime appState={this.props.appState} tense={this.props.tense} />
                                <RenderPredicate tense={this.props.tense} appState={this.props.appState} />
                                {this.addBy()}
                                <RenderObject appState={this.props.appState} />
                                <RenderAdverbialModifierOfPlace appState={this.props.appState} />
                                <RenderAdverbialModifierOfDefiniteTime appState={this.props.appState} tense={this.props.tense} /> ?
                                {/*<span className='predicate'>{!!!this.props.appState.questionWord[0] ? capitaliseFirstLetter(this.auxiiliaryVerb()) : this.auxiiliaryVerb()}</span>*/}
                            </div>
                    }

            }

        }

    }
})

