// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  /*
    - case for arrays, objects, string, and everything else
  */
  var arr = [];
  let output = ``;
  if (obj === null || typeof obj === 'number' || typeof obj === 'boolean') {
    return `${obj}`;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    // if (obj.length === 0) {
    //   return ``;
    // }
    // // output += `${obj[0]},`;
    // // stringifyJSON(obj.slice(0));
    // // // return '[' + stringifyJSON(obj) + ']';
    obj.forEach(function(element) {
      arr.push(stringifyJSON(element));
    });
    return `[${arr}]`;
  } else if (typeof obj === 'object' && !Array.isArray(obj)) {
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        return '{}';
      }
    }
    return '{' + obj + '}';
  }
  return output;
};

// var array = [1, 2, 3, 4, 5];

// stringifyJSON(array);