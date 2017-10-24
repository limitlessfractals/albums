<<<<<<< HEAD
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
   componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log(response));
   }
   render() {
      return (
         <View>
            <Text>ALbum List!!</Text>
         </View>
      );
   }
}

export default AlbumList;
||||||| merged common ancestors
=======
import React from 'react';
import { View, Text } from 'react-native';

const AlbumList = () => {
   return (
      <View>
         <Text>Album List!!</Text>
      </View>
   );
};

export default AlbumList;
>>>>>>> textStyle-debug
