var React = require('react');
var Tile = require('./tile');
var connect = require('react-redux').connect;
var actions = require('./actions');
var BookmarkView = require('./bookmark-view');

// COMPONENT: Displays the collection of tiles on the main page
var BookmarkTiles = React.createClass({
  render: function () {
    var tileArr = [];
    // Makes an array of Tile components to be displayed
    for (var i = 0; i < this.props.bookmarks.length; i++) {
      var bookmark = this.props.bookmarks[i];
      tileArr.push(<Tile key={bookmark.id} title={bookmark.title} index={i} id={bookmark.id}
                    url={bookmark.url} screenshot={bookmark.screenshot}/>);
    }
    return (
      <section className="tile-section">
        <ul>
          {tileArr}
        </ul>
      </section>
    );
  }
});

const mapStateToProps = function(state, props) {
  return {
    bookmarks: state.bookmarks
  };
};

var Container = connect(mapStateToProps)(BookmarkTiles);

module.exports = Container;

// TODO: connect state to folders and bookmark tiles
// TODO: write the fetch requests
// TODO: test front end to make sure it will work and be ready for API's
