document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
  
    // Input Fields
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phoneInput");
  
    // Error Messages
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
  
    // Popup Modal
    const popupModal = document.getElementById("popupModal");
    const closePopup = document.getElementById("closePopup");
  
    // Form Validation Function
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let valid = true;
  
      // Name Validation
      if (nameInput.value.trim() === "") {
        nameError.classList.remove("hidden");
        nameInput.classList.add("border-red-500");
        valid = false;
      } else {
        nameError.classList.add("hidden");
        nameInput.classList.remove("border-red-500");
      }
  
      // Email Validation
      if (emailInput.value.trim() === "") {
        emailError.classList.remove("hidden");
        emailInput.classList.add("border-red-500");
        valid = false;
      } else {
        emailError.classList.add("hidden");
        emailInput.classList.remove("border-red-500");
      }
  
      // Phone Validation
      if (phoneInput.value.trim() === "") {
        phoneError.classList.remove("hidden");
        phoneInput.classList.add("border-red-500");
        valid = false;
      } else {
        phoneError.classList.add("hidden");
        phoneInput.classList.remove("border-red-500");
      }
  
      // If All Fields Are Valid
      if (valid) {
        popupModal.classList.remove("hidden"); // Show the popup
        form.reset(); // Reset the form fields
      }
    });
  
    // Close Popup Function
    closePopup.addEventListener("click", () => {
      popupModal.classList.add("hidden");
    });
  });

function goBack() {
    window.history.back();
}