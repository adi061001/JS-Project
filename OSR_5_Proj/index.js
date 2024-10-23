// local storage Contact email address

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

//login page open

function loginPageOpen() {
  // alert("go")
  document.getElementById("closeLOginForm").style.display = "block"
  document.getElementById("Loginform").style.display = "block"
  document.getElementById("maindbody").style.overflow = "hidden"
}

//Close login form
function closeForm() {
  document.getElementById("closeLOginForm").style.display = "none"
  document.getElementById("Loginform").style.display = "none"
}
