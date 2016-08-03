const React = require('react');
const router = require('react-router');
const Link = router.Link;

// COMPONENT: Displays the individual Tiles of bookmarks on the main page
const Tile = React.createClass({
  render: function () {
    return (
      // Will route to /bookmarks/:bookmarkId
      <Link to={'/bookmarks/' + this.props.id}>
        <li className="bookmark-tile">
          <h3>{this.props.title}</h3>
          <img src={this.props.screenshot} alt={this.props.title} />
        </li>
      </Link>
    );
  }
});

module.exports = Tile;
