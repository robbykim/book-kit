const React = require('react');
const router = require('react-router');
const Link = router.Link;
const connect = require('react-redux').connect;
const actions = require('./actions');
const Folder = require('./nav-child-folder');

const Navbar = React.createClass({
  onAddInput: function (event) {
    let text = event.target.value;
    this.props.dispatch(actions.searchTextChange(text));
  },
  postFolder: function (event) {
    event.preventDefault();
    this.props.dispatch(actions.addFolder(this.refs.newFolder.value));
  },
  render: function() {
    let folderArr = [];
    this.props.folders.forEach(function(folder, index) {
      console.log('works');
      folderArr.push(<Folder key={index} folder={folder}/>);
    });

    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container">
            <ul className="nav navbar-nav">
              <li>
                <Link className="navbar-brand" to={'/'}>
                  Book Kit
                </Link>
              </li>
              <li>
                <Link to={'/bookmarks/add'}>
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </Link>
              </li>
            </ul>
            <form className="navbar-form navbar-right">
              <div className="form-group">
                <input type="text" onChange={this.onAddInput} placeholder="Search..." className="search-bar form-control"/>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
                {/* DROPDOWN */}

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Folders <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li>
                    <form onSubmit={this.postFolder}>
                      <input className="form-control" placeholder="Add Folder" type="text" ref="newFolder"/>
                    </form>
                  </li>
                  {folderArr}
                </ul>
              </li>

                {/* END DROPDOWN */}
            </ul>

          </div>
        </nav>
      </header>
    );
  }
});

const mapStateToProps = function(state, props) {
  return {
    folders: state.folders,
  };
};

const Container = connect(mapStateToProps)(Navbar);

module.exports = Container;
