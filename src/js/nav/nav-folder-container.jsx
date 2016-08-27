import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import FolderNav from './nav-child-folder';

class FolderContainer extends React.Component {
  constructor() {
    super();
    this.onShowEdit = this.onShowEdit.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      show: false,
    };
  }

  onDelete(id) {
    this.props.dispatch(actions.deleteFolder(id));
  }

  onEdit(id, folderName, event) {
    event.preventDefault();
    this.props.dispatch(actions.editFolder(id, folderName));
    this.onShowEdit();
  }

  onShowEdit() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <FolderNav
        show={this.state.show}
        onShowEdit={this.onShowEdit}
        onDelete={this.onDelete}
        onEdit={this.onEdit}
        folder={this.props.folder}
      />
    );
  }
}

const Container = connect()(FolderContainer);

module.exports = Container;
