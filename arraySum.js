function arraySum(array){
    var sum = 0;
    for( var i=0 ; i < array.length; i++){
        sum = sum + array[i];
    }
    //console.log("Total of the numbers:", sum);
    return sum;
}
var numbers = [13, 15, 7, 9, 21, 23, 11, 9 ,4, 2, 0, 6, 19, 25];
console.log(arraySum(numbers));
