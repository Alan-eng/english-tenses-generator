import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    block: {
        width: 250,
        // display: 'flex'
    },
    checkbox: {
        // marginBottom: 20,
        // marginTop: 50,
    },
};

export var AddObjectCheckbox = React.createClass({

    handleOptionCheck: function (changeEvent) {
        this.props.handleAddObjectCheckbox()
    },

    // onChange всегда вызывается не со скобками!!! внимательно!
    render: function () {
        return (
            <MuiThemeProvider>
                <div className='addObjectCheckboxTip'>
                    <div style={styles.block}>
                        <Checkbox
                            onCheck={this.handleOptionCheck}
                            label="Add Object"
                            style={styles.checkbox}
                        />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
})

