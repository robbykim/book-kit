import React from 'react';
import actions from '../redux/actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Folder extends React.Component {
  constructor () {
    super();
    this.onEdit = this.onEdit.bind(this);
  }
  onDelete (id) {
    this.props.dispatch(actions.deleteFolder(id));
  }
  onEdit (event) {
    event.preventDefault();
    console.log(this.refs.editedFolder.value);
    this.props.onShowEdit();
  }
  render () {
    let textStyle = this.props.show ? { display: 'none' } : {};
    let inputStyle = this.props.show ? {} : { display: 'none' };
    return (
      <li>
        <Link to={'/folders/' + this.props.folder.foldername} style={textStyle}>
          {this.props.folder.foldername}
        </Link>
        <form onSubmit={this.onEdit} style={inputStyle}>
          <input type="text" ref="editedFolder" defaultValue={this.props.folder.foldername}/>
        </form>
        <span onClick={this.props.onShowEdit} className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        <span onClick={() => this.onDelete(this.props.folder.folderid)} className="glyphicon glyphicon-trash" aria-hidden="true"></span>
      </li>
    );
  }
}

const Container = connect()(Folder);

module.exports = Container;
