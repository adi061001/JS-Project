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
let openLengtharray = () => {
  document.getElementById("header-array-len").style.display = "block"
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

let openPop = () => {
  document.getElementById("header-array-pop").style.display = "block"
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

let openPush = () => {
  document.getElementById("header-array-push").style.display = "block"
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

let openFlat = () => {
  document.getElementById("header-array-Flat").style.display = "block "
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
let openAt = () => {
  document.getElementById("header-array-at").style.display = "block"
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
let openShiftbtn = () => {
  document.getElementById("header-array-Shift").style.display = "block"
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

let openShort = () => {
  document.getElementById("header-array-sort").style.display = "block"
}

// concat
let checkConcat = (event) => {
  event.preventDefault()
  let inputArr = document.getElementById("arrayConcat").value
  let inputSecondArr = document.getElementById("arrayConcat_2").value
  let splitArr = inputArr.split(",")
  let splitArr_2 = inputSecondArr.split(",")
  let outputArr = splitArr.concat(splitArr_2)
  document.getElementById("concatOutput").innerHTML = `
the first Arr :- [${inputArr}] <br>
the second Arr [${inputSecondArr}] <br>
the concat array :-[${outputArr}]  `
}

let openConcat = () => {
  document.getElementById("header-array-Concat").style.display = "block"
}

// Entries
let checkEntries = (event) => {
  event.preventDefault()
  let inputArr = document.getElementById("arrayEntries").value
  let splitArr = inputArr.split(",")
  let outputEntries = splitArr.entries()

  let text = ""
  for (let i of outputEntries) {
    text += `[${i}]<br>`
  }
  document.getElementById(
    "outputEntries"
  ).innerHTML = ` the Org Arr :-[${inputArr}] <br> the output :-<br> ${text} `
}
//  Map
let checkMap = (event) => {
  event.preventDefault()
  let inputArr = document.getElementById("arrayMap").value
  let valueArr = parseInt(document.getElementById("arrayMap_1").value)

  let splitArr = inputArr.split(",")

  let mapOuptArr = splitArr.map((v) => v * 1 + valueArr * 1)

  document.getElementById(
    "outputMAp"
  ).innerHTML = `the Org Arr :- [${splitArr}]<br>
  the map output :- [${mapOuptArr}]`
}

let closeMap = () => {
  document.getElementById("header-array-map").style.display = "none"
}
let mapOpen = () => {
  document.getElementById("header-array-map").style.display = "block"
}

// filter
let checkFilter = (event) => {
  event.preventDefault()
  let inputArr = document.getElementById("arrayFilter").value
  let splitArr = inputArr.split(",")
  let filterArr = splitArr.filter((value) => (value * 1) % 2 == 0)
  document.getElementById(
    "outputFilter"
  ).innerHTML = `the Org Arr :-[${inputArr}] <br>
  the even number :-[${filterArr}]`
}
let closefilter = () => {
  document.getElementById("header-array-filter").style.display = "none"
}
let checkReduce = (event) => {
  event.preventDefault()
  let inputArr = document.getElementById("arrayReduce").value
  let splitArr = inputArr.split(",")
  let reduceOutput = splitArr.reduce((total, value) => {
    return total * 1 + value * 1
  })
  document.getElementById(
    "outputreduce"
  ).innerHTML = `the org Arr :-[${inputArr}] <br>
Additon of all number :-${reduceOutput}`
}
let closeReduce = () => {
  document.getElementById("header-array-Reduce").style.display = "none"
}

let openSlice = () => {
  document.getElementById("header-array-Slice").style.display = "block"
}
let closemethodSlice = () => {
  document.getElementById("header-array-Slice").style.display = "none"
}
// flat
let closemethodDFlat = () => {
  document.getElementById("header-array-Flat").style.display = "none"
}
// Att
let closeMethodDAt = () => {
  document.getElementById("header-array-at").style.display = "none"
}
// shift unshift

closeMethodShift = () => {
  document.getElementById("header-array-Shift").style.display = "none"
}

// openUnShift = () => {
//   document.getElementById("header-array-Shift").style.display = "none"
// }

let openUnShift = () => {
  document.getElementById("header-array-UnShift").style.display = "block"
  document.getElementById("header-array-Shift").style.display = "none"
}
let openShift = () => {
  document.getElementById("header-array-UnShift").style.display = "none"
  document.getElementById("header-array-Shift").style.display = "block"
}
let closeMethodUnShift = () => {
  document.getElementById("header-array-UnShift").style.display = "none"
}

// sort
let closeMethodSort = () => {
  document.getElementById("header-array-sort").style.display = "none"
}
// concat
let closeMethodConcat = () => {
  document.getElementById("header-array-Concat").style.display = "none"
}
// Entries

let closeMethodEnteies = () => {
  document.getElementById("header-array-Entries").style.display = "none"
}

let entriesOpen = () => {
  document.getElementById("header-array-Entries").style.display = "block"
}
// filter
let filterOpen = () => {
  document.getElementById("header-array-filter").style.display = "block"
}
// let closefilter = () => {
//   document.getElementById("header-array-filter").style.display = "block"
// }
