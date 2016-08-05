const React = require('react');

const SelectFolder = React.createClass({
  render: function () {
    return (
      <option value={this.props.folder}>
        {this.props.folder}
      </option>
    );
  }
});

module.exports = SelectFolder;
