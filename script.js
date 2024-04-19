const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

document.addEventListener('DOMContentLoaded', function() {
    const searchParams = new URLSearchParams(window.location.search);
    const searchTerm = searchParams.get('q');
    if (searchTerm) {
        searchBooks(searchTerm);
    } 
});

searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        window.location.href = `results.html?q=${encodeURIComponent(searchTerm)}`;
        //searchBooks(searchTerm);
    } else {
        searchResults.innerHTML = '<p>Please enter a book name.</p>';
    }
});

// function to fetch and display results based on a query
function searchBooks(query) {
    // constructing api url from Google Books API
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayBooks(data.items);
        })
        .catch(error => {
            // display error message if fetching data fails
            console.error('Error fetching data:', error);
            searchResults.innerHTML = '<p>An error occurred. Please try again later.</p>';
        });
}

// function to display book information in search results
function displayBooks(books) {
    if (books && books.length > 0) { // check to see if there are any books in the result
        searchResults.innerHTML = ''; // clear previous results
        // iterating through each book
        books.forEach(book => {
            // retrieving relevant information
            const title = book.volumeInfo.title;
            const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
            const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x192?text=No+Image';
            const description = book.volumeInfo.description ? book.volumeInfo.description : 'No description available';
            const categories = book.volumeInfo.categories ? book.volumeInfo.categories : 'unknown Genre(s)';
          const country = book.saleInfo && book.saleInfo.country ? book.saleInfo.country : 'Country Unknown';
          const saleability = book.saleInfo && book.saleInfo.saleability ? book.saleInfo.saleability : 'Unavailable';

            // generate HTML markup for each book and appending to seafch results
           const bookHTML = `
             <div class="book">
               <img src="${thumbnail}" alt="${title}" style="width: 128px; height: 192px; object-fit: cover; border-radius: 5px; float: left; margin-right: 10px; margin-bottom: 10px;">
               <div>
                 <h3 onclick="toggleDescription(this)">${title}</h3>
                 <p class="description hidden"><strong>Description:</strong> ${description}</p>
                 <p><strong>Author(s):</strong> ${authors}</p>
                 <p><strong>Genre(s):</strong> ${categories}</p>
                 <p><strong>Country(s):</strong> ${country}</p>
                 <p><strong>Saleability:</strong> ${saleability}</p>


               </div>
             </div>
           `;
            searchResults.innerHTML += bookHTML;
        });
    } else {
        searchResults.innerHTML = '<p>No books found.</p>';
    }
    //this is to hide the description when the user clicks on the book name
    const titles = document.querySelectorAll('.book h3');
        titles.forEach(title => {
            title.addEventListener('click', function() {
                const description = this.nextElementSibling;
                description.classList.toggle('hidden');
            });
        });
}



// function to toggle the visibility of the description
function toggleDescription(element) {
    console.log("Toggle function called");
    const description = element.nextElementSibling.nextElementSibling.nextElementSibling;
    console.log(description);
    description.classList.toggle('hidden');
}
