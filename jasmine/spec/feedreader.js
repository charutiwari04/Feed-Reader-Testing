/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? Test fails and error is shown.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds
         * object and ensures it has a URL defined and that
         * the URL is not empty.
         */
        it('has a URL defined and URL is not empty', function() {
			allFeeds.forEach(function(feed){
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			});
		});

        /* This test loops through each feed in the allFeeds
         * object and ensures it has a name defined and that
         * the name is not empty.
         */
		it('has a name defined and name is not empty', function() {
			allFeeds.forEach(function(feed){
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
    });


    /* Test suite named "The menu" */
    describe("The menu", function(){
        /* This test ensures the menu element is hidden by default.
         */
        it('menu element hidden by default', function(){
			expect(document.body.classList).toContain("menu-hidden");
		});
         /* This test ensures the menu changes visibility when the menu 
          * icon is clicked. This test containes two expectations:
          * 1. the menu displays when clicked and
          * 2. it hides when clicked again.
          */
		it('menu changes visibility when menu icon clicked', function(){
			var menuIcon = $('.menu-icon-link');
			menuIcon.click();
			expect(document.body.classList).not.toContain("menu-hidden");
			menuIcon.click();
			expect(document.body.classList).toContain("menu-hidden");
		});
    });
    /* Test suite named "Initial Entries" */

        /* This test ensures when the loadFeed function is called and
         * completes its work, there is at least a single .entry element
         * within the .feed container. loadFeed() is asynchronous so 
         * this test uses Jasmine's beforeEach and asynchronous done()
         * function.
         */
    describe("Initial Entries", function(){
		beforeEach(function(done){
			loadFeed(0,function(){
			    done();
			});
		});
		it('there is at least a single .entry within .feed container', function(done){
			var feed = $('.feed');
			expect(feed.find(".entry").length).not.toBe(0);
			for(var i =1;i<allFeeds.length;i++){
				loadFeed(i, function(){
			        expect(feed.find(".entry").length).not.toBe(0);
			        done();
				});
			}
		});
	});
    /* Test suite named "New Feed Selection"

        /* Test that ensures when a new feed is loaded by the loadFeed
         * function then the content actually changes. loadFeed() is 
         * asynchronous so this test uses Jasmine's beforeEach and 
		 * asynchronous done().
         */
	describe("New Feed Selection", function(){
		var oldFeedContent;
		beforeEach(function(done){
			loadFeed(0,function(){
				oldFeedContent = $('.feed').html();
			    done();
			});
		});
		it('feed content actually changes with every new load', function(done){
			for(var i =1;i<allFeeds.length;i++){
				loadFeed(i, function(){
					expect(oldFeedContent).not.toEqual($('.feed').html());
					oldFeedContent = $('.feed').html();
			        done();
				});
			}
		});
		
	});
}());
