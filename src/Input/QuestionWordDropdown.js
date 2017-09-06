import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Divider from 'material-ui/Divider';

injectTapEventPlugin();

const styles = {
    customWidth: {
        width: 200,
    },
};

// export var findPreposition = function () {
//     if (this.props.parentState.questionWord.bind(this) !== '') {
//         var questionWordArray = this.props.parentState.questionWord.split(' ');
//         var prepositions = ['with', 'for', 'like', 'about', 'by']
//         for (let i = 0; i < prepositions.length; i++) {
//             if (findPreposition[1] === prepositions[i]) {
//                 console.log('в этом вопросительном слове есть предлог' + prepositions[i])
//             }

//         }
//     }
// }


export var QuestionWordDropdown = React.createClass({
    getInitialState: function () {
        return {
            value: 'general'
        }
    },

    handleChange: function (event, index, value) {
        this.props.handleQuestionWord(value.split(',')) // функция меняющаяя состояние родителя
        // var makeString = 
        this.setState({ value }) // функция отображающая нужное меню 
    },

    componentWillReceiveProps: function () {
        if (this.props.disabled) {
            this.setState({ value: 'general' })
        }
    },

    renderNoteUnderDropdown: function () {
        if (this.props.appState.typeOfSentence === 'question') {
            switch (this.state.value) {
                case 'Who,subject':
                case 'What,subject':
                    return <span>Question to the <span style={{ color: "#00BCD4" }}>Subject</span></span>
                case 'Who,subject':
                case 'What,predicate':
                    return <span>Question to the <span style={{ color: "#00BCD4" }}>Predicate</span></span>
                case 'What,object':
                    return <span>Question to the <span style={{ color: "#00BCD4" }}>Object</span></span>
                case 'When':
                case 'How often':
                    return <span>Question to the <span style={{ color: "#00BCD4" }}>Adverbial Modifier of Time</span></span>
                case 'Where':
                    return <span>Question to the <span style={{ color: "#00BCD4" }}>Adverbial Modifier of Place</span></span>
            }
        }
    },


    //where - это и 'где? и куда? и откуда?'
    render() {
        return (
            <div style={{ display: 'inline-block',  verticalAlign: 'text-bottom', width: 200, }}>
                <MuiThemeProvider>
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={styles.customWidth}
                        autoWidth={false}
                        onTouchTap={this.props.onTouchTap}
                        disabled={this.props.disabled}
                        maxHeight={700}
                    >
                        <MenuItem value={'general'} primaryText="General question" />
                        <Divider />
                        <div style={{ paddingLeft: '1em', paddingBottom: '0.5em', color: '#bababa' }}> Questions to the subject: </div>
                        <MenuItem value={"Who,subject"} primaryText="Who?" />
                        <MenuItem value={"What,subject"} primaryText="What?" />
                        <Divider />
                        <div style={{ paddingLeft: '1em', paddingBottom: '0.5em', color: '#bababa' }}> Questions to the predicate: </div>
                        <MenuItem value={"What,predicate"} primaryText="What?" />
                        <Divider />
                        <div style={{ paddingLeft: '1em', paddingBottom: '0.5em', color: '#bababa' }}> Questions to the object: </div>
                        <MenuItem value={"What,object"} primaryText="What?" />
                        <Divider />
                        <div style={{ paddingLeft: '1em', paddingBottom: '0.5em', color: '#bababa' }}> Questions to the adverbial modifier of time: </div>
                        <MenuItem value={"When"} primaryText="When?" />
                        <MenuItem value={"How often"} primaryText="How often?" />
                        <Divider />
                        <div style={{ paddingLeft: '1em', paddingBottom: '0.5em', color: '#bababa' }}> Questions to the adverbial modifier of place: </div>
                        <MenuItem value={"Where"} primaryText="Where?" />

                        {/*<MenuItem value={"What kind"} primaryText="What kind?" />
                        <MenuItem value={"What type"} primaryText="What type?" />
                        <MenuItem value={"What sort"} primaryText="What sort?" />
                        <MenuItem value={"What time"} primaryText="What time?" />
                        <MenuItem value={"What color"} primaryText="What color?" />
                        <Divider />
                        <MenuItem value={'What,like'} primaryText="What...like?" />
                        <MenuItem value={'What,for'} primaryText="What...for?" />
                        <MenuItem value={'What,about'} primaryText="What...about?" />
                        <MenuItem value={'What,with'} primaryText="What...with?" />

                        <Divider />
                        <MenuItem value={"Where"} primaryText="Where?" />
                        <Divider />
                        <MenuItem value={"Whom"} primaryText="Whom?" />
                        <Divider />
                        <MenuItem value={"Whose"} primaryText="Whose?" />*/}
                    </DropDownMenu>
                </MuiThemeProvider>
                <div>{this.renderNoteUnderDropdown()}</div>

            </div>
        );
    }
})