import React from 'react';
//imports .css file
import './BusinessList.css';
//imports Business from the business file
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return
    (
      <div className="BusinessList">
  <Business />
  <Business />
  <Business />
  <Business />
  <Business />
  <Business />
</div>
);
  }
}

export default BusinessList;
