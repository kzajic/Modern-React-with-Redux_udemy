import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = "AIzaSyCWAm1hi8hCgG2PaPaCj3apQ539xkxQdC0";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTsearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos : videos});
    })
  }
  render() {
    return (
        <div>
          <SearchBar />
          <VideoList videos={this.state.videos}/>
        </div>
      );
    }

};

ReactDOM.render(<App />, document.querySelector('.container'));
