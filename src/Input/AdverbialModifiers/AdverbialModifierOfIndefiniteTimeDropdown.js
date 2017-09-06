import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

// injectTapEventPlugin();

const styles = {
    customWidth: {
        width: 200,
        fontSize: 28
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


export var AdverbialModifierOfIndefiniteTimeDropdown = React.createClass({
    getInitialState: function () {
        return {
            value: this.props.appState.adverbialModifierOfIndefiniteTime
        }
    },

    handleChange: function (event, index, value) {
        this.props.handleAdverbialModifierOfIndefiniteTime(value) // функция меняющаяя состояние родителя
        // var makeString = 
        this.setState({ value }) // функция отображающая нужное меню 
    },

    componentWillReceiveProps: function () {
        if (this.props.disabled) {
            this.setState({ value: '' })
        }
    },


    //where - это и 'где? и куда? и откуда?'
    render() {
        return (
            <div style={{ width: '200px' }}>
                <div style={{ fontSize: '21px', marginTop: '-0.8em', lineHeight: '1em', color: 'rgba(0, 0, 0, 0.3)' }}>
                    Adverbial Modifier Of Indefinite Time (when?)
                </div>
                <MuiThemeProvider>
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={styles.customWidth}
                        autoWidth={false}
                        onTouchTap={this.props.onTouchTap}
                        disabled={this.props.disabled}
                    >

                        <div style={{ paddingLeft: '1em', paddingBottom: '0.5em', color: '#bababa' }}> Present Indefinite </div>
                        <MenuItem
                            value={'Present Indefinite'}
                            primaryText="Present Indefinite"
                            rightIcon={<ArrowDropRight />}
                            menuItems={[
                                <MenuItem
                                    primaryText="Show"
                                    rightIcon={<ArrowDropRight />}
                                    menuItems={[
                                        <MenuItem primaryText="Show Level 2" />,
                                        <MenuItem primaryText="Grid lines" checked={true} />,
                                        <MenuItem primaryText="Page breaks" insetChildren={true} />,
                                        <MenuItem primaryText="Rules" checked={true} />,
                                    ]}
                                />,
                                <MenuItem primaryText="Grid lines" checked={true} />,
                                <MenuItem primaryText="Page breaks" insetChildren={true} />,
                                <MenuItem primaryText="Rules" checked={true} />,
                            ]} />
                        <MenuItem value={'usually'} primaryText="usually" />
                        <MenuItem value={"always"} primaryText="always" />
                        <MenuItem value={"often"} primaryText="often" />
                        <MenuItem value={"sometimes"} primaryText="sometimes" />
                        <MenuItem value={"seldom"} primaryText="seldom" />
                        <MenuItem value={"never"} primaryText="never" />
                        <Divider />
                        <MenuItem value={"ever"} primaryText="ever" />
                        <MenuItem value={"just"} primaryText="just" />
                        <MenuItem value={"already"} primaryText="already" />
                        <MenuItem value={"soon"} primaryText="soon" />
                    </DropDownMenu>
                </MuiThemeProvider>
            </div>
        );
    }
})