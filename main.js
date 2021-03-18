//puts a linethrough the first li of the ul.

const lineThroughFirst = document.querySelector("ul li");
function strikeOut() {
  lineThroughFirst.style.textDecoration = "line-through";
}
strikeOut();

//takes in id and url as string values and assigns url as src to image id.
function takesInStrings(id, url) {
  const redirect = document.querySelector(id);
  redirect.src = url;
}

//using previous function, putting three imgs in.

takesInStrings(
  "#image-1",
  "https://images.unsplash.com/photo-1613047880926-105f6e0662ec?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
);

takesInStrings(
  "#image-2",
  "https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
);

takesInStrings(
  "#image-3",
  "https://images.unsplash.com/photo-1595729257407-e4b69b4c2650?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
);

// removes last item from list
const parentOfList = document.querySelector("#arguments");
const childrenInList = document.querySelectorAll("ul li");
let listLength = childrenInList.length - 1;
function removeLastItemFromList() {
  let lastChildInList = childrenInList[listLength];
  parentOfList.removeChild(lastChildInList);
  listLength--;
}
removeLastItemFromList();
removeLastItemFromList();

//takes in an id string for element and changes its font size to fontsize string.

function fontSizeManipulator(id, size) {
  const fontChanged = document.querySelector(id);
  fontChanged.style.fontSize = size;
}

fontSizeManipulator("#thing-2", "28px");

//-----------------part 2-------------------------

//function that takes in dom element and appends to 'ul'

function ulAppend(element) {
  parentOfList.appendChild(element);
}

//using previous function to append an img to ul
const myImage = document.createElement("img");
myImage.src =
  "https://images.unsplash.com/photo-1551430872-6b11a04a2be1?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

ulAppend(myImage);

//function that takes an img and sets height to 30px.
function changeSize(element) {
  element.style.height = "30px";
}

//using previous function to change height to 30px.
const changeImageSize = document.querySelector("#image-1");
changeSize(changeImageSize);

//function that applies class "invisible" to target element.
function makesInvisible(element) {
  element.classList.add("invisible");
}

//using previous function to add "invisible" class to h1 element.
const mainHeading = document.querySelector("h1");
makesInvisible(mainHeading);

//-----------------part 3-------------------------

//function that takes some text and returns a li with that text.

function textToList(text) {
  const newListItem = document.createElement("li");
  newListItem.innerText = text;
  return newListItem;
}

//make a variable with previous function and run that value through append function in part 2 problem 1
const tryingToFunction = textToList("this qualifies as some text");
ulAppend(tryingToFunction);

//function that takes in a string of a number 1-6. creates a header element of that size and then puts second input string in text between opening and closing header tags.

function takerOfStrings(headerSize, someTexts) {
  const newHeader = document.createElement("h" + headerSize);
  newHeader.innerText = someTexts;
  return newHeader;
}

//make a variable with previous function and run that value through append function in part 2 problem 1

const tryingToFunctionSomeMore = takerOfStrings("6", "someTextsOfThings");

ulAppend(tryingToFunctionSomeMore);

// const parentOfList = document.querySelector("#arguments");
// const childrenInList = document.querySelectorAll("ul li");
// let listLength = childrenInList.length - 1;
// function removeLastItemFromList() {
//   let lastChildInList = childrenInList[listLength];
//   parentOfList.removeChild(lastChildInList);
//   listLength--;
// }
