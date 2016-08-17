import React from 'react';
import actions from '../redux/actions';
import Folder from './nav-folder-container';
import BookmarkForm from '../content/bookmark-form';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor () {
    super();
    this.postFolder = this.postFolder.bind(this);
    this.onAddInput = this.onAddInput.bind(this);
  }
  onAddInput (event) {
    let text = event.target.value;
    this.props.dispatch(actions.searchTextChange(text));
  }
  postFolder (event) {
    event.preventDefault();
    this.props.dispatch(actions.addFolder(this.refs.newFolder.value));
    this.refs.newFolder.value = '';
  }
  render () {
    let folderArr = [];
    this.props.folders.forEach((folder, index) => {
      folderArr.push(<Folder key={index} folder={folder}/>);
    });

    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container">
            <ul className="nav navbar-nav">
              <li>
                <Link className="navbar-brand" to={'/'}>
                  <img src="logo.png" alt="Book Kit!"/>
                </Link>
              </li>
              <li>
                <a data-toggle="modal" data-target="#add-form">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </a>

                <div className="modal fade" id="add-form">
                  <BookmarkForm />
                </div>
              </li>
            </ul>
            <form className="navbar-form navbar-right">
              <div className="form-group">
                <input type="text" onChange={this.onAddInput} placeholder="Search..." className="search-bar form-control"/>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
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
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    folders: state.folders,
  };
};

const Container = connect(mapStateToProps)(Navbar);

module.exports = Container;
