async function LoginCheck(event) {
  event.preventDefault()
  let idNameStr = document.getElementById("objLoginID_first").value
  let inputPassStr = document.getElementById("objLoginPass_second").value
  await fetch("https://dummyjson.com/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: idNameStr,
      password: inputPassStr,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.email == "emily.johnson@x.dummyjson.com") {
        document.getElementById(
          "LoginOutput"
        ).innerHTML = `Login Success by :- ${data.username}`
      } else {
        document.getElementById("LoginOutput").innerHTML = `Login Failed !`
      }
    })
}
let closemethodAsync = () => {
  document.getElementById("header-async-await").style.display = "none"
}
let openAsync = () => {
  document.getElementById("header-async-await").style.display = "block"
}
async function ApiCall(event) {
  event.preventDefault()
  document.getElementById("data-table").style.display = "block"
  let inputApi = document.getElementById("ApiGet_first").value
  try {
    const response = await fetch(inputApi)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    let mainTable = document.getElementById("data-table")
    for (let i = 0; i <= data.products.length - 1; i++) {
      let row = document.createElement("tr")
      let firstdata = document.createElement("td")
      firstdata.innerText = data.products[i].id
      let seconddata = document.createElement("td")
      seconddata.innerText = data.products[i].title
      let thirddata = document.createElement("td")
      thirddata.innerText = "$ " + data.products[i].price
      row.appendChild(firstdata)
      row.appendChild(seconddata)
      row.appendChild(thirddata)
      mainTable.appendChild(row)
    }
  } catch (error) {
    console.error("Error fetching data:", error)
  }
} // Call the function
let closemethodAsyncGetApi = () => {
  document.getElementById("header-async-await-dataget").style.display = "none"
}
let openAsyncSecond = () => {
  document.getElementById("header-async-await-dataget").style.display = "block"
}

let closemethodAsyncclosetheory = () => {
  document.getElementById("header-async-await-Theory").style.display = "none"
}
let openAsyncTheory = () => {
  document.getElementById("header-async-await-Theory").style.display = "block"
}
