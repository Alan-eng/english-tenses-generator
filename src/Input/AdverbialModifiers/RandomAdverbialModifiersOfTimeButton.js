import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    // marginTop: 45,
     marginLeft: 35,
     marginBottom: 20,
};




var RandomAdverbialModifiersOfTimeButton = React.createClass({

    handleOnClick: function () {
        this.props.randomAdverbialModifiersOfTime()
    },

    // onChange всегда вызывается не со скобками!!! внимательно!
    render: function () {
        return (
            <MuiThemeProvider>
                <RaisedButton className='AdverbialModifierOfTimeButton' label="Random Another" style={style} labelStyle={ {fontSize: 20}} onClick={this.handleOnClick} />
            </MuiThemeProvider>
        )
    }
})


export default RandomAdverbialModifiersOfTimeButton;