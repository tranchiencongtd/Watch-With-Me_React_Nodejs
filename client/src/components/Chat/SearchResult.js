import React, { Component } from "react";

import "./SearchResults.css";

export class SearchResult extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isLoaded: false,
    //   listResults: []
    // };
  }



  // async getResults() {
  //     try {
  //       const results = await axios.get('https://youtube.googleapis.com/youtube/v3/search',{
  //         params: {
  //           part: 'snippet',
  //           maxResults: 10,
  //           q: this.props.query,
  //           key: API
  //         }
  //       });
  //       this.setState({
  //         isLoaded: true,
  //         listResults: results.data.items
  //       });
  //     } catch(err) {
  //       console.log('Failed to fetch data');
  //       this.setState({
  //         isLoaded: false
  //       });
  //     }
  // }


  showResult() {
    let markup = this.props.listResults.map( el => (
      <a key={el.id.videoId} data-id={el.id.videoId} className="list-group-item" onClick={this.props.action}> 
      <img className="select d-none d-lg-inline-block" src={el.snippet.thumbnails.default.url} />
      <h5>{el.snippet.title}</h5>
    </a>
    ));
    return markup;
  }

  render() {
    if(this.props.isLoaded) {
      return (
        <div>
          <div className="list-group search-results style-3">
            {this.showResult()}
          </div>
        </div>
      );
    } 

    return (
      <div>
        <div className="list-group search-results style-3">
        </div>
      </div>
    );
  }
}

export default SearchResult;