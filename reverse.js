function reverseString(str){
  var reverse = "";
  for (var i =0; i < str.length; i++){
    var char = str[i];
    reverse = char + reverse;
  }
  return reverse;
}


var statement = "Hello Friends, I come in Peace.";
var reversed = reverseString(statement);
console.log(reversed);