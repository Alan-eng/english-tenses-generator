import { vowels } from './vowels'
export var makePastParticiple = function (text) {
    var lastChar = text[text.length - 1]
    var beforeLastChar = text[text.length - 2]
    if (lastChar === 'y' && (vowels.indexOf(beforeLastChar) == -1)) {
        return (text.slice(0, (text.length - 1)) + 'i' + 'ed') //Если инфинитив оканчивается на –y с предшествующей согласной, y переходит в i.
        // Но если перед -y стоит гласная, то y сохраняется. (play - played, stay - stayed)
    }

    else if (lastChar === 'e') { //Если инфинитив оканчивается на немое –e или –ee, то прибавляется только –d (translate - translated, agree - argeed)
        return (text.slice(0, (text.length - 1)) + 'ed')
    } 
    
    else if (lastChar === 'x') { //Если инфинитив оканчивается на -x, то буква x не удваивается, т.к. она передает два звука [ks или gz]. ( relax - relaxed )
        return (text + 'ed')
    }

     else if (lastChar === 'k' || lastChar === 'd' || lastChar === 't' || lastChar === 's') { //удвоение буквы k тоже как-то не очень выглядит
        return (text + 'ed')
    }

    else if (vowels.indexOf(lastChar) === -1) { // Если двусложный/многосложный инфинитив оканчивается на одну согласную, перед которой стоит одна гласная, то конечная согласная удваивается (refer - referred)
        return (text + lastChar + 'ed')
    }
        
    else return (text + 'ed')  // Стандартный случай прибавления окончания -ing к инфинитиву глагола.
}

