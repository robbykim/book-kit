const React = require('react');
const router = require('react-router');
const Link = router.Link;

const Tile = React.createClass({
  render: function () {
    // TODO: pass the bookmark ID to Tile
    return (
      <Link to={'/bookmarks/' + this.props.id}>
        <li className="bookmark-tile" onClick={() => this.props.onFocus(this.props.id)}>
          <h3>{this.props.title}</h3>
          <img src={this.props.screenshot} alt={this.props.title} />
        </li>
      </Link>
    );
  }
});

module.exports = Tile;
