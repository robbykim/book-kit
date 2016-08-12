const React = require('react');
const Link = require('react-router').Link;
const actions = require('./actions');
const connect = require('react-redux').connect;

const Folder = React.createClass({
  onDelete: function (foldername) {
    this.props.dispatch(actions.deleteFolder(foldername));
  },
  render: function () {
    console.log('in nav child', this.props.folder.foldername);
    console.log('in nav child', this.props.folder.folderid);
    return (
      <li>
        <Link to={'/folders/' + this.props.folder.foldername}>
          {this.props.folder.foldername}
        </Link>
        <span onClick={() => this.onDelete(this.props.folder.foldername)} className="glyphicon glyphicon-trash" aria-hidden="true"></span>
      </li>
    );
  }
});

const Container = connect()(Folder);

module.exports = Container;
