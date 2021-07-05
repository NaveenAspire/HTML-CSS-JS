
var array =[];
function addNumber(){
    var input = document.getElementById("input").value;
    array.push(input);
}
function sortArray(){
    array.sort();
    var result =" ";
    for(var i=0;i<array.length;i++){
         
        result = result+" "+array[i];
    }
    document.getElementById("result").innerHTML = result;
}