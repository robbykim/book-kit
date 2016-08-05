const React = require('react');
const Nav = require('./nav-header');
const actions = require('./actions');
const connect = require('react-redux').connect;

const PageContainer = React.createClass({
  componentDidMount: function () {
    this.props.dispatch(actions.getBookmarks());
    this.props.dispatch(actions.getFolders());
  },
  render: function() {
    return (
      <div>
        <Nav/>
        <section className="main-section container">
          {this.props.children}
        </section>
      </div>
    );
  }
});

const Container = connect()(PageContainer);

module.exports = Container;
