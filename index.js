// Import a library to help create a component
import React from 'react';
// import destructuring
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
	// jsx: like html, but is part of js.
	// Just a mask over normal function calls. 
	// Try it out at babeljs.io
	<Text>Some text</Text>
	);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);

