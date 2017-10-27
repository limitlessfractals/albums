import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
   // init empty array as component level state
   // state is only for class based components
   state = { albums: [] };
   // use setState rather than = to modify state
   componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
   }

   renderAlbums() {
      // ideally key should be ID
      return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
   }

   render() {
      console.log(this.state);
      return (
         <ScrollView>
            {this.renderAlbums()}
         </ScrollView>
      );
   }
}

export default AlbumList;
