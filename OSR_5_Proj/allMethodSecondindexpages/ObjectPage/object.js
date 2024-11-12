// Assign
let checkAssign = (event) => {
  event.preventDefault()
  let firstkeyObj = document.getElementById("objAssignkey_first").value

  let secondkeyObj = document.getElementById("objAssignkey_second").value

  let firstObj = JSON.parse(firstkeyObj)
  let secondObj = JSON.parse(secondkeyObj)

  let outputAssign = Object.assign(firstObj, secondObj)
  console.log(outputAssign)

  let detailsObjAssig = ""

  for (let [key, value] of Object.entries(outputAssign)) {
    detailsObjAssig += key + ":" + value + "," + "<br>"
  }

  document.getElementById(
    "AssignOutput"
  ).innerHTML = ` the output :- <br><br> {${detailsObjAssig}}`
}

let closemethodAssign = () => {
  document.getElementById("header-obj-Assign").style.display = "none"
}
let openAssign = () => {
  document.getElementById("header-obj-Assign").style.display = "block"
}

// KEYY
let checkKey = (event) => {
  event.preventDefault()
  let inputObj = document.getElementById("objKeyMethod").value
  let jsonObj = JSON.parse(inputObj)
  document.getElementById(
    "OutputKey"
  ).innerHTML = `the key of object is =[${Object.keys(jsonObj)}]`
}

let closemethodKey = () => {
  document.getElementById("header-obj-key").style.display = "none"
}

let openKey = () => {
  document.getElementById("header-obj-key").style.display = "block"
}

// value
let checkValue = (event) => {
  event.preventDefault()
  let inputObj = document.getElementById("objValueMethod").value
  let jsonObj = JSON.parse(inputObj)

  document.getElementById(
    "Outputvalue"
  ).innerHTML = `the values of object is =[${Object.values(jsonObj)}]`
}

let closemethodVal = () => {
  document.getElementById("header-obj-value").style.display = "none"
}

let openValue = () => {
  document.getElementById("header-obj-value").style.display = "block"
}

// entries
let checkEntrise = (event) => {
  event.preventDefault()
  let inputObj = document.getElementById("objEntriseMethod").value
  let jsonObj = JSON.parse(inputObj)
  let outputentries = Object.entries(jsonObj)
  let data = ""
  for (let i of outputentries) {
    data += "[" + i + "]" + ","
  }
  document.getElementById(
    "OutputEntries"
  ).innerHTML = `the entries Output :-<br>[${data}]`
}

let closemethodentries = () => {
  document.getElementById("header-obj-entries").style.display = "none"
}
let openEntries = () => {
  document.getElementById("header-obj-entries").style.display = "block"
}
// create
let closeCreateMethod = () => {
  document.getElementById("header-obj-create").style.display = "none"
}
let openCreate = () => {
  document.getElementById("header-obj-create").style.display = "block"
}
