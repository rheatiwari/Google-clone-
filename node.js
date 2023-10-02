// JavaScript for the Google clone

// Function to handle form submission
function handleSearch(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const query = document.querySelector('#search-input').value;
    
    if (query.trim() !== '') {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl; // Redirect to Google search results
    }
}

// Add an event listener to the form
const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', handleSearch);
