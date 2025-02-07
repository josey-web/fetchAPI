const advice = document.querySelector(".advice"),
  getBtn = document.querySelector(".get-advice-btn"),
  err = document.querySelector(".err");

const apiUrl = "https://api.adviceslip.com/advice";

function loadAdvice() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      advice.textContent = `"${data.slip.advice}"`;
    })
    .catch((error) => {
      console.error("Error:", error);
      err.innerHTML = `Failed to load advice. <br> Please try again later.`;
    });
}

loadAdvice();

getBtn.addEventListener("click", loadAdvice);
