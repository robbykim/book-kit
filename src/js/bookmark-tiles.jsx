var React = require('react');
var Tile = require('./tile');
var connect = require('react-redux').connect;

var BookmarkTiles = React.createClass({
  onFocus: function (id) {
    console.log(this.props.bookmarks[id]);
    // TODO: add dispatch function here
    // this.props.dispatch
    // this will be a route
  },
  render: function () {
    var tileArr = [<Tile key="1234" title="test" id="1"
                  url="http://google.com" screenshot="./IC688499.png" onFocus={this.onFocus}/>,
                  <Tile key="5678" title="test" id="2"
                  url="http://google.com" screenshot="./IC688499.png" onFocus={this.onFocus}/>];
    // list of bookmarks passed into props
    // this.props.bookmarks.forEach(function (bookmark, index) {
    //   tileArr.push(<Tile key={index} title={bookmark.title} id={bookmark.id}
    //                 url={bookmark.url} screenshot={bookmark.screenshot}/>);
    // });
    return (
      <section className="tile-section">
        <ul>
          {tileArr}
        </ul>
      </section>
    );
  }
});

const mapStateToProps = function(state, props) {
  return {
    bookmarks: state.bookmarks
  };
};

var Container = connect(mapStateToProps)(BookmarkTiles);

module.exports = Container;

// TODO: connect state to folders and bookmark tiles
// TODO: write the fetch requests
// TODO: test front end to make sure it will work and be ready for API's

// id: 1,
// url: "https://trello.com/b/3Uj9v7Oq/full-stack-bookmarks-unnamed",
// title: "Trello Board",
// description: "The bookmark board project managment tool.",
// screenshot: "https://i.kinja-img.com/gawker-media/image/upload/s--mWjnesG_--/18ixcsrp44y9gjpg.jpg",
// user: "Joe",
// folderName: "Work",
// tags: ["Project-Managment", "Thinkful"]
