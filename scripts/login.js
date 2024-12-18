document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    const userInput = document.getElementById("userInput");
    const passInput = document.getElementById("passInput");

    const userError = document.getElementById("userError");
    const passError = document.getElementById("passError");
    const passError1 = document.getElementById("passError1");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let valid = true;

      if (userInput.value.trim() === "") {
        userError.classList.remove("hidden");
        userInput.classList.add("border-red-500");
        valid = false;
      } else {
        userError.classList.add("hidden");
        userInput.classList.remove("border-red-500");
      }

      if (passInput.value.trim() === "") {
        passError.classList.remove("hidden");
        passInput.classList.add("border-red-500");
        valid = false;
      } else if (passInput.value.length < 8) {
        passError.classList.add("hidden");
        passError1.classList.remove("hidden");
        passError1.classList.add("border-red-500");
        valid = false;
      } else {
        passError.classList.add("hidden");
        passError1.classList.add("hidden");
        passInput.classList.remove("border-red-500");
      }

      if (valid) {
        popupModal.classList.remove("hidden");
        form.reset(); 
      }
    });
  
    closePopup.addEventListener("click", () => {
      popupModal.classList.add("hidden");
    });
});

function goBack() {
  window.history.back();
}