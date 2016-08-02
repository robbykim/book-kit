var React = require('react');

var BookmarkTiles = React.createClass({
  render: function () {
    return (
      <section className="tile-section">
        <ul>
          <li className="bookmark-tile">
            <a href="#">
              <h3>Bookmark Title</h3>
              <img src="./IC688499.png" alt="placeholder-image" />
            </a>
          </li>

          <li className="bookmark-tile">
            <a href="#">
              <h3>Bookmark Title</h3>
              <img src="./IC688499.png" alt="placeholder-image" />
            </a>
          </li>

          <li className="bookmark-tile">
            <a href="#">
              <h3>Bookmark Title</h3>
              <img src="./IC688499.png" alt="placeholder-image" />
            </a>
          </li>
        </ul>
      </section>
    );
  }
});

module.exports = BookmarkTiles;
