// Assign
let checkAssign = (event) => {
  event.preventDefault()
  let firstkeyObj = document.getElementById("objAssignkey_first").value

  let secondkeyObj = document.getElementById("objAssignkey_second").value

  let dataobj = (b) => {
    return Object.fromEntries(b)
  }

  let jsonforArr = JSON.parse("[" + firstkeyObj + "]")

  let firstObjdata = dataobj(jsonforArr)

  let dataobjsec = (b) => {
    return Object.fromEntries(b)
  }

  let jsonforArrSecond = JSON.parse("[" + secondkeyObj + "]")

  let seconObjct = dataobjsec(jsonforArrSecond)

  let Obj = Object.assign({}, firstObjdata, seconObjct)

  let detailsObjAssig = ""
  let detailsObjAssigSecond = ""
  for (let [key, value] of Object.entries(Obj)) {
    detailsObjAssigSecond
    detailsObjAssig += key + ":" + value + "," + "<br>"
  }

  document.getElementById(
    "AssignOutput"
  ).innerHTML = ` the output :- <br><br> {${detailsObjAssig}}`
}

let closemethodAssign = () => {
  document.getElementById("header-array-len").style.display = "none"
}
let openAssign = () => {
  document.getElementById("header-array-len").style.display = "block"
}

const targetObject = getElemtntId("targetObject").value
const sourceObject = getElemtntId("sourceObject").value
// const value2 = getElemtntId("value2")
let objectOne = JSON.parse(targetObject)
let objectTwo = JSON.parse(sourceObject)
const resultDiv = getElemtntId("assignResultDiv")
let result = Object.assign(objectOne, objectTwo)
let str = JSON.stringify(result)
console.log(result)
resultDiv.textContent = "The New String is :- " + str
resultDiv.style.fontSize = 30
targetObject = " "
sourceObject = " "
