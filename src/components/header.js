// Import libraries
import React from 'react';
import { Text, View } from 'react-native';

// Create a component
<<<<<<< HEAD
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>;
        </View>
    );
||||||| merged common ancestors
const Header = () => {
    const { textStyle } = styles;
    return <Text style={textStyle}>Albums</Text>;
=======
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
>>>>>>> textStyle-debug
};

const styles = {
<<<<<<< HEAD
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
||||||| merged common ancestors
=======
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
>>>>>>> textStyle-debug
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to other parts of the app
export default Header;
