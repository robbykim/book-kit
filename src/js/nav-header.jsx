const React = require('react');
const router = require('react-router');
const Link = router.Link;
const Form = require('react-router-form');

const Navbar = React.createClass({
  render: function() {
    return (
      <header>
        <nav>
          <Link to={'/'}>
            <h1 className="main-logo">Bookmark Project</h1>
          </Link>
          <div>
            <Link to={'/bookmarks/add'}>
              <button className="add-bookmark">+</button>
            </Link>
            <Form to={'/search/' + this.props.input}>
              <input type="text" onChange={this.props.onChange} placeholder="Search..." className="search-bar"/>
            </Form>
          </div>
        </nav>
      </header>
    );
  }
});

module.exports = Navbar;
