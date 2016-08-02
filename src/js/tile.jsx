const React = require('react');
const router = require('react-router');
const Link = router.Link;

const Tile = React.createClass({
  render: function () {
    // TODO: pass the bookmark ID to Tile 
    return (
      <Link to={'/' + bookmarkId}>
        <li className="bookmark-tile">
          <h3>{this.props.title}</h3>
          <img src={this.props.screenshot} alt={this.props.title} />
        </li>
      </Link>
    );
  }
});

module.exports = Tile;
