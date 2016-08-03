var actionTypes = require('./constants');
var storage = require('./storage');

/* Redux Action Creators */

var fetch = require( 'isomorphic-fetch' );

// Post Requests
var addBookmarkSuccess = function( newBookmark ) {
  return {
    type: actionTypes.ADD_FOLDER_SUCCESS,
    bookmark: newBookmark
  };
};

var addBookmarkError = function( error ) {
  return {
    type: actionTypes.ADD_BOOKMARK_ERROR,
    error: error
  };
};

var addBookmark = function(  ) {
  return function( dispatch ) {
      var newBookmark = {
        url: "https://github.com/robbykim/bookmarks-fullstack",
        title: "Full stack Bookmark Repo",
        description: "The repo for the fullstack bookmark project.",
        screenshot: "https://guides.github.com/introduction/getting-your-project-on-github/repository.png",
        user: "Joe",
        folderName: "Work",
        tags: ["Redux", "Thinkful"]
      };
      storage.bookmarks.push(newBookmark);
      return dispatch( addBookmarkSuccess( newBookmark ) );  
  };
};


var addFolderSuccess = function( newFolderName ) {
  return {
    type: actionTypes.ADD_FOLDER_SUCCESS,
    folder: newFolderName
  };
};

var addFolderError = function( error ) {
  return {
    type: actionTypes.ADD_FOLDER_ERROR,
    error: error
  };
};

var addFolder = function(  ) {
  return function( dispatch ) {
      var newFolder = "Project Ideas";
      storage.folders.push(newFolder);
      return dispatch( addFolderSuccess( newBookmark ) );  
  };
};

// Get requests
var getBookmarksSuccess = function( bookmarks ) {
  return {
    type: actionTypes.ADD_FOLDER_SUCCESS,
    bookmarks: bookmarks
  };
};

var getBookmarksError = function( error ) {
  return {
    type: actionTypes.ADD_BOOKMARK_ERROR,
    error: error
  };
};

var getBookmarks = function( ) {
  return function( dispatch ) {
      return dispatch( getBookmarksSuccess( storage.bookmarks ) );  
  };
};

var getFoldersSuccess = function( folders ) {
  return {
    type: actionTypes.ADD_FOLDER_SUCCESS,
    folders: folders
  };
};

var getFoldersError = function( error ) {
  return {
    type: actionTypes.ADD_FOLDER_ERROR,
    error: error
  };
};

var getFolders = function( ) {
  return function( dispatch ) {
      return dispatch( getFoldersSuccess( storage.folders ) );  
  };
};

var getTagsSuccess = function( tags ) {
  return {
    type: actionTypes.GET_TAGS_SUCCESS,
    tags: tags
  };
};

var getTagsError = function( error ) {
  return {
    type: actionTypes.GET_TAGS_SUCCESS,
    error: error
  };
};

var getTags = function( ) {
  return function( dispatch ) {
    return dispatch( getTagsSuccess( storage.tags ) );
  }
};

var getBookmarksByFolderSuccess = function( bookmarks ) {
  return {
    type: actionTypes.GET_BOOKMARKS_BY_FOLDER_SUCCESS,
    bookmarks: bookmarks
  };
};

var getBookmarksByFolderError = function( error ) {
  return {
    type: actionTypes.GET_BOOKMARKS_BY_FOLDER_ERROR,
    error: error
  };
};

var getBookmarksByFolder = function( folder ) {
  return function( dispatch ) {
      bookmarks = storage.bookmarks.filter(function(value) {
        return value.FolderName === folder;
      });
      return dispatch( getBookmarksByFolderSuccess( bookmarks ) );  
  };
};

var getBookmarksByTagSuccess = function( bookmarks ) {
  return {
    type: actionTypes.GET_BOOKMARKS_BY_TAG_SUCCESS,
    bookmarks: bookmarks
  };
};

var getBookmarksByTagError = function( bookmarks ) {
  return {
    type: actionTypes.GET_BOOKMARKS_BY_TAG_ERROR,
    error: error
  };
};

var getBookmarksByTag = function( tag ) {
  return function( dispatch ) {
      bookmarks = storage.bookmarks.filter(function(value) {
        return value.tag.indexOf(tag) > 1;
      });
      return dispatch( getBookmarksByTagSuccess( bookmarks ) );  
  };
};

// Put requests
var editBookmarkSuccess = function( editedBookmark ) {
  return {
    type: actionTypes.EDIT_BOOKMARK_SUCCESS,
    bookmark: editedBookmark
  };
};

var editBookmarkError = function( error ) {
  return {
    type: actionTypes.EDIT_BOOKMARK_ERROR,
    error: error
  };
};

var editBookmark = function( editedBookmark ) {
  return function( dispatch ) {
      return dispatch( editBookmark(  ) );  
  };
};

var deleteBookmarkSuccess = function( deletedBookmark ) {
  return {
    type: actionTypes.DELETE_BOOKMARK_SUCCESS,
    bookmark: deleteBookmark
  };
};

var deleteBookmarkError = function ( error ) {
  return {
    type: actionTypes.DELETE_BOOKMARK_ERROR,
    error: error
  };
};

var deleteBookmark = function( bookmark ) {
  return function( dispatch ) {
      return dispatch( deleteBookmark(  ) );  
  };
};

var confirmDeleteBookmark = function(  ) {
  return {
    type: actionTypes.CONFIRM_DELETE_BOOKMARK
  };
};

exports.addBookmark = addBookmark;
exports.addFolder = addFolder;
exports.getBookmarks = getBookmarks;
exports.getFolders = getFolders;
exports.getBookmarksByFolder = getBookmarksByFolder;
exports.getBookmarksByTag = getBookmarksByTag;
exports.editBookmark = editBookmark;
exports.deleteBookmark = deleteBookmark;
exports.confirmDeleteBookmark = confirmDeleteBookmark;
