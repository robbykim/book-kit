const React = require('react');
const Nav = require('./navbar');
const Sidebar = require('./sidebar');
const actions = require('./actions');
const connect = require('react-redux').connect;

const PageContainer = React.createClass({
  componentDidMount: function () {
    this.props.dispatch(actions.getBookmarks());
  },
  render: function() {
    return (
      <div>
        <Nav/>
        <section className="main-section">
          <Sidebar/>
          <div className="content">
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
});

const Container = connect()(PageContainer);

module.exports = Container;
