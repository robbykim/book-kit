import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import PageContainer from '../page-container';
import BookmarkView from '../content/bookmark-view';
import BookmarkTiles from '../content/bookmark-tiles';

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
