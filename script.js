const url = "https://api.adviceslip.com/advice"

let adviceID = document.getElementById("adviceID")
let adviceText = document.getElementById("adviceText")

async function getRandomAdvice() {
  const response = await fetch(url)
  const data = await response.json()

  const slip = {
    id: data.slip.id,
    advice: data.slip.advice
  }

  adviceID.innerText = slip.id
  adviceText.innerText = `"${slip.advice}"`
}

getRandomAdvice()
