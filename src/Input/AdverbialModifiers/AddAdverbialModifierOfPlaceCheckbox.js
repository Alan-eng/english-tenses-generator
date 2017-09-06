import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    block: {
        width: 250,
    },
    checkbox: {
        marginBottom: 20,
    },
};

// Обстоятельствами (The Adverbial Modifier) называются второстепенные члены предложения, которые обозначают, как или при каких обстоятельствах (т.е. где, когда, почему, зачем и т.п.) совершается действие. Обстоятельства обычно относятся к глаголу. обычно находится в конце или в начале предложения, однако оно встречается и в средине предложения (чаще всего в виде наречия неопределенного времени). Существительные, входящие в состав обстоятельства, обычно имеют определенный артикль.
// где? когда? почему? зачем?
export var AddAdverbialModifierOfPlaceCheckbox = React.createClass({

    handleOptionCheck: function (changeEvent) {
        this.props.handleAdverbialModifierOfPlaceCheckbox()
    },

    // onChange всегда вызывается не со скобками!!! внимательно!
    render: function () {
        return (
            <MuiThemeProvider>
                <div className='addAdverbalModifierOfPlaceCheckboxTip'>
                    <div style={styles.block}>
                        <Checkbox
                            onCheck={this.handleOptionCheck}
                            label="Add Adverbial Modifier Of Place"
                            style={styles.checkbox}
                        />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
})

