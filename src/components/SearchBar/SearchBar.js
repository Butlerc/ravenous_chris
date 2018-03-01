import React from 'react';
//import ReactDOM from 'react-dom';
//imports .css file
import './SearchBar.css';
//see api https://www.yelp.com/developers/documentation/v3/business_search
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
let sortByOptionValue = sortByOptions[sortByOption];
return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

    render() {
      return
      (<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
        {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Lets Go</a>
  </div>
</div>
);
    }
  }

export default SearchBar;
