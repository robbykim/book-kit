const React = require('react');

const Folder = React.createClass({
  render: function () {
    return (
      <li>
        <a href="#">{this.props.folder}</a>
      </li>
    );
  }
});

module.exports = Folder;
