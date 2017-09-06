import React, { Component } from 'react';

export var RenderAdverbialModifierOfIndefiniteTime = React.createClass({

    checkIsAdverbialModifierOfIndefiniteTime: function (e) { //проверка является ли определение времени - определением НЕОПРЕДЕЛЕННОГО ВРЕМЕНИ или нет
        switch (e) {
            case 'usually':
            case 'often':
            case 'always':
            case 'sometimes':
            case 'seldom':
            case 'never':
            case 'just':
            case 'already':
            case 'since':
            case 'recently':
            case 'never':
            case 'ever':
                return <span className='adverbialModifier'>{e}</span>
        }
        return null
    },

    render: function () {

        if (this.props.appState.addAdverbialModifierOfTime === true) {
            switch (this.props.tense) {
                case 'present indefinite':
                case 'present indefinite passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.PresentIndefinite)
                case 'present continious':
                case 'present continious passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.PresentContinious)
                case 'present perfect':
                case 'present perfect passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.PresentPerfect)
                case 'present perfect continious':
                case 'present perfect continious passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.PresentPerfectContinious)
                case 'past indefinite':
                case 'past indefinite passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.PastIndefinite)
                case 'past continious':
                case 'past continious passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.PastContinious)
                case 'past perfect':
                case 'past perfect passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.PastPerfect)
                case 'past perfect continious':
                case 'past perfect continious passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.PastPerfectContinious)
                case 'future indefinite':
                case 'future indefinite passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.FutureIndefinite)
                case 'future continious':
                case 'future continious passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.FutureContinious)
                case 'future perfect':
                case 'future perfect passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.FuturePerfect)
                case 'future perfect continious':
                case 'future perfect continious passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.FuturePerfectContinious)
                case 'future in the past indefinite':
                case 'future in the past indefinite passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.FutureIndefiniteInThePast)
                case 'future in the past continious':
                case 'future in the past continious passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.FutureContiniousInThePast)
                case 'future in the past perfect':
                case 'future in the past perfect passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.FuturePerfectInThePast)
                case 'future in the past perfect continious':
                case 'future in the past perfect continious passive':
                    return this.checkIsAdverbialModifierOfIndefiniteTime(this.props.appState.adverbialModifiersOfTime.FuturePerfectContiniousInThePast)

            }
        }
        return null

    }
})