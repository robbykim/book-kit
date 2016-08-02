var React = require('react');

var Sidebar = React.createClass({
  render: function() {
    return (
      <nav className="sidebar-nav">
        <h2 className="folder-header">Folders</h2>
        <button className="add-folder">+</button>
        <ul className="folder-list">
          <li>
            <a href="#">Javascript</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
          <li>
            <a href="#">Cat Videos</a>
          </li>
        </ul>
        <h2 className="tag-header">Tags</h2>
        <ul className="tag-list">
          <li>
            <a href="#">Not read yet</a>
          </li>
          <li>
            <a href="#">Read</a>
          </li>
          <li>
            <a href="#">Need for Project</a>
          </li>
        </ul>
      </nav>
    );
  }
});

module.exports = Sidebar;
