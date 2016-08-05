var actionTypes = require('./constants');
var combineReducers = require('redux').combineReducers;

var searchReducer = function(state, action) {
  state = state || '';

  switch (action.type) {
    case actionTypes.SEARCH_TEXT_CHANGE: {
      return action.text;
    }
    default: {
      return state;
    }
  }
};

var bookmarkReducer = function(state, action) {
  state = state || [];
  var index;

  switch (action.type) {
    case actionTypes.ADD_BOOKMARK_SUCCESS: {
      let tempArr = state.slice();
      tempArr.push(action.bookmark);
      return tempArr;
    }
    case actionTypes.GET_BOOKMARKS_SUCCESS: {
      return action.bookmarks;
    }
    case actionTypes.GET_BOOKMARKS_BY_FOLDER_SUCCESS: {
      return action.bookmarks;
    }
    case actionTypes.GET_BOOKMARKS_BY_TAG_SUCCESS: {
      return action.bookmarks;
    }

    case actionTypes.EDIT_BOOKMARK_SUCCESS: {
      let tempArr = state.slice();
      tempArr.forEach(function(value, i) {
        if (value.id === action.bookmark.id) {
          index = i;
        }
      });
      tempArr[index] = action.bookmark;
      return state;
    }
    case actionTypes.DELETE_BOOKMARK_SUCCESS: {
      let tempArr = state.slice();
      tempArr.forEach(function(value, i) {
        if (value.id === action.bookmark.id) {
          index = i;
        }
      });
      return tempArr.slice(index, 1);
    }
    case actionTypes.ADD_BOOKMARK_ERROR:
    case actionTypes.GET_BOOKMARKS_ERROR:
    case actionTypes.GET_BOOKMARKS_BY_FOLDER_ERROR:
    case actionTypes.GET_BOOKMARKS_BY_TAG_ERROR:
    case actionTypes.EDIT_BOOKMARK_ERROR:
    case actionTypes.DELETE_BOOKMARK_ERROR: {
      break;
    }
    default: {
      return state;
    }
  }
};

var folderReducer = function(state, action) {
  // This part of the state is an array
  state = state || [];

  switch (action.type) {
    case actionTypes.ADD_FOLDER_SUCCESS: {
      var newState = state.slice();
      newState.push(action.folder.foldername);
      return newState;
    }
    case actionTypes.GET_FOLDERS_SUCCESS: {
      return action.folders;
    }
    case actionTypes.ADD_FOLDER_ERROR:
    case actionTypes.GET_FOLDERS_ERROR: {
      break;
    }
    default: {
      return state;
    }
  }
};

var tagReducer = function(state, action) {
  // This part of the state is an array
  state = state || [];

  switch(action.type) {
    case actionTypes.GET_TAGS_SUCCESS: {
      return action.tags;
    }
    case actionTypes.GET_TAGS_ERROR: {
      break;
    }
    default: {
      return state;
    }
  }
};

var rootReducer = combineReducers({
  bookmarks: bookmarkReducer,
  folders: folderReducer,
  tags: tagReducer,
  search: searchReducer
});

exports.rootReducer = rootReducer;
