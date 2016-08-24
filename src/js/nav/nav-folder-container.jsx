import React from 'react';
import FolderNav from './nav-child-folder';

class FolderContainer extends React.Component {
  constructor() {
    super();
    this.onShowEdit = this.onShowEdit.bind(this);
    this.state = {
      show: false,
    };
  }
  onShowEdit() {
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
    return <FolderNav show={this.state.show} onShowEdit={this.onShowEdit} folder={this.props.folder} />;
  }
}

module.exports = FolderContainer;
