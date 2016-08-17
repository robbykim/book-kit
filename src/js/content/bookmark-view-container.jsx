import BookmarkView from './bookmark-view';
import React from 'react';

class BookmarkViewContainer extends React.Component {
  constructor () {
    super();
    this.onShowEdit = this.onShowEdit.bind(this);
    this.state = {
      show: false
    };
  }
  onShowEdit () {
    this.setState({
      show: !this.state.show
    });
  }
  render () {
    const id = this.props.params.bookmarkId;
    return (
      <BookmarkView onShowEdit={this.onShowEdit} show={this.state.show} id={id} />
    );
  }
}

module.exports = BookmarkViewContainer;
