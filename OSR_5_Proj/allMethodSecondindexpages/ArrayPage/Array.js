//card slider

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
// length
function checkength(event) {
  event.preventDefault()

  let inputArr = document.getElementById("arraylength").value
  let splitArr = inputArr.split(",")

  if (inputArr == 0) {
  } else {
    document.getElementById("lengthoutput").innerText = splitArr.length
  }
  document.getElementById("arraylength").value = " "
}

function closemethodlen() {
  document.getElementById("header-array-len").style.display = "none"
}
// POP
function checkPop(event) {
  event.preventDefault()
  let inputArr = document.getElementById("arrayPop").value
  let splitInput = inputArr.split(",")
  splitInput.pop()
  console.log(inputArr)
  document.getElementById(
    "popoutput"
  ).innerHTML = `Orignal String :-[${inputArr}] <br>
  Pop method Output :- [${splitInput}]`
}

function closemethodpop() {
  document.getElementById("header-array-pop").style.display = "none"
}

// Push
let checkPush = (event) => {
  event.preventDefault()
  let inputArr = document.getElementById("arrayPush").value
  let addInputArr = document.getElementById("arrayPush_add").value
  let splitArr = inputArr.split(",")
  splitArr.push(addInputArr)

  document.getElementById(
    "pushOutput"
  ).innerHTML = `the Orig array :-[${inputArr}] <br>
    push method chnage :-[${splitArr}]`
}

function closemethodPush() {
  document.getElementById("header-array-push").style.display = "none"
}
