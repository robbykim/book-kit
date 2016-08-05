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
        <div className="col-md-6">
          <h2>{bookmark[0].title}</h2>
          <h4><a href={bookmark[0].url}>{bookmark[0].url}</a></h4>
          <p>{bookmark[0].description}</p>
          <h4>Folder:</h4>
          <p>{bookmark[0].foldername}</p>
          <Link to={'/'}>
            <button className="btn btn-default">Close</button>
          </Link>
        </div>
        <div className="col-md-6">
          <img src={bookmark[0].screenshot} alt="placeholder-image" className="img-rounded" width="400"/>
        </div>
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
