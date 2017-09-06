import React, { Component } from 'react';
import { capitaliseFirstLetter } from './../../App'
import { vowels } from './../../VerbFormCheck/vowels'

export var RenderPredicate = React.createClass({

    addLetterS: function () {          //добавить окончание s глаголу, если нужно
        if (this.props.appState.verb.infinitive == 'be') { //если это глагол be то вызываем функцию checkVerbBe() и на этом заканчиваем
            var subject = this.props.appState.subject.value.toLowerCase();
            // if (this.props.verb.infinitive == 'be') {
            switch (subject) {
                case 'i':
                    return 'am'
                case 'you':
                    return 'are'
                case 'he':
                case 'she':
                case 'it':
                    return 'is'
                case 'we':
                case 'they':
                    return 'are';
                // default:
                //     return 'is'
                // }
            }
            if (this.props.appState.subjectIsSingle === false) { return 'are' }
            else { return 'is' }
        }
        if (this.props.appState.verb.infinitive == 'have') { 
            var subject = this.props.appState.subject.value.toLowerCase();
            switch (subject) {
                case 'i':
                case 'you':
                    return 'have'
                case 'he':
                case 'she':
                case 'it':
                    return 'has'
                case 'we':
                case 'they':
                    return 'have';
            }
            if (this.props.appState.subjectIsSingle === false) { return 'have' }
            else { return 'has' }
        }

        var subject = this.props.appState.subject.value.toLowerCase();
        switch (subject) { // условие, при котором НЕ добавляем S
            case 'i':
            case 'you':
            case 'we':
            case 'they':
                return this.props.appState.verb.infinitive
        }
        if (this.props.appState.subjectIsSingle === false) { return this.props.appState.verb.infinitive }
        // условие, при котором добавляем S или ES    
        var lastChar = this.props.appState.verb.infinitive[this.props.appState.verb.infinitive.length - 1]; // Если существительное или инфинитив глагола оканчивается на -o или –sh, -ch, -x, -ss, -tch, тогда к слову прибавляется окончание –es.
        var beforeLastChar = this.props.appState.verb.infinitive[this.props.appState.verb.infinitive.length - 2]
        var last2Char = beforeLastChar + lastChar;
        switch (last2Char) {
            case 'sh':
            case 'ch':
            case 'ss':
            case 'es':
                return (this.props.appState.verb.infinitive + 'es')
        }
        switch (lastChar) {
            case 'o':
            case 'x':
            case 's':
                return (this.props.appState.verb.infinitive + 'es')
        }
        if ((lastChar === 'y') && (beforeLastChar.indexOf(vowels) === -1)) { //Если существительное или инфинитив глагола оканчивается на -y с предшествующей согласной, то прибавляется окончание –es, при этом происходит замена –y на -i (baby - babies, fly - flies)
            return (this.props.appState.verb.infinitive.slice(0, (this.props.appState.verb.infinitive.length - 1)) + 'i' + 'es')
        }
        return (this.props.appState.verb.infinitive + 's') // по умолчанию добавляем S всегда

    },



    perdicateForm: function () {
        switch (this.props.tense) {
            case 'present indefinite':
                switch (this.props.appState.typeOfSentence) {
                    case 'assertion':
                        return this.addLetterS()
                    default:
                        return this.props.appState.verb.infinitive
                }
            case 'past indefinite':
                switch (this.props.appState.typeOfSentence) {
                    case 'assertion':
                        return this.props.appState.verb.pastIndefinite
                    default:
                        return this.props.appState.verb.infinitive
                }
            case 'future indefinite':
            case 'future in the past indefinite':
                return this.props.appState.verb.infinitive

            case 'present continious':
            case 'past continious':
            case 'future continious':
            case 'future in the past continious':
                return this.props.appState.verb.participle

            case 'present perfect':
            case 'past perfect':
            case 'future perfect':
            case 'future in the past perfect':
                return this.props.appState.verb.participleII

            case 'present perfect continious':
            case 'past perfect continious':
            case 'future perfect continious':
            case 'future in the past perfect continious':
                return this.props.appState.verb.participle
            // Passive Voice Tenses
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
                return this.props.appState.verb.participleII

        }
    },

    render: function () {
        return <span className='predicate'>{this.perdicateForm()}</span>
    },
})