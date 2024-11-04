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