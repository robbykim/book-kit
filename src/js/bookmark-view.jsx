const React = require('react');
const connect = require('react-redux').connect;
const router = require('react-router');
const Link = router.Link;

// COMPONENT: Displays detailed information for a selected bookmark
const BookmarkView = React.createClass({
  render: function () {
    if (this.props.bookmarks.length === 0) {
      return null;
    }
    // Will get the id of the item from the url
    const id = this.props.params.bookmarkId;

    // filters through the bookmarks by the selected id
    let bookmark = this.props.bookmarks.filter(function(bookmark) {
      return id === bookmark.bookmarkid.toString();
    });

    return (
      <section className="bookmark-section">
        <h1>{bookmark[0].title}</h1>
        <h2><a href={bookmark[0].url}>{bookmark[0].url}</a></h2>
        <p>{bookmark[0].description}</p>
        <img src={bookmark[0].screenshot} alt="placeholder-image" />
        <h4>Folder:</h4>
        <p>{bookmark[0].foldername}</p>
        <Link to={'/'}>
          <button className="close-window">X</button>
        </Link>
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

const Container = connect(mapStateToProps)(BookmarkView);

module.exports = Container;
