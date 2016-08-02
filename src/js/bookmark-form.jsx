const React = require('react');
const router = require('react-router');
const Link = router.Link;

const BookmarkForm = React.createClass({
  render: function () {
    return (
      <section className="add-bookmark-section">
        <form>
          <h1>Enter a New Bookmark</h1>
          <Link to={'/'}>
            <button className="close-window">X</button>
          </Link>
          <h3>Title</h3>
          <input type="text" required />
          <h3>URL</h3>
          <input type="text" required />
          <h3>Description</h3>
          <input type="text" />
          <h3>Screenshot URL</h3>
          <input type="text" />
          <h3>Folder</h3>
          <input type="text" required placeholder="Should be a drop down" />
          <h3>Tags</h3>
          <input type="text" />
          <button type="submit">Save</button>
        </form>
      </section>
    );
  }
});

module.exports = BookmarkForm;
