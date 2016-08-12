const React = require('react');

const SelectFolder = React.createClass({
  render: function () {
    return (
      <option value={this.props.folder.folderid}>
        {this.props.folder.foldername}
      </option>
    );
  }
});

module.exports = SelectFolder;
