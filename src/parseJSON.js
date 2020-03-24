// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var array = [];
  var object = {};
  if (json.startsWith('[')) {
    let jsonString = json.slice(0, json.length - 1);
    let jsonArray = jsonString.split(',')
    return array.push(parseJSON(jsonString));
  }
  if (json.startsWith('{')) {
    let jsonString = json.slice(0, json.length - 1);

  }

};

// '{"foo": "bar"}' i++ i+=2

// !!"true"

// Number()

// play

// ['"', 'p', 'l', 'a', 'y', '"']

// ['"', '{', '}', '"']

// {

// charAt()

/*
  - possibly methods
    - charAt()
    -
*/