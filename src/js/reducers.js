var actionTypes = require('./constants');
var combineReducers = require('redux').combineReducers;

var bookmarkReducer = function(state, action) {
  state = state || [];
  var newbookmarkArray;
  var index;

  switch (action.type) {
    case actionTypes.ADD_BOOKMARK_SUCCESS:
      state.push(action.bookmark);
      return state;

    case actionTypes.GET_BOOKMARKS_SUCCESS:
      return action.bookmarks;

    case actionTypes.GET_BOOKMARK_BY_FOLDER_SUCCESS:
      return action.bookmarks;

    case actionTypes.GET_BOOKMARKS_BY_TAG_SUCCESS:
      return action.bookmarks;

    case actionTypes.EDIT_BOOKMARK_SUCCESS:
      state.forEach(function(value, i) {
        if (value.id === action.bookmark.id) {
          index = i;
        }
      });
      state[index] = action.bookmark;
      return state;

    case actionTypes.DELETE_BOOKMARK_SUCCESS:
      state.forEach(function(value, i) {
        if (value.id === action.bookmark.id) {
          index = i;
        }
      });
      return state.splice(index, 1);

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
  // This part of the state is an array
  state = state || [];

  switch (action.type) {
    case actionTypes.ADD_FOLDER_SUCCESS:
      state.push(state.folder);
      return state;

    case actionTypes.GET_FOLDERS_SUCCESS:
      return action.folders;

    case actionTypes.ADD_FOLDER_ERROR:
    case actionTypes.GET_FOLDERS_ERROR:
      console.log(action.error);
      break;

    default:
      return state;
  }
};

var tagReducer = function(state, action) {
  // This part of the state is an array
  state = state || [];

  switch(action.type) {
    case actionTypes.GET_TAGS_SUCCESS:
      return action.tags;
      
    case actionTypes.GET_TAGS_ERROR:
      console.log(action.error);
      break;

    default:
      return state;
  }
};

var rootReducer = combineReducers({
  bookmarks: bookmarkReducer,
  folders: folderReducer,
  tags: tagReducer
});

exports.rootReducer = rootReducer;

