// import React from 'react';

import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { term: ""}
  }
  render (){
    return (
      <div>
    <input onChange={event => this.setState({ term: event.target.value})}/>
    {this.state.term}
    </div>
    );
  }
}

export default SearchBar;
