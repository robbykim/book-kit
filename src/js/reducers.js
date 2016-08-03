var actionTypes = require('./constants');
var combineReducers = require('redux').combineReducers;

var bookmarkReducer = function(state, action) {
  state = state || {};
  var newbookmarkArray;
  var index;

  switch (action.type) {
    case actionTypes.ADD_BOOKMARK_SUCCESS:
      newbookmarkArray = state.bookmark.splice().push(action.bookmark);
      return Object.assign({}, state, {
        bookmarks: newbookmarkArray
      });

    case actionTypes.GET_BOOKMARKS_SUCCESS:
      return Object.assign({}, state, {
        bookmarks: action.bookmarks
      });

    case actionTypes.GET_BOOKMARK_BY_FOLDER_SUCCESS:
      return Object.assign({}, state, {
        bookmarks: action.bookmarks
      });

    case actionTypes.GET_BOOKMARKS_BY_TAG_SUCCESS:
      return Object.assign({}, state, {
        bookmarks: action.bookmarks
      });

    case actionTypes.EDIT_BOOKMARK_SUCCESS:
      newbookmarkArray = state.bookmark.splice();
      newbookmarkArray.forEach(function(value, i) {
        if (value.id === action.bookmark.id) {
          index = i;
        }
      });
      newbookmarkArray[index] = action.bookmark;
      return Object.assign({}, state, {
        bookmarks: newbookmarkArray
      });

    case actionTypes.DELETE_BOOKMARK_SUCCESS:
      newbookmarkArray = state.bookmark.splice();
      newbookmarkArray.forEach(function(value, i) {
        if (value.id === action.bookmark.id) {
          index = i;
        }
      });
      newbookmarkArray.splice(index, 1);
      return Object.assign({}, state, {
        bookmarks: newbookmarkArray
      });

    case actionTypes.ADD_BOOKMARK_ERROR:
    case actionTypes.GET_BOOKMARK_ERROR:
    case actionTypes.GET_BOOKMARK_BY_FOLDER_ERROR:
    case actionTypes.GET_BOOKMARKS_BY_TAG_ERROR:
    case actionTypes.EDIT_BOOKMARK_ERROR:
    case actionTypes.DELETE_BOOKMARK_ERROR:
      console.log(action.error);
      break;

    default:
      return state;
  }
};

var folderReducer = function(state, action) {
  state = state || {};
  var newFolderArray;

  switch (action.type) {
    case actionTypes.ADD_FOLDER_SUCCESS:
      newFolderArray = state.folders.splice().push(state.folder);
      return Object.assign({}, state, {
        folders: newFolderArray
      });

    case actionTypes.GET_FOLDERS_SUCCESS:
      newFolderArray = state.folders.splice();
      return Object.assign({}, state, {
        folders: newFolderArray
      });

    case actionTypes.ADD_FOLDER_ERROR:
    case actionTypes.GET_FOLDERS_ERROR:
      console.log(action.error);
      break;

    default:
      return state;
  };
};

var tagReducer = function(state, action) {
  state = state || {};

  switch(action.type) {
    case actionTypes.GET_TAGS_SUCCESS:
      return Object.assign({}, state, {
        tags: action.tags
      });
    case actionTypes.GET_TAGS_ERROR:
      console.log(action.error);
      break;

    default:
      return state;
  }
};

var rootReducer = combineReducers({
  bookmarks: bookmarkReducer,
  folder: folderReducer,
  tags: tagReducer
});

exports.rootReducer = rootReducer;

