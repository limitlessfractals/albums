import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
   //init empty array as component level state
   state = { albums: [] };
   // use setState rather than = to modify state
   componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
   }

   render() {
      console.log(this.state);
      return (
         <View>
            <Text>Album List!!</Text>
         </View>
      );
   }
}

export default AlbumList;
