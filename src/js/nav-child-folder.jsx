const React = require('react');
const Link = require('react-router').Link;

const Folder = React.createClass({
  render: function () {
    return (
      <li>
        <Link to={'/folders/' + this.props.folder}>
          {this.props.folder}
        </Link>
      </li>
    );
  }
});

module.exports = Folder;
