var array  = [1,2,3,4,5];

var result = 0;

//For-each

var fore = array.forEach((value)=>{
    result = value+result
})

console.log("The sum of 5 numbers are : "+result);


//Filter

var array1 = [99,98,97,95,94];

var goodMarks=array1.filter((mark)=>{
    return mark>= 95;
});

console.log("For Filter ")
console.log(goodMarks);

//Map

var array2 = [10,20,30,40,50];

var half = array2.map((num)=>{
    return num/2;
});

console.log("For Map")
console.log(half);