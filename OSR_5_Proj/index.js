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

//registarion open
function registrationPageOpen() {
  document.getElementById("Regiestrationform").style.display = "block"
  document.getElementById("maindbody").style.overflow = "hidden"
}

// registration save in local
let localStorageaddRegistration =
  JSON.parse(localStorage.getItem("registrationData")) || []

function registartionLocaclSave(event) {
  event.preventDefault()
  // alert("hello")
  let regPass = document.getElementById("input_Password-registartion").value
  let regrePass = document.getElementById(
    "input_re-passwordcheck-registartion"
  ).value

  if (regPass == regrePass) {
    let registarPeople = {
      Name: document.getElementById("input_fillname-registartion").value,
      Email: document.getElementById("input_Emailid-registartion").value,
      passwrd: document.getElementById("input_Password-registartion").value,
    }

    localStorageaddRegistration.push(registarPeople)

    localStorage.setItem(
      "registrationData",
      JSON.stringify(localStorageaddRegistration)
    )

    document.getElementById("input_fillname-registartion").value = ""
    document.getElementById("input_Emailid-registartion").value = ""
    document.getElementById("input_Password-registartion").value = ""
    document.getElementById("input_re-passwordcheck-registartion").value = ""
    //window.location.replace(
    //"./allMethodSecondindexpages/StringPage/String.html"
    // )
    window.location.reload()
  } else {
    document.getElementById("error_msg_1").style.display = "block"
    // document.getElementById("error_msg").innerText =
    //   "The Password is not Match!"
  }
}
let registrationDataUser = []
let localDataUser = localStorage.getItem("registrationData")
registrationDataUser = JSON.parse(localDataUser)

function checkEmail() {
  let checkEmail = document.getElementById("input_Emailid-registartion").value
  let status = undefined
  console.log(localDataUser)
  console.log(localDataUser != null)
  if (localDataUser != null) {
    status = registrationDataUser.some(
      (emailcheck) => emailcheck.Email == checkEmail
    )
    console.log(status)
  }

  if (status) {
    let btn = document.getElementById("btn_1_registration")
    btn.setAttribute("disabled", true)
    document.getElementById("error_msg").style.display = "block"
  }
}

function checkemail_1() {
  document.getElementById("error_msg").style.display = "none"
  let btn = document.getElementById("btn_1_registration")
  btn.removeAttribute("disabled")
}

function checkpassword() {
  document.getElementById("error_msg_1").style.display = "none"
}

//Login Form
function loginSuccsec(event) {
  event.preventDefault()
  let loginEmail = document.getElementById("emailIdLogin").value
  let loginpassword = document.getElementById("PasswordLogin").value
  let local = []
  let localget = localStorage.getItem("registrationData")

  if (localget != null) {
    local = JSON.parse(localget)
    let mailidcheck = local.some((email) => email.Email == loginEmail)
    console.log(mailidcheck)
    let passwordcheck = local.some((email) => email.passwrd == loginpassword)
    console.log(passwordcheck)

    if (mailidcheck && passwordcheck) {
      document.getElementById("login_Msg").style.display = "block"
      localStorage.setItem("emailIDLogin", loginEmail)
      window.location.replace("./login.html")
    } else {
      document.getElementById("login_Msg").style.display = "block"
      document.getElementById("login_Msg").style.color = "red"
      document.getElementById("login_Msg").style.background = "white"
      document.getElementById("login_Msg").innerText =
        "Email Id or Password is Incorrect !"
    }
  }
}
window.history.forward()

function noBack() {
  window.history.forward()
}
noBack()
