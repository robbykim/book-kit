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
    } else if (this.props.search) {
      let search = new RegExp(this.props.search);
      let tempArr = this.props.bookmarks.filter(function(bookmark) {
        if (bookmark.title.toLowerCase().match(search)) {
          return true;
        } else {
          return false;
        }
      });
      tempArr.forEach(function(bookmark) {
        tileArr.push(<Tile key={bookmark.bookmarkid} title={bookmark.title}
                      id={bookmark.bookmarkid} screenshot={bookmark.screenshot}/>);
      });
    } else {
      // Makes an array of Tile components to be displayed
      this.props.bookmarks.forEach(function(bookmark) {
        tileArr.push(<Tile key={bookmark.bookmarkid} title={bookmark.title}
                      id={bookmark.bookmarkid} screenshot={bookmark.screenshot}/>);
      });
    }

    if (this.props.params.folderName && this.props.search) {
      let search = new RegExp(this.props.search);
      let tempArr = tileArr.filter(function(bookmark) {
        if (bookmark.props.title.toLowerCase().match(search)) {
          return true;
        } else {
          return false;
        }
      });
      tileArr = [];
      tempArr.forEach(function(bookmark) {
        tileArr.push(<Tile key={bookmark.props.id} title={bookmark.props.title}
                      id={bookmark.props.id} screenshot={bookmark.props.screenshot}/>);
      });
    }
    return (
      <section className="tile-section">
        <ul className="row">
          {tileArr}
        </ul>
      </section>
    );
  }
});

const mapStateToProps = function(state, props) {
  return {
    bookmarks: state.bookmarks,
    search: state.search
  };
};

const Container = connect(mapStateToProps)(BookmarkTiles);

module.exports = Container;
