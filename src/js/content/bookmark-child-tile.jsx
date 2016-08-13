import React from 'react';
import { Link } from 'react-router';

// COMPONENT: Displays the individual Tiles of bookmarks on the main page
const Tile = React.createClass({
  render: function () {
    var style = {
      backgroundImage: 'url(' + this.props.screenshot + ')'
    };
    return (
      // Will route to /bookmarks/:bookmarkId
      <Link to={'/bookmarks/' + this.props.id}>
        <li className="bookmark-tile col-md-3">
          <h3>
            <div className="bg" style={style}></div>
            <span>
              {this.props.title}
            </span>
          </h3>
        </li>
      </Link>
    );
  }
});

module.exports = Tile;
