// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  let output = [];

  var element = arguments[1] || document.body;

  if (element.classList && element.classList.contains(className)) {
    output.push(element);
  }

  element.childNodes.forEach(function(currentNode) {
    output = output.concat(getElementsByClassName(className, currentNode));
  })

  return output;
};