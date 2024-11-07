// back stop
window.history.forward()

function noBack() {
  window.history.forward()
}
noBack()

// nav bar color changer
function scrollNavbar() {
  let scrollNum = window.scrollY

  if (scrollNum > 360) {
    document.getElementById("navbarscroll").style.background = "#413551f2"
  } else if (scrollNum < 360) {
    document.getElementById("navbarscroll").style.background = ""
  }
}
window.addEventListener("scroll", scrollNavbar)

// lengthcheck
function checkength(event) {
  event.preventDefault()
  let spacesum = 0
  let numlength = document.getElementById("stringlength").value
  document.getElementById("inputUser").innerText = numlength
  for (let i = 0; i < numlength.length; i++) {
    if (numlength[i] == " ") {
      spacesum = spacesum + 1
      document.getElementById("spacelength").innerText =
        "space are used " + spacesum
    }
  }

  document.getElementById("lengthoutput").innerText = numlength.length
}

///close string method
function closemethodlen() {
  document.getElementById("header-string-method").style.display = "none"
}
// open string length method
function openLengthstring() {
  document.getElementById("header-string-method").style.display = "block"
}

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

//concat
function checkConcat(event) {
  event.preventDefault()

  let firstName = document.getElementById("stringConcatFirst").value
  let lastName = document.getElementById("stringlConcatLast").value
  let emailId = document.getElementById("stringConcatEmail").value

  document.getElementById(
    "concatfirstname"
  ).innerText = `User name : ${firstName.concat(" " + lastName)}`
  document.getElementById("concatemail").innerText = `User email : ${emailId}`
}
///close string method
function closemethodcon() {
  document.getElementById("header-Concat-method").style.display = "none"
}
// open string length method
function openConcatstring() {
  document.getElementById("header-Concat-method").style.display = "block"
}

// split
function checkSplit(event) {
  event.preventDefault()
  let inputSentance = document.getElementById("stringSplitname").value
  let checksplit = inputSentance.split("")
  document.getElementById(
    "splitName"
  ).innerText = `It return new array and sperate all the words: [ ${checksplit} ]`
}

function closemethodspl() {
  document.getElementById("header-Split-method").style.display = "none"
}

function opensplitstring() {
  document.getElementById("header-Split-method").style.display = "block"
}

// Slice
function checkSlice(event) {
  event.preventDefault()
  let slicecheck = document.getElementById("spliceEx").innerText

  let inputfirstslice = document.getElementById("sliceindexvalue_1").value

  let inputsecondslice = document.getElementById("sliceindexvalue_2").value
  let ouptputSlice = slicecheck.slice(inputfirstslice, inputsecondslice)
  if (inputfirstslice < 0 || inputsecondslice < 0) {
    document.getElementById("SlicetextOutput").innerText =
      "index starting 0 So minuse value are not allow"
    document.getElementById("SlicetextOutput").style.color = "red"
  } else {
    console.log(ouptputSlice)
    document.getElementById(
      "SlicetextOutput"
    ).innerText = `the extart part is :- ${ouptputSlice}`
  }
}

function closemethodsli() {
  document.getElementById("header-Slice-method").style.display = "none"
}

function opensplitstring() {
  document.getElementById("header-Slice-method").style.display = "block"
}

// charcodeat
function checkCharcodeat(event) {
  event.preventDefault()
  let stringtextinput = document.getElementById("stringcharcodevalue").value
  let indexinput = document.getElementById("charcodeindexvalue").value
  let chrcode = stringtextinput.charCodeAt(indexinput)
  document.getElementById(
    "chrcodetextOutput"
  ).innerText = `the UTF code of :-( ${stringtextinput[indexinput]} ) the code is :- ${chrcode}`
}

function closemethodcharcode() {
  document.getElementById("header-charcode-method").style.display = "none"
}

function opencharCodeAtstring() {
  document.getElementById("header-charcode-method").style.display = "block"
}

// charat()
function checkCharAt(event) {
  event.preventDefault()
  let extextstring = document.getElementById("stringtext").innerText
  let inputindexValue = document.getElementById("charAtindexvalue").value
  let Output = extextstring.charAt(inputindexValue)
  if (Output == " ") {
    document.getElementById(
      "chrattextOutput"
    ).innerText = `On the index : (${inputindexValue} )the word is persent is : Space`
  } else {
    document.getElementById(
      "chrattextOutput"
    ).innerText = `On the index : (${inputindexValue} )the word is persent is : ${Output}`
  }
}

function opencharAtstring() {
  document.getElementById("header-charat-method").style.display = "block"
}

function closemethodcharat() {
  document.getElementById("header-charat-method").style.display = "none"
}

// include
function checkIncludes(event) {
  event.preventDefault()
  const stringte = document.getElementById("stringtext").innerText
  let inputtext = document.getElementById("includetextvalue").value
  let inputindex = document.getElementById("includeindexvalue").value
  let Outputinciludes = stringte.includes(inputtext, inputindex)
  document.getElementById(
    "includeOutput"
  ).innerText = `checking :( ${inputtext}) is persent ( ${Outputinciludes})`
}

let closemethodinclude = () => {
  document.getElementById("header-include-method").style.display = "none"
}

let openincludes = () => {
  document.getElementById("header-include-method").style.display = "block"
}
// repeat
function checkRepeat(event) {
  event.preventDefault()
  let strin = document.getElementById("stringtext_repeat").innerText
  let repeatnum = document.getElementById("repeatindexvalue").value
  let outputrepeat = strin.repeat(repeatnum)
  document.getElementById(
    "textrepeat"
  ).innerText = `the string repeat ${repeatnum} times`

  document.getElementById("repeatOutput").innerText = outputrepeat
}

function closemethodrepeat() {
  document.getElementById("header-Repeat-method").style.display = "none"
}

function openrepeat() {
  document.getElementById("header-Repeat-method").style.display = "block"
}

// match

function checkmatch(event) {
  event.preventDefault()
  let stringtext = document.getElementById("stringtext_match").innerText
  let macthtext = document.getElementById("matchindexvalue").value

  console.log(typeof stringtext)
  console.log(typeof macthtext)

  // var re = new RegExp(macthtext, "g")
  let outputmatach = stringtext.match(macthtext)

  document.getElementById(
    "matchOutput"
  ).innerHTML = `We Get output in array of object :-<br`

  document.getElementById(
    "matchOtput_2"
  ).innerText = ` [{0:${outputmatach[0]} ,index:${outputmatach.index} ,input:${outputmatach.input}}]`

  console.log(outputmatach)
}

function closemethodmatch() {
  document.getElementById("header-match-method").style.display = "none"
}

function openmatch() {
  document.getElementById("header-match-method").style.display = "block"
}

// uppercase
function checkupercase(event) {
  event.preventDefault()
  let inputstr = document.getElementById("Uppercasevaluetext").value
  let uppercasestr = inputstr.toUpperCase()
  document.getElementById(
    "Uppercaseoutput"
  ).innerHTML = `The orginal string ;- <b> ${inputstr}</b> <br>change to capital letters :- <b>${uppercasestr}</b>`
}
//lovercase
function checklowercase(event) {
  event.preventDefault()
  let inputstr = document.getElementById("lowercasevaluetext").value
  let lowercasestr = inputstr.toLowerCase()
  document.getElementById(
    "lowercaseoutput"
  ).innerHTML = `The orginal string ;- <b> ${inputstr}</b> <br>change to small letters :- <b>${lowercasestr}</b>`
}
let closemethoduppercase = () => {
  document.getElementById("header-uppercasemethod").style.display = "none"
}

function openlowercase() {
  document.getElementById("header-lowercasemethod").style.display = "block"
  document.getElementById("header-uppercasemethod").style.display = "none"
}

function closemethdlowecase() {
  document.getElementById("header-lowercasemethod").style.display = "none"
}

function btntouppercase() {
  document.getElementById("header-uppercasemethod").style.display = "block"
  document.getElementById("header-lowercasemethod").style.display = "none"
}

function upperdownlettercasematch() {
  document.getElementById("header-lowercasemethod").style.display = "block"
}
//replace
function checkReplace(event) {
  event.preventDefault()

  let stringTextInput = document.getElementById("stringvaluetext").value
  let replaceTextInput = document.getElementById("Replacevaluetext-1").value
  let newTextInput = document.getElementById("Replacevaluetext-2").value

  let replaceouput = stringTextInput.replace(replaceTextInput, newTextInput)
  console.log(replaceouput)

  document.getElementById(
    "replaceOuput"
  ).innerHTML = `<p>Original string :-  ${stringTextInput}  <br>
  Replace method  change sting :-${replaceouput}</p>`
}

function closemethdreplace() {
  document.getElementById("header-replacemethod").style.display = "none"
}

function replaceOpen() {
  document.getElementById("header-replacemethod").style.display = "block"
}
//replaceall
function checkReplaceall(event) {
  event.preventDefault()

  let stringTextInput = document.getElementById(
    "stringRepalceallvaluetext"
  ).value
  let replaceTextInput = document.getElementById("Replceallvaluetext-1").value
  let newTextInput = document.getElementById("Replaceallvaluetext-2").value

  let replaceouput = stringTextInput.replaceAll(replaceTextInput, newTextInput)
  console.log(replaceouput)

  document.getElementById(
    "replaceallOuput"
  ).innerHTML = `<p>Original string :-  ${stringTextInput}  <br>
  Replace method  change sting :-${replaceouput}</p>`
}

function closemethdreplaceAll() {
  document.getElementById("header-replacALL").style.display = "none"
}

function replaceAllOpen() {
  document.getElementById("header-replacALL").style.display = "block"
}
