const React = require('react');
const Tile = require('./tile');
const connect = require('react-redux').connect;
const actions = require('./actions');
const BookmarkView = require('./bookmark-view');

// COMPONENT: Displays the collection of tiles on the main page
const BookmarkTiles = React.createClass({
  render: function () {
    let tileArr = [];
    // Makes an array of Tile components to be displayed
    for (let i = 0; i < this.props.bookmarks.length; i++) {
      const bookmark = this.props.bookmarks[i];
      tileArr.push(<Tile key={bookmark.bookmarkid} title={bookmark.title}
                    id={bookmark.bookmarkid} screenshot={bookmark.screenshot}/>);
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

const Container = connect(mapStateToProps)(BookmarkTiles);

module.exports = Container;
