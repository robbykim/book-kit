var bookmarks = [{
    id: 1,
    url: "https://trello.com/b/3Uj9v7Oq/full-stack-bookmarks-unnamed",
    title: "Trello Board",
    description: "The bookmark board project managment tool.",
    screenshot: "https://i.kinja-img.com/gawker-media/image/upload/s--mWjnesG_--/18ixcsrp44y9gjpg.jpg",
    user: "Joe",
    folderName: "Work",
    tags: ["Project-Managment", "Thinkful"]
  }, {
    id: 2,
    url: "http://redux.js.org/docs/basics/Actions.html",
    title: "Redux Actions",
    description: "How to create an action in Redux.",
    screenshot: "https://image.slidesharecdn.com/reactreduxintroduction-151124165017-lva1-app6891/95/react-redux-introduction-33-638.jpg?cb=1448383914",
    user: "Joe",
    folderName: "Work",
    tags: ["Redux", "Thinkful"]
  }];

var folders = ["Work", "Personal"];
var tags = ["Project-Managment", "Thinkful", "Redux"];

exports.bookmarks = bookmarks;
exports.folders = folders;