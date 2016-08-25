import React from 'react';
import BookmarkView from './bookmark-view';

class BookmarkViewContainer extends React.Component {
  constructor() {
    super();
    this.onShowDelete = this.onShowDelete.bind(this);
    this.onShowEdit = this.onShowEdit.bind(this);
    this.state = {
      show: false,
      delete: false,
    };
  }

  onShowEdit() {
    this.setState({
      show: !this.state.show,
    });
  }

  onShowDelete() {
    this.setState({
      delete: !this.state.delete,
    });
  }

  render() {
    const id = this.props.params.bookmarkId;
    return (
      <BookmarkView
        onShowEdit={this.onShowEdit}
        onShowDelete={this.onShowDelete}
        delete={this.state.delete}
        show={this.state.show}
        id={id}
      />
    );
  }
}

module.exports = BookmarkViewContainer;
