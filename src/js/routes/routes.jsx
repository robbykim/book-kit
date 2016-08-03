const React = require('react');

const router = require('react-router');
const Router = router.Router;
const Route = router.Route;
const hashHistory = router.hashHistory;
const IndexRoute = router.IndexRoute;

const PageContainer = require('../page-container');
const BookmarkView = require('../bookmark-view');
const BookmarkForm = require('../bookmark-form');
const BookmarkTiles = require('../bookmark-tiles');

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={PageContainer}>
      <IndexRoute component={BookmarkTiles} />
      <Route path="/add" component={BookmarkForm} />
      <Route path=":bookmarkId" component={BookmarkView} />
    </Route>
  </Router>
);

module.exports = routes;
