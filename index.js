// Import a library to help create a component
import React from 'react';
// import destructuring
import { AppRegistry } from 'react-native';
import Header from './src/components/header'

// Create a component
const App = () => (
	// jsx: like html, but is part of js.
	// Just a mask over normal function calls. 
	// Try it out at babeljs.io
	// Component nesting
	<Header />
	);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);

