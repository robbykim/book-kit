const React = require('react');

const router = require('react-router');
const Router = router.Router;
const Route = router.Route;
const hashHistory = router.hashHistory;

const IndexRoute = router.IndexRoute;
const Link = router.Link;

const PageContainer = require('../page-container');
const OpenBookmark = require('../open-bookmark');
const BookmarkForm = require('../bookmark-form');
const BookmarkTiles = require('../bookmark-tiles');

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={PageContainer}>
      <IndexRoute component={BookmarkTiles} />
      <Route path="/add" component={BookmarkForm} />
      <Route path=":bookmarkId" component={OpenBookmark} />
    </Route>
  </Router>
);

module.exports = routes;
