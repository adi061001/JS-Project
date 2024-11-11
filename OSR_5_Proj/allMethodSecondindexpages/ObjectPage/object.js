
function slideChange_First() {
    document.getElementById("div_id_sec-2").style.display = "block"
  
    document.getElementById("div_id_sec-3").style.display = "none"
    document.getElementById("last-div-slider-button-first").style.background =
      "#362d6bbd"
  
    document.getElementById("last-div-slider-button_second").style.background =
      "white"
    document.getElementById("last-div-slider-button_second").style.border =
      "1px solid black"
    document.getElementById("last-div-slider-button-first").style.border = "none"
  }
  
  function slideChange_Second() {
    document.getElementById("div_id_sec-2").style.display = "none"
    document.getElementById("div_id_sec-3").style.display = "block"
    document.getElementById("last-div-slider-button-first").style.background =
      "white"
    document.getElementById("last-div-slider-button_second").style.background =
      "#362d6bbd"
  
    document.getElementById("last-div-slider-button_second").style.border = "none"
    document.getElementById("last-div-slider-button-first").style.border =
      "1px solid black"
  }

// Assign
let checkAssign=(event)=>{
    event.preventDefault()  
  let firstkeyObj = document.getElementById("objAssignkey_first").value
  
  let secondkeyObj =document.getElementById("objAssignkey_second").value
  
  let dataobj=(b)=>{
    return Object.fromEntries(b)
}



let jsonforArr=JSON.parse("["+firstkeyObj+"]")

let firstObjdata =dataobj(jsonforArr)

let dataobjsec=(b)=>{
    return Object.fromEntries(b)
}


let jsonforArrSecond=JSON.parse("[" + secondkeyObj+"]")

let seconObjct=dataobjsec(jsonforArrSecond)


let Obj=Object.assign({},firstObjdata,seconObjct)

let detailsObjAssig=""
let detailsObjAssigSecond=""
for (let [key, value] of Object.entries(Obj)) {
  detailsObjAssigSecond
  detailsObjAssig+=(key) +":"+(value) +"," +"<br>";

  
}

// let objKey=""
// let objval=""
// for(let key in Obj  ){
  
//     objKey +=key+":"+objval
// }
// // for(let val of Obj){
// //     objval+=val
// // }

document.getElementById("AssignOutput").innerHTML=` the output :- <br><br> {${detailsObjAssig}}`

}


    

let closemethodAssign=()=>{
  document.getElementById("header-array-len").style.display="none"
}