document.getElementById('imageInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const preview = document.getElementById('preview');
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                
                canvas.width = 667;
                canvas.height = 551;

                const scale = Math.max(
                    canvas.width / img.width,
                    canvas.height / img.height
                ); 

                const cropWidth = canvas.width / scale;
                const cropHeight = canvas.height / scale;

                const offsetX = (img.width - cropWidth) / 2;
                const offsetY = (img.height - cropHeight) / 2;

                ctx.drawImage(
                    img,
                    offsetX,
                    offsetY,
                    cropWidth,
                    cropHeight,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );

                const croppedImageUrl = canvas.toDataURL();

                preview.innerHTML = ''; 
                const newImage = document.createElement('img');
                newImage.src = croppedImageUrl;
                newImage.alt = 'Cropped Image';
                newImage.className = 'rounded-lg border-2 border-gray-400 shadow-2xl';
                preview.appendChild(newImage); 
            };

            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = `<img src="/src/imgs/attach.png" alt="Image" class="rounded-lg border-2 border-gray-400 shadow-2xl">`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
  
    // Input Fields
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("locationInput");
    const phoneInput = document.getElementById("phoneInput");
    const imageInput = document.getElementById("imageInput");
  
    // Error Messages
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("locationError");
    const phoneError = document.getElementById("phoneError");
    const imageError = document.getElementById("imageError");
  
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

      if (imageInput.value.trim() === "") {
        imageError.classList.remove("hidden");
        imageInput.classList.add("border-red-500");
        valid = false;
      } else {
        imageError.classList.add("hidden");
        imageInput.classList.remove("border-red-500");
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
