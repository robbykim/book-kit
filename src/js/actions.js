var actionTypes = require('./constants');
var storage = require('./storage');

// URL for heroku: https://shrouded-journey-65738.herokuapp.com/
// URL for localhost: https://localhost:5000

/* Redux Action Creators */

var fetch = require('isomorphic-fetch');

var searchTextChange = function(text) {
  return {
    type: actionTypes.SEARCH_TEXT_CHANGE,
    text: text
  };
};

// Post Requests
var addBookmarkSuccess = function(newBookmark) {
  return {
    type: actionTypes.ADD_BOOKMARK_SUCCESS,
    bookmark: newBookmark
  };
};

var addBookmarkError = function(error) {
  return {
    type: actionTypes.ADD_BOOKMARK_ERROR,
    error: error
  };
};

var addBookmark = function(newBookmark) {
  return function(dispatch) {
    var init = {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBookmark)
    };
    var url = 'http://localhost:5000/bookmark';
    fetch(url, init).then(function(res) {
      if (res.status < 200 || res.status >= 300) {
        var error = new Error(res.statusText);
        error.reponse = res;
        throw error;
      }
      return res.json();
    }).then(function(bookmark) {
      return dispatch(addBookmarkSuccess(bookmark));
    }).catch(function(error) {
      return dispatch(addBookmarkError(error));
    });
  };
};

var addFolderSuccess = function(newFolderName) {
  return {
    type: actionTypes.ADD_FOLDER_SUCCESS,
    folder: newFolderName
  };
};

var addFolderError = function(error) {
  return {
    type: actionTypes.ADD_FOLDER_ERROR,
    error: error
  };
};

var addFolder = function(newFolder) {
  return function(dispatch) {
    var init = {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        foldername: newFolder
      })
    };
    var url = 'http://localhost:5000/folder';
    fetch(url, init).then(function(res) {
      if (res.status < 200 || res.status >= 300) {
        var error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then(function(folder) {
      return dispatch(addFolderSuccess(folder));
    }).catch(function(error) {
      return dispatch(addFolderError(error));
    });
  };
};

// Get requests
var getBookmarksSuccess = function(bookmarks) {
  return {
    type: actionTypes.GET_BOOKMARKS_SUCCESS,
    bookmarks: bookmarks
  };
};

var getBookmarksError = function(error) {
  return {
    type: actionTypes.GET_BOOKMARKS_ERROR,
    error: error
  };
};

var getBookmarks = function() {
  return function(dispatch) {
    var url = 'http://localhost:5000/bookmarks';
    return fetch(url).then(function(res) {
      if (res.status < 200 || res.status >= 300) {
        var error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then(function(bookmarks) {
      return dispatch (
        getBookmarksSuccess(bookmarks)
      );
    }).catch(function(error) {
      return dispatch(
        getBookmarksError(error)
      );
    });
  };
};

var getFoldersSuccess = function(folders) {
  return {
    type: actionTypes.GET_FOLDERS_SUCCESS,
    folders: folders
  };
};

var getFoldersError = function(error) {
  return {
    type: actionTypes.GET_FOLDERS_ERROR,
    error: error
  };
};

var getFolders = function() {
  return function(dispatch) {
    var url = 'http://localhost:5000/folders';
    return fetch(url).then(function(res) {
      if (res.status < 200 || res.status >= 300) {
        var error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then(function(folders) {
      return dispatch (
        getFoldersSuccess(folders)
      );
    }).catch(function(error) {
      return dispatch(
        getFoldersError(error)
      );
    });
  };
};

var getTagsSuccess = function(tags) {
  return {
    type: actionTypes.GET_TAGS_SUCCESS,
    tags: tags
  };
};

var getTagsError = function(error) {
  return {
    type: actionTypes.GET_TAGS_ERROR,
    error: error
  };
};

var getTags = function() {
  return function(dispatch) {
    return dispatch(getTagsSuccess(storage.tags));
  };
};

var getBookmarksByFolderSuccess = function(bookmarks) {
  return {
    type: actionTypes.GET_BOOKMARKS_BY_FOLDER_SUCCESS,
    bookmarks: bookmarks
  };
};

var getBookmarksByFolderError = function(error) {
  return {
    type: actionTypes.GET_BOOKMARKS_BY_FOLDER_ERROR,
    error: error
  };
};

var getBookmarksByFolder = function(folder) {
  return function(dispatch) {
    var bookmarks = storage.bookmarks.filter(function(value) {
      return value.FolderName === folder;
    });
    return dispatch(getBookmarksByFolderSuccess(bookmarks));
  };
};

var getBookmarksByTagSuccess = function(bookmarks) {
  return {
    type: actionTypes.GET_BOOKMARKS_BY_TAG_SUCCESS,
    bookmarks: bookmarks
  };
};

var getBookmarksByTagError = function(bookmarks) {
  return {
    type: actionTypes.GET_BOOKMARKS_BY_TAG_ERROR,
    error: error
  };
};

var getBookmarksByTag = function(tag) {
  return function(dispatch) {
    var bookmarks = storage.bookmarks.filter(function(value) {
      return value.tag.indexOf(tag) > 1;
    });
    return dispatch(getBookmarksByTagSuccess(bookmarks));
  };
};

// Put requests
var editBookmarkSuccess = function(editedBookmark) {
  return {
    type: actionTypes.EDIT_BOOKMARK_SUCCESS,
    bookmark: editedBookmark
  };
};

var editBookmarkError = function(error) {
  return {
    type: actionTypes.EDIT_BOOKMARK_ERROR,
    error: error
  };
};

var editBookmark = function(editedBookmark) {
  return function(dispatch) {
    return dispatch(editBookmark());
  };
};

var deleteBookmarkSuccess = function(deletedBookmark) {
  return {
    type: actionTypes.DELETE_BOOKMARK_SUCCESS,
    bookmark: deletedBookmark
  };
};

var deleteBookmarkError = function(error) {
  return {
    type: actionTypes.DELETE_BOOKMARK_ERROR,
    error: error
  };
};

var deleteBookmark = function(bookmarkid) {
  return function(dispatch) {
    var init = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    var url = 'http://localhost:5000/bookmark/' + bookmarkid;
    fetch(url, init).then(function(res) {
      if (res.status < 200 || res.status >= 300) {
        var error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then(function(bookmark) {
      return dispatch(deleteBookmarkSuccess(bookmark));
    }).catch(function(error) {
      return dispatch(deleteBookmarkError(error));
    });
  };
};

var deleteFolderSuccess = function(deletedFolder) {
  return {
    type: actionTypes.DELETE_FOLDER_SUCCESS,
    folder: deletedFolder
  };
};

var deleteFolderError = function(error) {
  return {
    type: actionTypes.DELETE_FOLDER_ERROR,
    error: error
  };
};

var deleteFolder = function(folderid) {
  return function(dispatch) {
    var init = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    var url = 'http://localhost:5000/folder/' + folderid;
    fetch(url, init).then(function(res) {
      if (res.status < 200 || res.status >= 300) {
        var error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then(function(folder) {
      return dispatch(deleteFolderSuccess(folder));
    }).catch(function(error) {
      return dispatch(deleteFolderError(error));
    });
  };
};

var confirmDeleteBookmark = function() {
  return {
    type: actionTypes.CONFIRM_DELETE_BOOKMARK
  };
};

exports.searchTextChange = searchTextChange;
exports.addBookmark = addBookmark;
exports.addFolder = addFolder;
exports.getBookmarks = getBookmarks;
exports.getFolders = getFolders;
exports.getTags = getTags;
exports.getBookmarksByFolder = getBookmarksByFolder;
exports.getBookmarksByTag = getBookmarksByTag;
exports.editBookmark = editBookmark;
exports.deleteBookmark = deleteBookmark;
exports.deleteFolder = deleteFolder;
exports.confirmDeleteBookmark = confirmDeleteBookmark;
