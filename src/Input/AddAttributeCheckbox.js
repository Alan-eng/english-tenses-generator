import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    block: {
        maxWidth: 250,
        minWidth: 250,
    },
    checkbox: {
        marginBottom: 20,
    },
};

// Определением (The Attribute) называется второстепенный член предложения, который обозначает признак предмета и отвечает на вопросы какой? чей? который? какой? сколько? Определение обычно относится к существительному. Значительно реже оно относится к местоимениям-существительным.

export var AddAttributeCheckbox = React.createClass({

    handleOptionCheck: function (changeEvent) {
        this.props.handleAddObjectCheckbox()
    },

    // onChange всегда вызывается не со скобками!!! внимательно!
    render: function () {
        return (
            <MuiThemeProvider>
                <div className='addAttributeCheckboxTip'>
                    <div style={styles.block}>
                        <Checkbox
                            label="Add Attribute"
                            style={styles.checkbox}
                            disabled={true}
                        />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
})

