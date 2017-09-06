import { vowels } from './vowels'
export var makeParticiple = function (text) {
    var lastChar = text[text.length - 1]
    var beforeLastChar = text[text.length - 2]
    var exceptions = ['lie', 'die', 'tie']
    var exceptionIndex = exceptions.indexOf(text)
    var exceptionReplacement = ['lying', 'dying', 'tying']
    if (lastChar === 'y') { return (text + 'ing') } // Если инфинитив заканчивается на –y, то окончание –ing просто добавляется к инфинитиву.
    if (lastChar === 'w') { return (text + 'ing') }
    if (lastChar === 'd') { return (text + 'ing') }
    if (lastChar === 's') { return (text + 'ing') }
    if (lastChar === 'g') { return (text + 'ing') }
    if (exceptionIndex > -1) { return exceptionReplacement[exceptionIndex] }
    if (text.toLowerCase() === 'be') { // у глагола be как всегда все по-особенному
        return ('be' + 'ing')
    }
    if (lastChar === 'e' && beforeLastChar !== 'e') { //Если инфинитив оканчивается на немое –e, то перед окончанием –ing оно опускается.
        return (text.slice(0, (text.length - 1)) + 'ing')
    }
    else if (lastChar === 'x') {
        return (text + 'ing')
    }
    else if ((vowels.indexOf(lastChar) === -1)) { //Если односложный инфинитив оканчивается на одну согласную
        if (vowels.indexOf(beforeLastChar) !== -1) { // которой предшествует одна гласная
            return (text + lastChar + 'ing') //, то конечная согласная удваивается.
        } 
    }
    else if ((vowels.indexOf(lastChar) === -1) && (beforeLastChar > -1)) { //Если односложный инфинитив оканчивается на одну согласную, которой предшествует одна гласная, то конечная согласная удваивается.
        return (text + lastChar + 'ing')
    }
    return (text + 'ing')  // Стандартный случай прибавления окончания -ing к инфинитиву глагола.
}

