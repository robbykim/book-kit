import actionTypes from './constants';
import fetch from 'isomorphic-fetch';

// URL for heroku: https://shrouded-journey-65738.herokuapp.com/
// URL for localhost: https://localhost:5000

/* Redux Action Creators */

var searchTextChange = function(text) {
  return {
    type: actionTypes.SEARCH_TEXT_CHANGE,
    text: text
  };
};

/* BOOKMARK ACTIONS */
// Get Requests
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
    var url = 'http://localhost:5000/bookmarks';
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

// Put Requests
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
    var init = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedBookmark)
    };
    var url = 'http://localhost:5000/bookmarks/' + editedBookmark.bookmarkid;
    fetch(url, init).then(function(res) {
      if (res.status < 200 || res.status >= 300) {
        var error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then(function(editedBookmark) {
      return dispatch(editBookmarkSuccess(editedBookmark));
    }).catch(function(err) {
      return dispatch(editBookmarkError(err));
    });
  };
};

// Delete Requests
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
    var url = 'http://localhost:5000/bookmarks/' + bookmarkid;
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

/* FOLDER ACTIONS */
// Get Requests
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

// Post Requests
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
    var url = 'http://localhost:5000/folders';
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

// Put Requests
var editFolderSuccess = function(editedFolder) {
  return {
    type: actionTypes.EDIT_FOLDER_SUCCESS,
    folder: editedFolder
  };
};

var editFolderError = function(error) {
  return {
    type: actionTypes.EDIT_FOLDER_ERROR,
    folder: error
  };
};

var editFolder = function(editedFolder) {
  return function(dispatch) {
    var init = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedFolder)
    };
    var url = 'http://localhost:5000/folders/' + editedFolder.folderid;
    fetch(url, init).then(function(res) {
      if (res.status < 200 || res.status >= 300) {
        var error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then(function(editedFolder) {
      dispatch(editFolderSuccess(editedFolder));
    }).catch(function(error) {
      dispatch(editFolderError(error));
    });
  };
};


// Delete Requests
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
    var url = 'http://localhost:5000/folders/' + folderid;
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

/* TAGS ACTIONS */
// Get Requests

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
  // return function(dispatch) {
    // return dispatch(getTagsSuccess(storage.tags));
  // };
};

exports.searchTextChange = searchTextChange;
exports.addBookmark = addBookmark;
exports.addFolder = addFolder;
exports.getBookmarks = getBookmarks;
exports.getFolders = getFolders;
exports.getTags = getTags;
exports.editBookmark = editBookmark;
exports.editFolder = editFolder;
exports.deleteBookmark = deleteBookmark;
exports.deleteFolder = deleteFolder;
