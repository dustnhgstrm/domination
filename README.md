# DOMination

In this assignment, we'll be writing a list of functions that affect the DOM in various ways.

### Tasks

##### Part One - Querying DOM Elements

These functions won't `return` anything, just make changes to the current DOM.

1. Write a function that puts a line through the text of the first `<li>` in the unordered "Arguments" list (`<ul`). Since this function always does the same thing, it requires no parameters!
2. Now call it! The first list item (`<li>`) should get what's known as a "strikethrough" style.
3. Write a function that takes in a string representing an DOM element's `id` and a string representing a url. The function should set the image with that `id` to have that url as its image source.
4. Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
5. This next function also doesn't require any parameters: write a function that always removes the last `<li>` from the Arguments `<ul>` (try looking up "last child" and the `.remove` method). This is a bit tricky, but doable!
6. Now use it to remove the last two items from that list. You'll need to call it twice!
7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
8. Try using it to change the size of any text on the page.

##### Part Two - DOM Elements as Function Parameters

These functions will take in a DOM element, complete with all the properties and sub-properties that come with it. They then manipulate that element according to the specifications below. They still don't `return` anything.

Whether you create them with `document.createElement` or query an already-existing element with `document.querySelector`, these particular functions will be working with elements. **While testing each of these, you'll need to pass them a DOM element.** Keep in mind as you write the function that its parameter WILL be an element, and when you go to use/test each one, be sure you're passing what that function expects: a DOM Element!

Okay, here are those challenges:

1. Write a function that takes in a DOM element and appends it to the Arguments `<ul>`.
2. Let's use it! Create an image element and pass it into your function. (Note that a `<ul>` doesn't HAVE to have an `<li>` as its only children! Though ideally it should...) You'll know you've succeeded when the image shows up at the end of the Arguments list. Note that the image doesn't HAVE to have a `src` attribute... though it does if you want to see an actual IMAGE; otherwise the way to check would be to use your dev tools to check the DOM and see if the `img` tag got appended.
3. Write a function that takes in an image element and makes its height 30 pixels.
4. Let's use it. Query and then pass in to the function one of the images in the Image Area. It should become a small 30-pixel image.
5. Write a function that takes in an element and gives it the class `invisible`.
6. Now query an element on the page and pass it into that function. You should see it disappear! (Feel free to check the CSS file to see how this class works.)

##### Part Three - Creating DOM Elements

These functions will all take in parameters and use them to make and return new DOM elements. They don't do _anything_ to the DOM. So to test them, we'll have to use our earlier functions.

1. Write a function that takes in text and returns a new `<li>` with that text as its `innerText`.
2. Test it by calling it with some text, placing the return value in a variable, and passing it to your append function from Step 1 of Part 2.
3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.
4. Test it by calling it with a header size and some text, placing the return value in a variable, and passing it to your append function from Step 1 of Part 2.
