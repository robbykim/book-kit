var React = require('react');
var connect = require('react-redux').connect;

// COMPONENT: Displays detailed information for a selected bookmark
var BookmarkView = React.createClass({
  render: function () {
    if (this.props.bookmarks.length === 0) {
      return null;
    }
    // Will get the id of the item from the url
    var id = this.props.params.bookmarkId;

    // filters through the bookmarks by the selected id
    var bookmark = this.props.bookmarks.filter(function(bookmark) {
      return id === bookmark.bookmarkid.toString();
    });

    return (
      <section className="bookmark-section">
        <h1>{bookmark[0].title}</h1>
        <h2><a href={bookmark[0].url}>{bookmark[0].url}</a></h2>
        <p>{bookmark[0].description}</p>
        <img src={bookmark[0].screenshot} alt="placeholder-image" />
        <h4>Folder:</h4>
        <p>{bookmark[0].folderName}</p>
        <button className="close-window">X</button>
        <button className="edit-bookmark">Pencil Icon</button>
        <button className="delete-bookmark">Trash Icon</button>
      </section>
    );
  }
});

// Grabs the bookmarks state from the store
const mapStateToProps = function (state, props) {
  return {
    bookmarks: state.bookmarks
  };
};

var Container = connect(mapStateToProps)(BookmarkView);

module.exports = Container;
