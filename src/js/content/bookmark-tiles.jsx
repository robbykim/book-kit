import { connect } from 'react-redux';
import React from 'react';
import Tile from './bookmark-child-tile';

class BookmarkTiles extends React.Component {
  render() {
    let tileArr = [];
    // FIXME: need to make it so we're routing to folderid and not name
    // folders with spaces show up with space in url which is bad
    // nav-child-folder and routes - folderId is not stored with bookmarks
    if (this.props.params.folderName) {
      const folder = this.props.params.folderName;
      const tempArr = this.props.bookmarks.filter((bookmark) => {
        return folder === bookmark.foldername;
      });

      tempArr.forEach((bookmark) => {
        tileArr.push(<Tile
          key={bookmark.bookmarkid}
          title={bookmark.title}
          id={bookmark.bookmarkid}
          screenshot={bookmark.screenshot}
        />);
      });
    } else if (this.props.search) {
      const search = new RegExp(this.props.search);
      const tempArr = this.props.bookmarks.filter((bookmark) => {
        if (bookmark.title.toLowerCase().match(search)) {
          return true;
        }

        return false;
      });

      tempArr.forEach((bookmark) => {
        tileArr.push(<Tile
          key={bookmark.bookmarkid}
          title={bookmark.title}
          id={bookmark.bookmarkid}
          screenshot={bookmark.screenshot}
        />);
      });
    } else {
      // Makes an array of Tile components to be displayed
      this.props.bookmarks.forEach((bookmark) => {
        tileArr.push(<Tile
          key={bookmark.bookmarkid}
          title={bookmark.title}
          id={bookmark.bookmarkid}
          screenshot={bookmark.screenshot}
        />);
      });
    }

    if (this.props.params.folderName && this.props.search) {
      const search = new RegExp(this.props.search);
      const tempArr = tileArr.filter((bookmark) => {
        if (bookmark.props.title.toLowerCase().match(search)) {
          return true;
        }

        return false;
      });

      tileArr = [];
      tempArr.forEach((bookmark) => {
        tileArr.push(<Tile
          key={bookmark.props.id}
          title={bookmark.props.title}
          id={bookmark.props.id}
          screenshot={bookmark.props.screenshot}
        />);
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
}

const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks,
    search: state.search,
  };
};

const Container = connect(mapStateToProps)(BookmarkTiles);

module.exports = Container;
