## Project Overview

In this project is a web-based application that reads RSS feeds. It uses the Google Feed Reader API to grab RSS feeds on JSON object we can make use of. This includes six test suites and seven tests written in jasmine.


## How to run the application successfully 

1.  Download the project in your local computer. 
2.  Open the index.html file in your browser.
3.  To open application on your phone using python server: 
     *   ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

## Application Features

1.  The names and URLs to all the feeds are hardcoded in app.js in allFeeds array.
2.  By default the application loads the first feed that is defined in allFeeds array.
3.  When user clicks on left hand side menu, it displays all feed names menu.
4.  If user clicks on side menu again, the menu is hidden again.
5.  When user selects any feed name, all RSS feeds are shown on main page.

## Tests runs against the application - tests written in Jasmine

### If any of the tests mentioned below fails, the corresponding error will be shown on the bottom of the page.

1.  First Suite is 'RSS Feeds' -
   *  test to make sure that allFeeds variable has been defined and that it is not empty. If the allFeeds array is empty, this test fails and error will be shown. 
   *  test loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty 
  * test loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
2.  Test suite 'The menu' -
  *  test ensures the menu is hidden by default.
  *  test ensures the menu changes visibility when the menu icon is clicked.
3. Test suite 'Initial entries' -
  *  test ensures when the loadFeed function is called and completes its work, there is at least a single entry within the feed.
4.  Test suite 'New Feed Selection' -
  *  test ensures when a new feed is loaded by the loadFeed function then the content actually changes.