// document.getElementById("inputfield").value
// document.getElementById("row1").value

let html_arr = document.getElementById("row1").children
let str_arr = Array.from(html_arr).map(el=>el.innerText)



document.getElementById("inputfield").addEventListener("keypress", myFunction);
let counter = 0 
function myFunction(e){
    console.log(e)
    if(e.key === " "){
        // alert("push")
        document.getElementById("inputfield").value = str_arr[counter] +' '
        counter++
    }
}


