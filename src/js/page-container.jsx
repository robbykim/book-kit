import React from 'react';
import Nav from './nav/nav-header';
import actions from './redux/actions';
import { connect } from 'react-redux';

class PageContainer extends React.Component {
  componentDidMount () {
    this.props.dispatch(actions.getBookmarks());
    this.props.dispatch(actions.getFolders());
  }
  render () {
    return (
      <div>
        <Nav/>
        <section className="main-section container">
          {this.props.children}
        </section>
      </div>
    );
  }
}

const Container = connect()(PageContainer);

module.exports = Container;
