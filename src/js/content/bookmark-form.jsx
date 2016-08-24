import { connect } from 'react-redux';
import React from 'react';
import actions from '../redux/actions';
import Folder from './bookmark-form-folder';

class BookmarkForm extends React.Component {
  constructor() {
    super();
    this.addBookmark = this.addBookmark.bind(this);
  }

  addBookmark() {
    this.props.dispatch(actions.addBookmark({
      url: this.refs.url.value,
      title: this.refs.title.value,
      description: this.refs.description.value,
      folderid: this.refs.folder.value,
      screenshot: this.refs.screenshot.value,
    })
    );

    this.refs.url.value = '';
    this.refs.title.value = '';
    this.refs.description.value = '';
    this.refs.folder.value = '';
    this.refs.screenshot.value = '';
  }

  render() {
    let folderArr = [];
    this.props.folders.forEach((folder, index) => {
      folderArr.push(<Folder key={index} folder={folder} />);
    });
    
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Enter a New Bookmark</h2>
          </div>
          <div className="modal-body">
            <form onSubmit={this.addBookmark} className="form-horizontal">
              <div className="form-group">
                <label htmlFor="form-title" className="col-sm-2 control-label">Title *</label>
                <div className="col-sm-10">
                  <input type="text" ref="title" className="form-control" id="form-title" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="form-url" className="col-sm-2 control-label">URL *</label>
                <div className="col-sm-10">
                  <input type="text" ref="url" className="form-control" id="form-url" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="form-description" className="col-sm-2 control-label">Description</label>
                <div className="col-sm-10">
                  <input type="text" ref="description" className="form-control" id="form-description" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="form-screenshot" className="col-sm-2 control-label">Screenshot URL</label>
                <div className="col-sm-10">
                  <input type="text" ref="screenshot" className="form-control" id="form-screenshot" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="form-folder" className="col-sm-2 control-label">Folder *</label>
                <div className="col-sm-10">
                  <select ref="folder" className="selectpicker form-control" id="form-folder" required>
                    {folderArr}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10 col-sm-push-2">
                  <input type="submit" className="btn btn-default" id="form-submit" value="Submit" />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    folders: state.folders,
  };
};

const Container = connect(mapStateToProps)(BookmarkForm);

module.exports = Container;
