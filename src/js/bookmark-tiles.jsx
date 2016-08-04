const React = require('react');
const Tile = require('./bookmark-child-tile');
const connect = require('react-redux').connect;

// COMPONENT: Displays the collection of tiles on the main page
const BookmarkTiles = React.createClass({
  render: function () {
    let tileArr = [];
    // Makes an array of Tile components to be displayed
    this.props.bookmarks.forEach(function(bookmark) {
      tileArr.push(<Tile key={bookmark.bookmarkid} title={bookmark.title}
                    id={bookmark.bookmarkid} screenshot={bookmark.screenshot}/>);
    });
    
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

const Container = connect(mapStateToProps)(BookmarkTiles);

module.exports = Container;
