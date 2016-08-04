const React = require('react');
const Folder = require('./nav-child-folder');
const connect = require('react-redux').connect;

const Sidebar = React.createClass({
  render: function() {
    let folderArr = [];
    this.props.folders.forEach(function(folder, index) {
      folderArr.push(<Folder key={index} folder={folder}/>);
    });

    return (
      <nav className="sidebar-nav">
        <h2 className="folder-header">Folders</h2>
        <button className="add-folder">+</button>
        <ul className="folder-list">
          {folderArr}
        </ul>
      </nav>
    );
  }
});

const mapStateToProps = function(state, props) {
  return {
    folders: state.folders
  };
};

const Container = connect(mapStateToProps)(Sidebar);

module.exports = Container;
