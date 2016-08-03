var React = require('react');
var Nav = require('./navbar');
var Sidebar = require('./sidebar');

var PageContainer = React.createClass({
  render: function() {
    return (
      <div>
        <Nav/>
        <section className="main-section">
          <Sidebar/>
          <div className="content">
          {/* need to pass in bookmarks from api call to BookmarkTiles */}
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
});

module.exports = PageContainer;
