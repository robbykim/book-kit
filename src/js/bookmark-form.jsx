var React = require('react');

var BookmarkForm = React.createClass({
  render: function () {
    return (
      <section className="add-bookmark-section hidden">
        <form>
          <h1>Enter a New Bookmark</h1>
          <button className="close-window">X</button>
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
