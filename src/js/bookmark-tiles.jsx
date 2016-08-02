var React = require('react');
var Tile = require('./tile');

var BookmarkTiles = React.createClass({
  onFocus: function () {
    // TODO: add dispatch function here
    // this.props.dispatch
    // this will be a route
  },
  render: function () {
    var tileArr = [];
    // list of bookmarks passed into props
    // this.props.bookmarks.forEach(function (bookmark, index) {
    //   tileArr.push(<Tile key={index} onFocus={this.onFocus} title={bookmark.title}
    //     url={bookmark.url} screenshot={bookmark.screenshot}/>);
    // });
    return (
      <section className="tile-section">
        <ul>
          {tileArr}
        </ul>
      </section>
    );
  }
});

module.exports = BookmarkTiles;
