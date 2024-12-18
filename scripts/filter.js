document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('input[type="search"]');
    const categorySelect = document.getElementById("pet-select");
    const ageSelect = document.querySelectorAll("#pet-select")[1]; // Second dropdown for age
    const noResults = document.getElementById("no-results");

    function filterPets() {
        const searchQuery = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value.toLowerCase();
        const selectedAge = ageSelect.value.toLowerCase();

        // Select all pet cards
        const petCards = document.querySelectorAll('[data-category][data-age]');
        let hasResults = false;

        // Iterate through all pet cards
        petCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category").toLowerCase();
            const cardAge = card.getAttribute("data-age").toLowerCase();
            const cardTitle = card.querySelector("h4").innerText.toLowerCase();

            // Check filters
            const matchesSearch = cardTitle.includes(searchQuery);
            const matchesCategory = selectedCategory === "all" || cardCategory === selectedCategory;
            const matchesAge = selectedAge === "all" || cardAge === selectedAge;

            if (matchesSearch && matchesCategory && matchesAge) {
                card.style.display = "block"; // Show card
                hasResults = true;
            } else {
                card.style.display = "none"; // Hide card
            }
        });

        // Show or hide "No Results" message based on matches
        if (hasResults) {
            noResults.classList.add("hidden"); // Hide message
        } else {
            noResults.classList.remove("hidden"); // Show message
        }
    }

    // Event listeners for inputs
    searchInput.addEventListener("input", filterPets);
    categorySelect.addEventListener("change", filterPets);
    ageSelect.addEventListener("change", filterPets);
});
