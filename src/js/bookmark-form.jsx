import React from 'react';
import actions from './actions';
const connect = require('react-redux').connect;
const Link = require('react-router').Link;

const BookmarkForm = React.createClass({
  addBookmark: function () {
    this.props.dispatch(actions.addBookmark({
      url: this.refs.url.value,
      title: this.refs.title.value,
      description: this.refs.description.value,
      foldername: this.refs.folder.value,
      screenshot: this.refs.screenshot.value
      })
    );
  },
  render: function () {
    return (
      <section className="add-bookmark-section">
        <form onSubmit={this.addBookmark}>
          <h1>Enter a New Bookmark</h1>
          <Link to={'/'}>
            <button className="close-window">X</button>
          </Link>
          <h3>Title</h3>
          <input type="text" ref="title" required />
          <h3>URL</h3>
          <input type="text" ref="url" required />
          <h3>Description</h3>
          <input type="text" ref="description" />
          <h3>Screenshot URL</h3>
          <input type="text" ref="screenshot" />
          <h3>Folder</h3>
          <input type="text" required placeholder="Should be a drop down" ref="folder" />
          <button type="submit">Save</button>
        </form>
      </section>
    );
  }
});

const Container = connect()(BookmarkForm);

module.exports = Container;
