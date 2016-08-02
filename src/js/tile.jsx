var React = require('react');

var Tile = React.createClass({
  render: function () {
    // TODO: add this.props.onFocus
    return (
      <li className="bookmark-tile" onClick={this.props.onFocus}>
        <h3>{this.props.title}</h3>
        <img src={this.props.screenshot} alt={this.props.title} />
      </li>
    );
  }
});

module.exports = Tile;
