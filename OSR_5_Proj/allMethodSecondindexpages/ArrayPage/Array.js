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
// Flat
function checkFlat(event) {
  let m = []
  event.preventDefault()
  let inputArr = document.getElementById("arrayFlat").value

  let splitArr = JSON.parse("[" + inputArr + "]")

  document.getElementById(
    "FlatOutput"
  ).innerHTML = `User to input :- [${inputArr}] <br>
  <br>
  output of flat :- [${splitArr}]`
}

// At()
let checkAt = (event) => {
  event.preventDefault()
  let inputArr = document.getElementById("arrayAt_1").value
  let inputIndxValue = document.getElementById("arrayAt").value
  let splitArr = inputArr.split(",")
  document.getElementById(
    "atOutput"
  ).innerText = `the Org array :-[${inputArr}] 
  on index ${inputIndxValue} the element is persent is [${splitArr.at(
    inputIndxValue
  )}]`
}
// shift
let checkShift = (event) => {
  event.preventDefault()
  let inputArr = document.getElementById("arrayUnShift_1").value
  let splitArr = inputArr.split(",")
  splitArr.shift()
  document.getElementById(
    "shiftOutput"
  ).innerHTML = `the Org array :- [${inputArr}]
    shift renove first element :-[${splitArr}]`
}

let checkUnShift = (event) => {
  event.preventDefault()
  let inputArr = document.getElementById("arrayUnShift_1").value
  let inputAddArr = document.getElementById("arrayUnShift_2").value
  let splitArr = inputArr.split(",")
  splitArr.unshift(inputAddArr)
  console.log(splitArr)
  document.getElementById(
    "unshiftOutput"
  ).innerHTML = `the Org arr :-[${inputArr}]
   the unshift add new element :-[${splitArr} ]`
}
let openUnShift = () => {
  document.getElementById("header-array-UnShift").style.display = "block"
  document.getElementById("header-array-Shift").style.display = "none"
}
let openShift = () => {
  document.getElementById("header-array-Shift").style.display = "block"
  document.getElementById("header-array-UnShift").style.display = "none"
}

// Sort
let checkSort = (event) => {
  event.preventDefault()
  let inputArr = document.getElementById("arraySort").value
  let splitArr = inputArr.split(",")
  let emtyArrFirst = []
  let emtyArrSecond = []
  for (let i of splitArr) {
    let checkNaN = parseInt(i)
    if (isNaN(checkNaN) == true) {
      emtyArrFirst.push(i)
      emtyArrFirst.sort()
    } else {
      emtyArrSecond.push(i * 1)
      emtyArrSecond.sort((a, b) => a - b)
    }
  }
  let resultOutput = [...emtyArrFirst, ...emtyArrSecond]
  document.getElementById(
    "sortOutput"
  ).innerHTML = `the Org arr:- [${inputArr}] <br> 
The sort Output :- [${resultOutput}]    `
}
