// Get modal elements
const confirmModal = document.getElementById('confirmModal');
const thankYouModal = document.getElementById('thankYouModal');

// Open the confirmation modal
function openConfirmModal() {
    confirmModal.classList.remove('hidden');
}

// Handle "Yes" button
function handleYes() {
    confirmModal.classList.add('hidden');
    thankYouModal.classList.remove('hidden');
}

// Handle "No" button
function handleNo() {
    confirmModal.classList.add('hidden');
}

// Close the Thank You modal
function closeThankYouModal() {
    thankYouModal.classList.add('hidden');
}