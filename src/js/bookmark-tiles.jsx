const React = require('react');
const Tile = require('./bookmark-child-tile');
const connect = require('react-redux').connect;

// COMPONENT: Displays the collection of tiles on the main page
const BookmarkTiles = React.createClass({
  render: function () {
    let tileArr = [];
    if (this.props.params.folderName) {
      let folder = this.props.params.folderName;
      let tempArr = this.props.bookmarks.filter(function(bookmark) {
        return folder === bookmark.foldername;
      });
      tempArr.forEach(function(bookmark) {
        tileArr.push(<Tile key={bookmark.bookmarkid} title={bookmark.title}
                      id={bookmark.bookmarkid} screenshot={bookmark.screenshot}/>);
      });
    } else if (this.props.params.input) {

    } else {
      // Makes an array of Tile components to be displayed
      this.props.bookmarks.forEach(function(bookmark) {
        tileArr.push(<Tile key={bookmark.bookmarkid} title={bookmark.title}
                      id={bookmark.bookmarkid} screenshot={bookmark.screenshot}/>);
      });
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
