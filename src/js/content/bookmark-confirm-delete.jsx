import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
            <div>
              <Link to={'/'}>
                <button type="button" className="btn btn-default" onClick={() => this.onDelete(this.props.bookmarkId)} data-dismiss="modal">Yes</button>
              </Link>
              <button type="button" className="btn btn-default" data-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

const Container = connect()(ConfirmDelete);

module.exports = Container;
