import actionTypes from './constants';
import fetch from 'isomorphic-fetch';

// URL for heroku: https://shrouded-journey-65738.herokuapp.com/
// URL for localhost: https://localhost:5000

/* Redux Action Creators */

const searchTextChange = (text) => {
  return {
    type: actionTypes.SEARCH_TEXT_CHANGE,
    text: text
  };
};

/* BOOKMARK ACTIONS */
// Get Requests
const getBookmarksSuccess = (bookmarks) => {
  return {
    type: actionTypes.GET_BOOKMARKS_SUCCESS,
    bookmarks: bookmarks
  };
};

const getBookmarksError = (error) => {
  return {
    type: actionTypes.GET_BOOKMARKS_ERROR,
    error: error
  };
};

const getBookmarks = () => {
  return (dispatch) => {
    let url = 'http://localhost:5000/bookmarks';
    return fetch(url).then((res) => {
      if (res.status < 200 || res.status >= 300) {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then((bookmarks) => {
      return dispatch (
        getBookmarksSuccess(bookmarks)
      );
    }).catch((error) => {
      return dispatch(
        getBookmarksError(error)
      );
    });
  };
};
// Post Requests
const addBookmarkSuccess = (newBookmark) => {
  return {
    type: actionTypes.ADD_BOOKMARK_SUCCESS,
    bookmark: newBookmark
  };
};

const addBookmarkError = (error) => {
  return {
    type: actionTypes.ADD_BOOKMARK_ERROR,
    error: error
  };
};

const addBookmark = (newBookmark) => {
  return (dispatch) => {
    let init = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBookmark)
    };
    let url = 'http://localhost:5000/bookmarks';
    fetch(url, init).then((res) => {
      if (res.status < 200 || res.status >= 300) {
        let error = new Error(res.statusText);
        error.reponse = res;
        throw error;
      }
      return res.json();
    }).then((bookmark) => {
      return dispatch(addBookmarkSuccess(bookmark));
    }).catch((error) => {
      return dispatch(addBookmarkError(error));
    });
  };
};

// Put Requests
const editBookmarkSuccess = (editedBookmark) => {
  return {
    type: actionTypes.EDIT_BOOKMARK_SUCCESS,
    bookmark: editedBookmark
  };
};

const editBookmarkError = (error) => {
  return {
    type: actionTypes.EDIT_BOOKMARK_ERROR,
    error: error
  };
};

const editBookmark = (editedBookmark) => {
  return (dispatch) => {
    let init = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedBookmark)
    };
    let url = 'http://localhost:5000/bookmarks/' + editedBookmark.bookmarkid;
    fetch(url, init).then((res) => {
      if (res.status < 200 || res.status >= 300) {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then((editedBookmark) => {
      return dispatch(editBookmarkSuccess(editedBookmark));
    }).catch((err) => {
      return dispatch(editBookmarkError(err));
    });
  };
};

// Delete Requests
const deleteBookmarkSuccess = (deletedBookmark) => {
  return {
    type: actionTypes.DELETE_BOOKMARK_SUCCESS,
    bookmark: deletedBookmark
  };
};

const deleteBookmarkError = (error) => {
  return {
    type: actionTypes.DELETE_BOOKMARK_ERROR,
    error: error
  };
};

const deleteBookmark = (bookmarkid) => {
  return (dispatch) => {
    let init = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    let url = 'http://localhost:5000/bookmarks/' + bookmarkid;
    fetch(url, init).then((res) => {
      if (res.status < 200 || res.status >= 300) {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then((bookmark) => {
      return dispatch(deleteBookmarkSuccess(bookmark));
    }).catch((error) => {
      return dispatch(deleteBookmarkError(error));
    });
  };
};

/* FOLDER ACTIONS */
// Get Requests
const getFoldersSuccess = (folders) => {
  return {
    type: actionTypes.GET_FOLDERS_SUCCESS,
    folders: folders
  };
};

const getFoldersError = (error) => {
  return {
    type: actionTypes.GET_FOLDERS_ERROR,
    error: error
  };
};

const getFolders = () => {
  return (dispatch) => {
    let url = 'http://localhost:5000/folders';
    return fetch(url).then((res) => {
      if (res.status < 200 || res.status >= 300) {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then((folders) => {
      return dispatch (
        getFoldersSuccess(folders)
      );
    }).catch((error) => {
      return dispatch(
        getFoldersError(error)
      );
    });
  };
};

// Post Requests
const addFolderSuccess = (newFolderName) => {
  return {
    type: actionTypes.ADD_FOLDER_SUCCESS,
    folder: newFolderName
  };
};

const addFolderError = (error) => {
  return {
    type: actionTypes.ADD_FOLDER_ERROR,
    error: error
  };
};

const addFolder = (newFolder) => {
  return (dispatch) => {
    let init = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        foldername: newFolder
      })
    };
    let url = 'http://localhost:5000/folders';
    fetch(url, init).then((res) => {
      if (res.status < 200 || res.status >= 300) {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then((folder) => {
      return dispatch(addFolderSuccess(folder));
    }).catch((error) => {
      return dispatch(addFolderError(error));
    });
  };
};

// Put Requests
const editFolderSuccess = (editedFolder) => {
  return {
    type: actionTypes.EDIT_FOLDER_SUCCESS,
    folder: editedFolder
  };
};

const editFolderError = (error) => {
  return {
    type: actionTypes.EDIT_FOLDER_ERROR,
    folder: error
  };
};

const editFolder = (editedFolder) => {
  return (dispatch) => {
    let init = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedFolder)
    };
    let url = 'http://localhost:5000/folders/' + editedFolder.folderid;
    fetch(url, init).then((res) => {
      if (res.status < 200 || res.status >= 300) {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then((editedFolder) => {
      dispatch(editFolderSuccess(editedFolder));
    }).catch((error) => {
      dispatch(editFolderError(error));
    });
  };
};


// Delete Requests
const deleteFolderSuccess = (deletedFolder) => {
  return {
    type: actionTypes.DELETE_FOLDER_SUCCESS,
    folder: deletedFolder
  };
};

const deleteFolderError = (error) => {
  return {
    type: actionTypes.DELETE_FOLDER_ERROR,
    error: error
  };
};

const deleteFolder = (folderid) => {
  return (dispatch) => {
    let init = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    let url = 'http://localhost:5000/folders/' + folderid;
    fetch(url, init).then((res) => {
      if (res.status < 200 || res.status >= 300) {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
      return res.json();
    }).then((folder) => {
      return dispatch(deleteFolderSuccess(folder));
    }).catch((error) => {
      return dispatch(deleteFolderError(error));
    });
  };
};

/* TAGS ACTIONS */
// Get Requests

const getTagsSuccess = (tags) => {
  return {
    type: actionTypes.GET_TAGS_SUCCESS,
    tags: tags
  };
};

const getTagsError = (error) => {
  return {
    type: actionTypes.GET_TAGS_ERROR,
    error: error
  };
};

const getTags = () => {
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
