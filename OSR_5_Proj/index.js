console.log(window.screenX)

function headerScroll() {
  if (window.scrollY > 0) {
    console.log("change it")
  }
}

let contactEmailIds = []
function contacatEmailId(event) {
  event.preventDefault()

  let contactEmailIdget = document.getElementById("inputCoantactMail").value
  contactEmailIds.push(contactEmailIdget)

  localStorage.setItem("email", contactEmailIds)
  document.getElementById("inputCoantactMail").value = " "
  let m = localStorage.getItem("email")
  console.log([m])
}

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
