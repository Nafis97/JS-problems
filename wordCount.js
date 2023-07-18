var sentence = "I wanted  to go out  for waffles  but unfortunetly it's raining outside. Maybe we can hangout next week?";
// console.log(sentence.length);
// console.log(sentence[3]);
var word = 0;
for (var i =0; i< sentence.length; i++){
    var char = sentence[i];
    if(char == " " && sentence[i-1]!= " "){
        word++;
    }
}
word++;
console.log(word);
