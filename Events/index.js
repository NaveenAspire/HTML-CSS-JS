var date_time = document.getElementById("button");

var text = document.getElementById("text");

date_time.addEventListener("mouseover",()=>{
    $('[data-toggle="tooltip"]').tooltip();

})

date_time.addEventListener("click",()=>{
    document.getElementById("text").innerHTML = Date();
})

text.addEventListener("focus",()=>{
    text.style.backgroundColor = "#8132a8";
});

text.addEventListener("focusout",()=>{
    text.style.backgroundColor = "white"
})