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
const itemsInList = document.querySelectorAll("ul li");
let itemLength = itemsInList.length - 1;
function removeLastItemFromList() {
  let lastItemInList = itemsInList[itemLength];
  parentOfList.removeChild(lastItemInList);
  itemLength--;
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

const myImage = document.createElement("img");
myImage.src =
  "https://images.unsplash.com/photo-1551430872-6b11a04a2be1?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

ulAppend(myImage);

function changeSize(element) {
  element.style.height = "30px";
}

const changeImageSize = document.querySelector("#image-1");
changeSize(changeImageSize);

function makesInvisible(element) {
  element.classList.add("invisible");
}

const mainHeading = document.querySelector("h1");
makesInvisible(mainHeading);

function textToList(text) {
  const newListItem = document.createElement("li");
  newListItem.innerText = text;
  return newListItem;
}

const tryingToFunction = textToList("this qualifies as some text");
ulAppend(tryingToFunction);

function takerOfStrings(headerSize, someTexts) {
  const newHeader = document.createElement("h" + headerSize);
  newHeader.innerText = someTexts;
  return newHeader;
}

const tryingToFunctionSomeMore = takerOfStrings("2", "someTextsOfThings");

ulAppend(tryingToFunctionSomeMore);
