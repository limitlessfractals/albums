// Import a library to help create a component
import React from 'react';
// import destructuring
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
	// jsx: like html, but is part of js.
	// Just a mask over normal function calls. 
	// Try it out at babeljs.io
	// Component nesting
	// Passing props allow 
	// components to be reconfigured on the fly
	// use View tag for wrapping multiple components
	<View>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
	);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);

