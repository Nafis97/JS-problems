var id = [1 , 2, 4, 5, 2, 1, 4, 8, 9, 3, 3, 5, 4,6];
var unique = [];

for (var i =0; i < id.length; i++){
     if(unique.indexOf(id[i]) == -1){
        unique.push(id[i]);
     }
}
console.log("Unique Array:", unique);