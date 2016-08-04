const React = require('react');
const router = require('react-router');
const Link = router.Link;
const connect = require('react-redux').connect;
const actions = require('./actions');

const Navbar = React.createClass({
  onAddInput: function (event) {
    let text = event.target.value;
    this.props.dispatch(actions.searchTextChange(text));
  },
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
            <input type="text" onChange={this.onAddInput} placeholder="Search..." className="search-bar"/>
          </div>
        </nav>
      </header>
    );
  }
});

const Container = connect()(Navbar);

module.exports = Container;
