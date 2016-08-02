# Bookmark Project (better name to come)

## Functional Specification

### Overview

The service will provide a means of organizing bookmarks outside of built in browser bookmark functions.

This project is mainly built for learning purposes and not intended for production use.

### Scenarios

#### Scenario 1:

Sierra and Robby are in a class where all of their bookmarks and resources are gobbled up by Slack because Thinkful will not pay for more space. Therefore Sierra and Robby need a way to track these learning resources. They have a bookmark folder in their Chrome browser that "save" the resources but are not very descriptive and very hard to sort through. Sierra and Robby go to bookmarkproject.com (CHANGE THIS) and make accounts in order to organize their resources for later review.

#### Scenario 2:

Chris has a vast collection of cat videos he likes to use for various sarcastic moments. However in his long list of bookmarks, he tends to lose track of them. He even sent an irrelevant cat video to his coworker (gasp). Chris recently signed up for bookmarkproject.com and found that here, he can tag his videos according to their sarcastic purposes.

### Non Goals

This version will not support the following features:
* Multiple Accounts (probs in 1.1)
* Sharing between Accounts
* Cannot automatically grab screenshot from url
* Rich text annotation

### User Experience / Flow

Main Page with folder and tag links displayed on the sidebar. The main nav bar at the top of the screen will contain the add button and the search feature (real-time in 2.0). The add button will display a form (overlay in 2.0) that will take the place of the main content of the page. The form will take in a title, url, description and screenshot url (upload straight in in 2.0). The latest content will be display first in the page in a tiling format.

#### Main page (titled bookmarks):
[wireframe](https://wireframe.cc/tu0eVS)
#### Individual bookmark:
[wireframe](https://wireframe.cc/1eXhiG)
#### Adding a bookmark form:
[wireframe](https://wireframe.cc/WNbziz)

### Components

Search Bar -
Will be a regular form type field that you have to hit enter in order to search. The tiling of results will be filtered to meet the search bar input. 2.0 will feature real time updating.

Add button -
Will render the component to replace the main tiling content in order to fill out information about the new bookmark. 2.0 will feature an overlay rather than replacing content.

Add form -
Form will have inputs for url (req), title (req), description, screenshot, folder (req), and tags. And will have an add button.

Side Bar -
Will have a list of folders and tags that you can select in order to filter the results based on those folders/tags. You can select only one folder at a time but can select multiple tags at a time. 2.0 will feature a scroll bar.

Add Folder -
Will display a text input and be able to add a new folder

Bookmark Tile -
Will show url, title, description, screenshot, have options to add tags / add to folder and also to edit/delete options. Tags optional. Folders required. Duplicates not allowed (tiles with duplicate URLs).

Edit Button -
Should take the bookmark tile and turn the text fields into input fields available to change.

Folders -
You will be able to add new folders on the sidebar

Tags -
You will only be able to add new tags while editing/adding a bookmark.

Database is storing:
* url
* title
* descriptions
* tags
* folder
* screenshot (url)
* User (2.0)

version 1.0
-----------
Enter the bookmark
- url and title

Annotations
- descriptions and etc.

Folders
- for organization

Tagging
- creating your own tags

Screenshots
- uploading screenshots to represent the bookmark

Searching
- Filtering
--- View certain folders/tags by themselves

version 1.1
-----------
Landing page

User accounts
- separate set of data per account
- authentication
- sharing
