var React = require('react');

var OpenBookmark = React.createClass({
  render: function () {
    return (
      <section className="bookmark-section">
        <h1>Bookmark Title</h1>
        <h2>https://www.example.com</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dignissimos praesentium vel atque ducimus obcaecati quia, quis libero repellat quaerat itaque numquam est provident. Officia necessitatibus quam est perferendis nam.</p>
        <img src="https://i-msdn.sec.s-msft.com/dynimg/IC688499.png" alt="placeholder-image" />
        <h4>Tags:</h4>
        <ul>
          <li>Not read yet</li>
          <li>Need for project</li>
        </ul>
        <button className="close-window">X</button>
        <button className="edit-bookmark">Pencil Icon</button>
        <button className="delete-bookmark">Trash Icon</button>
      </section>
    );
  }
});

module.exports = OpenBookmark;
