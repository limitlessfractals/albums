// Import libraries
import React from 'react';
import { Text } from 'react-native';

// Create a component
const Header = () => {
    const { textStyle } = styles;
    return <Text style={textStyle}>Albums</Text>;
};

const styles = {
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to othre parts of the app
export default Header;
