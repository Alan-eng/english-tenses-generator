import React, { Component } from 'react';
import { capitaliseFirstLetter } from './../../App'
import { vowels } from './../../VerbFormCheck/vowels'

export var RenderAuxiliaryVerb = React.createClass({

    makeCapitalLetter: function (auxVerb) { // делаем большую букву только, если у нас General Question 
        if (this.props.appState.questionWord.toString() === 'general' && this.props.appState.typeOfSentence === 'question') {
            return <span className='predicate'>{capitaliseFirstLetter(auxVerb)}</span>
        }
        return <span className='predicate'>{auxVerb}</span>

    },

    render: function () {
        var subject = this.props.appState.subject.value.toLowerCase();
        // return 'Эта хуйня работает'
        switch (this.props.tense) {
            case 'present indefinite':
                // return function () {
                // var subject = this.props.appState.subject.value.toLowerCase();
                switch (subject) { // проверяем на все стандартные местоимения, если совпадений нет - то смотрим в единственном ли числе подлежащее? this.props.appState.subjectIsSingle
                    case 'i':
                    case 'you':
                    case 'we':
                    case 'they':
                        return this.makeCapitalLetter('do')
                    case 'he':
                    case 'she':
                    case 'it':
                        return this.makeCapitalLetter('does')
                }
                if (this.props.appState.subjectIsSingle === false) { return this.makeCapitalLetter('do') }
                else { return this.makeCapitalLetter('does') }
            // }
            case 'present continious':
                switch (subject) {
                    case 'i':
                        return this.makeCapitalLetter('am');
                    case 'he':
                    case 'she':
                    case 'it':
                        return this.makeCapitalLetter('is');
                    case 'we':
                    case 'they':
                        return this.makeCapitalLetter('are');
                }
                if (this.props.appState.subjectIsSingle === false) { return this.makeCapitalLetter('are') }
                return this.makeCapitalLetter('is')

            case 'present perfect':
            case 'present perfect continious':
                switch (subject) {
                    case 'i':
                    case 'we':
                    case 'they':
                        return this.makeCapitalLetter('have');
                    case 'he':
                    case 'she':
                    case 'it':
                        return this.makeCapitalLetter('has');
                }
                if (this.props.appState.subjectIsSingle === false) { return this.makeCapitalLetter('have') }
                return this.makeCapitalLetter('has')
            case 'past indefinite':
                switch (this.props.appState.typeOfSentence) {
                    case 'assertion':
                        return null
                    default:
                        return this.makeCapitalLetter('did')
                }
            case 'past continious':
                switch (subject) {
                    case 'i':
                    case 'he':
                    case 'she':
                    case 'it':
                        return this.makeCapitalLetter('was');
                    case 'we':
                    case 'they':
                    case 'you':
                        return this.makeCapitalLetter('were');
                }
                if (this.props.appState.subjectIsSingle === false) { return this.makeCapitalLetter('were') }
                return this.makeCapitalLetter('was')
            case 'past perfect':
            case 'past perfect continious':
                return this.makeCapitalLetter('had')
            case 'future indefinite':
            case 'future continious':
            case 'future perfect':
            case 'future perfect continious':
                return this.makeCapitalLetter('will')
            case 'future in the past indefinite':
            case 'future in the past continious':
            case 'future in the past perfect':
            case 'future in the past perfect continious':
                return this.makeCapitalLetter('would')


            // Passive Voice
            case 'present indefinite passive':
            case 'present continious passive':
                switch (subject) { // проверяем на все стандартные местоимения, если совпадений нет - то смотрим в единственном ли числе подлежащее? this.props.appState.subjectIsSingle
                    case 'i':
                        return this.makeCapitalLetter('am')
                    case 'you':
                    case 'we':
                    case 'they':
                        return this.makeCapitalLetter('are')
                    case 'he':
                    case 'she':
                    case 'it':
                        return this.makeCapitalLetter('is')
                }
                if (this.props.appState.subjectIsSingle === false) { return this.makeCapitalLetter('are') }
                else { return this.makeCapitalLetter('is') }
            case 'present perfect passive':
                switch (subject) {
                    case 'i':
                    case 'we':
                    case 'they':
                        return this.makeCapitalLetter('have');
                    case 'he':
                    case 'she':
                    case 'it':
                        return this.makeCapitalLetter('has');
                }
                if (this.props.appState.subjectIsSingle === false) { return this.makeCapitalLetter('have') }
                return this.makeCapitalLetter('has')
            case 'past indefinite passive':
            case 'past continious passive':
                switch (subject) {
                    case 'i':
                    case 'he':
                    case 'she':
                    case 'it':
                        return this.makeCapitalLetter('was');
                    case 'we':
                    case 'they':
                        return this.makeCapitalLetter('were');
                }
                if (this.props.appState.subjectIsSingle === false) { return this.makeCapitalLetter('were') }
                return this.makeCapitalLetter('was')
            case 'past perfect passive':
                return this.makeCapitalLetter('had')
            case 'future indefinite passive':
            case 'future perfect passive':
                return this.makeCapitalLetter('will')
            case 'future in the past indefinite passive':
            case 'future in the past perfect passive':
                return this.makeCapitalLetter('would')
            default:
                return null
        }
    }

})