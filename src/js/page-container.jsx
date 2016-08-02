var React = require('react');
var Nav = require('./navbar');
var Sidebar = require('./sidebar');
var BookmarkTiles = require('./bookmark-tiles');
var OpenBookmark = require('./open-bookmark');
var BookmarkForm = require('./bookmark-form');

var PageContainer = React.createClass({
  render: function() {
    return (
      <div>
        <Nav/>
        <section className="main-section">
          <Sidebar/>
          <div className="content">
          {/* need to pass in bookmarks from api call to BookmarkTiles */}
            <BookmarkTiles/>
            <OpenBookmark/>
            <BookmarkForm/>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = PageContainer;
