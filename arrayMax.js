var marks = [45, 77, 90, 81, 33, 32, 56, 23, 93, 74, 87,];
var max = marks[0];
for(var i =0 ; i< marks.length; i++){
    if(marks[i] > max){
        max = marks[i];
    }
}
console.log ("Higest Value:", max)