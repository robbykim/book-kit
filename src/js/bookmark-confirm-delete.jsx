import React from 'react';
import actions from './actions';
const connect = require('react-redux').connect;
const Link = require('react-router').Link;

const ConfirmDelete = React.createClass({
  onDelete: function (id) {
    this.props.dispatch(actions.deleteBookmark(id));
  },
  render: function () {
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Are you sure you want to delete?</h2>
          </div>
          <div className="modal-footer">
            <div data-dismiss="modal">
              <Link to={'/'}>
                <button type="button" className="btn btn-default" onClick={() => this.onDelete(this.props.bookmarkId)}>Yes</button>
              </Link>
              <button type="button" className="btn btn-default">No</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

const Container = connect()(ConfirmDelete);

module.exports = Container;
