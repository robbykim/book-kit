var React = require('react');

var Navbar = React.createClass({
  render: function() {
    return (
      <header>
        <nav>
          <h1 className="main-logo">Bookmark Project</h1>
          <div>
            <button className="add-bookmark">+</button>
            <form>
              <input type="text" placeholder="Search..." className="search-bar"/>
            </form>
          </div>
        </nav>
      </header>
    );
  }
});

module.exports = Navbar;
