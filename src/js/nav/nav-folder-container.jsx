import React from 'react';
import FolderNav from './nav-child-folder';

const FolderContainer = React.createClass({
  getInitialState: function () {
    return {
      show: false
    };
  },
  onShowEdit: function (event) {
    event.preventDefault();
    this.setState({
      show: !this.state.show
    });
  },
  render: function () {
    return <FolderNav show={this.state.show} onShowEdit={this.onShowEdit} folder={this.props.folder} />;
  }
});

module.exports = FolderContainer;
