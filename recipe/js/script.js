// Sample data array
const items = [
    { name: 'Spaghetti Carbonara' },
    { name: 'Tiramisu' },
    { name: 'Pasta Primavera' },
    { name: 'Bruschetta' },
    { name: 'Caesar Salad' },
    { name: 'Minestrone Soup' },
    { name: 'Risotto' },
    { name: 'Lasagna' },
];

// Getting HTML elements
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

// Event listener for input
searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    
    // Filtering results based on query
    const results = items.filter(item => item.name.toLowerCase().includes(query));

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Display results
    results.forEach(result => {
        const div = document.createElement('div');
        div.textContent = result.name; // Display the item name
        resultsContainer.appendChild(div);
    });

    // If no results found
    if (results.length === 0) {
        const noResultsDiv = document.createElement('div');
        noResultsDiv.textContent = 'No results found';
        resultsContainer.appendChild(noResultsDiv);
    }
});
