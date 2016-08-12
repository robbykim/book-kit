const React = require('react');

const SelectFolder = React.createClass({
  render: function () {
    return (
      <option value={this.props.folder.foldername}>
        {this.props.folder.foldername}
      </option>
    );
  }
});

module.exports = SelectFolder;
