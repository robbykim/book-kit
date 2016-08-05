const React = require('react');

const router = require('react-router');
const Router = router.Router;
const Route = router.Route;
const hashHistory = router.hashHistory;
const IndexRoute = router.IndexRoute;

const PageContainer = require('../page-container');
const BookmarkView = require('../bookmark-view');
const BookmarkTiles = require('../bookmark-tiles');

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={PageContainer}>
      <IndexRoute component={BookmarkTiles} />
      <Route path="/bookmarks/:bookmarkId" component={BookmarkView} />
      <Route path="/folders/:folderName" component={BookmarkTiles} />
      <Route path="/search/:input" component={BookmarkTiles} />
    </Route>
  </Router>
);

module.exports = routes;
