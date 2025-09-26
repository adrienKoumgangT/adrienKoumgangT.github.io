// Function to change language
function changeLanguage(lang) {
    // Hide all elements
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.style.display = 'none';
    });

    // Show elements for the selected language
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(element => {
        element.style.display = 'flex';
    });

    // Update the language switcher
    document.getElementById('language-select').value = lang;

    // Save the selected language in localStorage
    localStorage.setItem('language', lang);
}

// Set the default language
let defaultLanguage = localStorage.getItem('language') || 'en';
changeLanguage(defaultLanguage);

// Add event listener to the language switcher
document.getElementById('language-select').addEventListener('change', function () {
    changeLanguage(this.value);
});
