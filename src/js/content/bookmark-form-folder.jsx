import React from 'react';

class SelectFolder extends React.Component {
  render () {
    return (
      <option value={this.props.folder.folderid}>
        {this.props.folder.foldername}
      </option>
    );
  }
}

module.exports = SelectFolder;
