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
        <nav className="navbar navbar-default">
          <div className="container">
            <Link to={'/'}>
              <a className="navbar-brand">Book Kit</a>
            </Link>
            <div className="nav navbar-right">
              <Link to={'/bookmarks/add'}>
                <button className="btn">+</button>
              </Link>
              <input type="text" onChange={this.onAddInput} placeholder="Search..." className="search-bar"/>
            </div>
          </div>
        </nav>
      </header>
    );
  }
});

const Container = connect()(Navbar);

module.exports = Container;
