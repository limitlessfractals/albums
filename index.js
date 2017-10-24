// Import a library to help create a component
import React from 'react';
// import destructuring
<<<<<<< HEAD
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
||||||| merged common ancestors
import { AppRegistry } from 'react-native';
import Header from './src/components/header'
=======
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
>>>>>>> textStyle-debug

// Create a component
const App = () => (
	// jsx: like html, but is part of js.
	// Just a mask over normal function calls. 
	// Try it out at babeljs.io
	// Component nesting
<<<<<<< HEAD
	// Passing props allow 
	// components to be reconfigured on the fly
	// use View tag for wrapping multiple components
	
	<View>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);
||||||| merged common ancestors
	<Header />
	);
=======
	<View>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
	);
>>>>>>> textStyle-debug


// Render it to the device
AppRegistry.registerComponent('albums', () => App);

