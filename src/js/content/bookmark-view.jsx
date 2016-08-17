import React from 'react';
import ConfirmDelete from './bookmark-confirm-delete';
import Folder from './bookmark-form-folder';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class BookmarkView extends React.Component {
  render () {
    if (this.props.bookmarks.length === 0) {
      return null;
    }
    const id = this.props.id;
    // filters through the bookmarks by the selected id
    let bookmark = this.props.bookmarks.filter(function(bookmark) {
      return id === bookmark.bookmarkid.toString();
    });

    let folderArr = [];
    this.props.folders.forEach(function(folder, index) {
      folderArr.push(<Folder key={index} folder={folder}/>);
    });

    let textStyle = this.props.show ? { display: 'none' } : {};
    let inputStyle = this.props.show ? {} : { display: 'none' };

    return (
      <section className="bookmark-section">
        <div className="col-md-6" style={textStyle}>
          <h2>{bookmark[0].title}</h2>
          <h4><a href={bookmark[0].url}>{bookmark[0].url}</a></h4>
          <p>{bookmark[0].description}</p>
          <h4>Folder:</h4>
          <p>{bookmark[0].foldername}</p>
        </div>
        <div className="col-md-6" style={textStyle}>
          <img src={bookmark[0].screenshot} alt="placeholder-image" className="img-rounded" width="400"/>
        </div>
        <div className="col-md-12" style={inputStyle}>
          <form>
            <h4>Title *</h4>
            <input type="text" className="form-control" defaultValue={bookmark[0].title} placeholder="Title *" required />
            <h4>URL *</h4>
            <input type="text" className="form-control" defaultValue={bookmark[0].url} placeholder="URL *" required/>
            <h4>Description</h4>
            <input type="text" className="form-control" defaultValue={bookmark[0].description} placeholder="Description" />
            <h4>Screenshot URL</h4>
            <input type="text" className="form-control" defaultValue={bookmark[0].screenshot} placeholder="Screenshot URL" />
            <h4>Folder *</h4>
            <select ref="folder" className="selectpicker form-control" id="form-folder" required >
              {folderArr}
            </select>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <button className="btn btn-default" style={textStyle} onClick={this.props.onShowEdit}>Edit</button>
          <button className="btn btn-default" style={inputStyle} onClick={this.props.onShowEdit}>Cancel</button>

          <a data-toggle="modal" data-target="#delete-bookmark" style={textStyle}>
            <button className="btn btn-default">Delete</button>
          </a>

          <div className="modal fade" id="delete-bookmark">
            <ConfirmDelete bookmarkId={bookmark[0].bookmarkid}/>
          </div>

          <Link to={'/'} style={textStyle}>
            <button className="btn btn-default">Close</button>
          </Link>
        </div>
      </section>
    );
  }
}

// Grabs the bookmarks state from the store
const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks,
    folders: state.folders
  };
};

const Container = connect(mapStateToProps)(BookmarkView);

module.exports = Container;
