const React = require('react');
const Folder = require('./nav-child-folder');
const connect = require('react-redux').connect;
const actions = require('./actions');

const Sidebar = React.createClass({
  showFolder: function () {
    this.props.dispatch(actions.showFolderInput());
  },
  postFolder: function () {
    console.log(this.refs.newFolder.value);
    // this.props.dispatch(actions.addFolder(event.target.value));
  },
  render: function() {
    let hide = this.props.showFolder ? '' : 'hidden';
    let plusMinus = this.props.showFolder ? '-' : '+'
    let folderArr = [];
    this.props.folders.forEach(function(folder, index) {
      folderArr.push(<Folder key={index} folder={folder}/>);
    });

    return (
      <nav className="sidebar-nav">
        <h2 className="folder-header">Folders</h2>
        <button className="add-folder" onClick={this.showFolder}>{plusMinus}</button>
        <form className={hide} onSubmit={this.postFolder}>
          <input type="text" ref="newFolder"/>
        </form>
        <ul className="folder-list">
          {folderArr}
        </ul>
      </nav>
    );
  }
});

const mapStateToProps = function(state, props) {
  return {
    folders: state.folders,
    showFolder: state.showFolder
  };
};

const Container = connect(mapStateToProps)(Sidebar);

module.exports = Container;
