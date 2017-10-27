// Import a library to help create a component
import React from 'react';
// import destructuring
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
	// jsx: like html, but is part of js.
	// Just a mask over normal function calls. 
	// Try it out at babeljs.io
	// Component nesting
	// flex: 1 for ScrollView
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
	);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);

