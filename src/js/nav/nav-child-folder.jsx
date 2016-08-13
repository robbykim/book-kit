import React from 'react';
import actions from '../redux/actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Folder = React.createClass({
  onDelete: function (id) {
    this.props.dispatch(actions.deleteFolder(id));
  },
  render: function () {
    return (
      <li>
        <Link to={'/folders/' + this.props.folder.foldername}>
          {this.props.folder.foldername}
        </Link>
        <span onClick={() => this.onDelete(this.props.folder.folderid)} className="glyphicon glyphicon-trash" aria-hidden="true"></span>
      </li>
    );
  }
});

const Container = connect()(Folder);

module.exports = Container;
