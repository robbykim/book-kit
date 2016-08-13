import React from 'react';
import Nav from './nav/nav-header';
import actions from './redux/actions';
import { connect } from 'react-redux';

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
