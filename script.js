document.querySelector('.search-btn').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
    }
});
