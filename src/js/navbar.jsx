const React = require('react');
const router = require('react-router');
const Link = router.Link;

const Navbar = React.createClass({
  render: function() {
    return (
      <header>
        <nav>
          <h1 className="main-logo">Bookmark Project</h1>
          <div>
            <Link to={'/bookmarks/add'}>
              <button className="add-bookmark">+</button>
            </Link>
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
