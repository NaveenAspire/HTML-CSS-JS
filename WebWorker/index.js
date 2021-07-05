
function printEven(){
    console.log("df")  
    if(typeof(Worker)!=="undefined"){  
        debugger;
    var web = new Worker('evenNum.js');
    console.log("h")

    web.onmessage = (event)=>{
        document.getElementById("output").innerHTML = event.data;
    };}
    else
    {
        console.log("no");
    }
}
function stopPrint(){
    console.log("df")
    web.terminate();
}